import React from "react";

export default function PdfReport({
  reportRef,
  image,
  dreamResult,
  groupedData,
  answers,
}) {
  return (
    <div className="absolute left-[-9999px] top-0">
      <div
        ref={reportRef}
        className="relative p-14 text-gray-900 w-[900px]"
        style={{
          background: "rgba(255,255,255,0.92)",
          borderRadius: "28px",
        }}
      >
        {/* HEADER */}
        <div className="flex items-center justify-between mb-14">
          <div>
            <h1 className="text-5xl font-extrabold text-indigo-700 leading-tight">
              Dream Index Career Report
            </h1>
            <p className="text-lg text-gray-600 mt-2">
              Personalized career suitability analysis
            </p>
          </div>

          {image && (
            <img
              src={image}
              alt="Profile"
              className="w-32 h-32 rounded-full border-4 border-indigo-500 shadow-lg"
            />
          )}
        </div>

        {/* HERO SCORE */}
        {dreamResult && (
          <div
            className="mb-16 p-10 rounded-3xl"
            style={{
              background: "linear-gradient(135deg,#eef2ff,#ffffff)",
              border: "1px solid #e0e7ff",
            }}
          >
            <p className="text-sm uppercase tracking-wider text-indigo-600 mb-2">
              Executive Summary
            </p>

            <div className="flex items-center justify-between">
              <div>
                <p className="text-7xl font-extrabold text-indigo-700">
                  {dreamResult.overall_percentage}%
                </p>
                <p className="text-gray-600 mt-2 text-lg">
                  Career Success Probability
                </p>
              </div>

              <div className="px-6 py-3 rounded-full bg-green-100 text-green-700 font-semibold text-sm">
                Strong Career Match
              </div>
            </div>

            <p className="text-gray-600 mt-6 max-w-2xl">
              This score represents how closely your interests, skills, and
              preferences align with the demands of this career path.
            </p>
          </div>
        )}

        {/* CATEGORY BREAKDOWN */}
        {dreamResult && (
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              Category Breakdown
            </h2>

            <div className="grid grid-cols-3 gap-6">
              {Object.entries(dreamResult.breakdown).map(([cat, val]) => (
                <div
                  key={cat}
                  className="p-6 rounded-2xl bg-white shadow-sm border"
                >
                  <p className="text-sm text-gray-500 mb-2">{cat}</p>
                  <p className="text-3xl font-extrabold text-indigo-600">
                    {val}%
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* DETAILED RESPONSES */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-10">
            Detailed Responses
          </h2>

          {Object.entries(groupedData).map(([category, qs]) =>
            qs.length > 0 ? (
              <div key={category} className="mb-12">
                <h3 className="text-xl font-semibold text-indigo-700 mb-4">
                  {category}
                </h3>

                <div className="space-y-3">
                  {qs.map((q) => (
                    <div
                      key={q.questionid}
                      className="flex justify-between items-center bg-white px-6 py-4 rounded-xl border"
                    >
                      <span className="text-gray-700">{q.question}</span>
                      <span className="font-semibold text-indigo-600">
                        {answers[q.questionid]}/10
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ) : null
          )}
        </div>
      </div>
    </div>
  );
}
