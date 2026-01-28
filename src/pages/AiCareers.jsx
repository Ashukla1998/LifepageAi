import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { buildCareerPrompt } from "../hooks/buildCareerPrompt";
import { fetchCareers } from "../api/careerApi";
import ProfileLoadingScreen from "../components/ProfileLoadingScreen";

export default function AiCareers() {
  const { state } = useLocation();
  const discoverData = state?.discoverData;

  const [careers, setCareers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!discoverData) return;

    const prompt = buildCareerPrompt(discoverData);

    fetchCareers(prompt)
      .then(setCareers)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [discoverData]);

  if (loading) return <ProfileLoadingScreen />;
  if (error)
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500">
        {error}
      </div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50">
      <div className="max-w-5xl mx-auto px-4 py-12">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-textPrimary">
            Career options curated for you ✨
          </h1>
          <p className="mt-3 text-textSecondary max-w-2xl mx-auto text-sm sm:text-textSecondary">
            Based on what you enjoy and where you are right now.
            These aren’t final decisions — just good places to explore.
          </p>
        </div>

        {/* Career Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {careers.map((career, index) => (
            <div
              key={index}
              className="
                group relative cursor-pointer
                rounded-3xl bg-white border border-gray-100
                p-6 shadow-sm
                transition-all duration-300
                hover:-translate-y-1 hover:shadow-xl
              "
            >
              {/* Accent bar */}
              <div className="absolute inset-y-0 left-0 w-1 rounded-l-3xl bg-gradient-to-b from-amber-400 to-orange-500 opacity-70" />

              {/* Content */}
              <h2 className="text-lg font-semibold text-textPrimary group-hover:text-orange-600 transition-colors">
                {career.title}
              </h2>

              <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                {career.description}
              </p>

              {/* Divider */}
              <div className="mt-4 h-px bg-gray-100" />

              {/* Why it fits */}
              <div className="mt-4">
                <p className="text-xs uppercase tracking-wide text-gray-400">
                  Why this fits you
                </p>
                <p className="mt-1 text-sm text-amber-700 leading-relaxed">
                  {career.why_it_fits}
                </p>
              </div>

              {/* Hover hint */}
              <div className="mt-5 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                Click to explore this path →
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
