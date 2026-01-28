import React, { useState,useEffect } from "react";
import { useNavigate,useLocation  } from "react-router-dom";
import axios from "axios";
import { buildCareerPrompt } from "../hooks/buildCareerPrompt";
import { fetchCareers } from "../api/careerApi";

export default function Discover() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    stage: "",
    subjects: [],
    interests: [],
    otherSubject: "",
    otherInterest: "",
    showOtherSubject: false,
    showOtherInterest: false,
  });

  const stages = [
    "School (8–10)",
    "School (11–12)",
    "College",
    "Graduate",
    "Exploring / Career Break",
  ];

  const subjects = [
    "Mathematics",
    "Science",
    "Technology",
    "Commerce",
    "Arts / Design",
    "Languages",
    "Others",
  ];

  const interests = [
    "Problem Solving",
    "Creating / Designing",
    "Helping People",
    "Technology",
    "Teaching",
    "Writing",
    "Others",
  ];

  const handleSubmit = async() => {
    navigate("/aicareers", { state: { discoverData: form } });
    console.log("Forms Data",form);
  };

  const chipBase =
    "px-4 py-2 rounded-full border text-sm transition-all duration-200";
  const chipActive =
    "bg-brand text-white border-brand shadow-md scale-105";
  const chipInactive =
    "hover:bg-gray-50 hover:shadow-sm";

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-amber-50 to-white">
      <div className="w-full max-w-3xl bg-white/90 backdrop-blur-xl rounded-3xl shadow-xl px-6 py-8 sm:px-10">

        {/* Header */}
        <h1 className="text-2xl sm:text-3xl font-extrabold text-textPrimary text-center">
          Let’s Find a Career That Fits You ✨
        </h1>
        <p className="text-center text-textSecondary mt-2 text-sm">
          No pressure. Just explore what feels right.
        </p>

        {/* Name */}
        <div className="mt-8">
          <label className="text-sm font-medium text-textSecondary">
            What should we call you?
          </label>
          <input
            type="text"
            placeholder="Optional"
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
            className="mt-2 w-full rounded-full px-5 py-3 border text-center focus:ring-2 focus:ring-brand/40"
          />
        </div>

        {/* Stage */}
        <section className="mt-10">
          <p className="text-sm font-medium text-textSecondary mb-3">
            Where are you right now?
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {stages.map((s) => (
              <button
                key={s}
                onClick={() => setForm({ ...form, stage: s })}
                className={`${chipBase} ${
                  form.stage === s ? chipActive : chipInactive
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </section>

        {/* Subjects */}
        <section className="mt-10">
          <p className="text-sm font-medium text-textSecondary mb-3">
            Subjects you enjoy
          </p>
          <div className="flex flex-wrap gap-2">
            {subjects.map((s) => (
              <button
                key={s}
                onClick={() =>
                  s === "Others"
                    ? setForm((p) => ({
                        ...p,
                        showOtherSubject: !p.showOtherSubject,
                        otherSubject: "",
                        subjects: p.subjects.filter(
                          (v) => v !== p.otherSubject
                        ),
                      }))
                    : setForm((p) => ({
                        ...p,
                        subjects: p.subjects.includes(s)
                          ? p.subjects.filter((v) => v !== s)
                          : [...p.subjects, s],
                      }))
                }
                className={`${chipBase} ${
                  s === "Others"
                    ? form.showOtherSubject
                      ? chipActive
                      : chipInactive
                    : form.subjects.includes(s)
                    ? chipActive
                    : chipInactive
                }`}
              >
                {s}
              </button>
            ))}
          </div>

          {form.showOtherSubject && (
            <input
              autoFocus
              type="text"
              placeholder="Your subject"
              value={form.otherSubject}
              onChange={(e) =>
                setForm((p) => ({
                  ...p,
                  otherSubject: e.target.value,
                  subjects: e.target.value
                    ? [
                        ...p.subjects.filter(
                          (v) => v !== p.otherSubject
                        ),
                        e.target.value,
                      ]
                    : p.subjects.filter(
                        (v) => v !== p.otherSubject
                      ),
                }))
              }
              className="mt-4 w-full rounded-full px-5 py-3 border focus:ring-2 focus:ring-brand/40 animate-fadeIn"
            />
          )}
        </section>

        {/* Interests */}
        <section className="mt-10">
          <p className="text-sm font-medium text-textSecondary mb-3">
            What do you enjoy doing?
          </p>
          <div className="flex flex-wrap gap-2">
            {interests.map((i) => (
              <button
                key={i}
                onClick={() =>
                  i === "Others"
                    ? setForm((p) => ({
                        ...p,
                        showOtherInterest: !p.showOtherInterest,
                        otherInterest: "",
                        interests: p.interests.filter(
                          (v) => v !== p.otherInterest
                        ),
                      }))
                    : setForm((p) => ({
                        ...p,
                        interests: p.interests.includes(i)
                          ? p.interests.filter((v) => v !== i)
                          : [...p.interests, i],
                      }))
                }
                className={`${chipBase} ${
                  i === "Others"
                    ? form.showOtherInterest
                      ? chipActive
                      : chipInactive
                    : form.interests.includes(i)
                    ? chipActive
                    : chipInactive
                }`}
              >
                {i}
              </button>
            ))}
          </div>

          {form.showOtherInterest && (
            <input
              autoFocus
              type="text"
              placeholder="Your interest"
              value={form.otherInterest}
              onChange={(e) =>
                setForm((p) => ({
                  ...p,
                  otherInterest: e.target.value,
                  interests: e.target.value
                    ? [
                        ...p.interests.filter(
                          (v) => v !== p.otherInterest
                        ),
                        e.target.value,
                      ]
                    : p.interests.filter(
                        (v) => v !== p.otherInterest
                      ),
                }))
              }
              className="mt-4 w-full rounded-full px-5 py-3 border focus:ring-2 focus:ring-brand/40 animate-fadeIn"
            />
          )}
        </section>

        {/* CTA */}
        <div className="mt-12 text-center">
          <button
            onClick={handleSubmit}
            className="px-12 py-3 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
          >
            Explore Career Options →
          </button>
        </div>

      </div>
    </div>
  );
}
