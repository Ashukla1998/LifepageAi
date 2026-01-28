import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const validate = () => {
  const newErrors = {};

  if (!form.name.trim()) {
    newErrors.name = "Name is required";
  }

  if (!form.stage) {
    newErrors.stage = "Please select your current stage";
  }

  if (form.subjects.length === 0) {
    newErrors.subjects = "Select at least one subject";
  }

  if (form.showOtherSubject && !form.otherSubject.trim()) {
    newErrors.otherSubject = "Please specify your subject";
  }

  if (form.interests.length === 0) {
    newErrors.interests = "Select at least one interest";
  }

  if (form.showOtherInterest && !form.otherInterest.trim()) {
    newErrors.otherInterest = "Please specify your interest";
  }

  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
};


  const stages = [
    "School (8–10)",
    "School (11–12)",
    "College",
    "Graduate",
    "Exploring / Career Break",
  ];

  const subjects = [
  "Mathematics",
  "Physics",
  "Chemistry",
  "Biology",
  "Computer Science / IT",
  "Science (General)",
  "Commerce / Business Studies",
  "Economics",
  "Arts / Design",
  "Social Sciences",
  "Languages",
  "Psychology",
  "Others",
];


const interests = [
  "Problem Solving",
  "Logical Thinking",
  "Creativity / Designing",
  "Technology & Gadgets",
  "Data & Analysis",
  "Helping People",
  "Teaching / Mentoring",
  "Writing & Communication",
  "Research & Exploration",
  "Leadership & Management",
  "Business & Entrepreneurship",
  "Public Speaking",
  "Others",
];

  const handleSubmit = async() => {
    if (!validate() || submitting) return;
     setSubmitting(true);
    navigate("/sugestedcareers", { state: { discoverData: form } });
    // console.log("Forms Data",form);
    setSubmitting(false);
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
            What should we call you? <span className="text-red-800">*</span>
          </label>
          <input
            type="text"
            placeholder="eg:ABC"
            value={form.name}
            onChange={(e) => {
              setForm({ ...form, name: e.target.value });
              setErrors((p) => ({ ...p, name: "" }));
            }}
            className="mt-2 w-full rounded-full px-5 py-3 border border-brand text-center
           focus:outline-none focus:ring-2 focus:ring-brand/40 focus:border-brand transition"
          />
          {errors.name && (
            <p className="text-red-500 text-s mt-1 text-center"><span className="text-red-800">**</span>{errors.name}<span className="text-red-800">**</span></p>
          )}
        </div>

        {/* Stage */}
        <section className="mt-10">
          <p className="text-sm font-medium text-textSecondary mb-3">
            Where are you right now?<span className="text-red-800">*</span>
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {stages.map((s) => (
              <button
                key={s}
                // onClick={() => setForm({ ...form, stage: s })}
                onClick={() => {
                  setForm({ ...form, stage: s });
                  setErrors((prev) => ({ ...prev, stage: "" }));
                }}
                className={`${chipBase} ${
                  form.stage === s ? chipActive : chipInactive
                }`}
              >
                {s}
              </button>
            ))}
          </div>
          {errors.stage && (
              <p className="text-red-500 text-s mt-2 text-center"><span className="text-red-800">**</span>{errors.stage}<span className="text-red-800">**</span></p>
            )}
        </section>

        {/* Subjects */}
        <section className="mt-10">
          <p className="text-sm font-medium text-textSecondary mb-3">
            Subjects you enjoy<span className="text-red-800">*</span>
          </p>
          <div className="flex flex-wrap gap-2">
            {subjects.map((s) => (
              <button
                key={s}
                onClick={() => {
                  if (s === "Others") {
                    setForm((p) => ({
                      ...p,
                      showOtherSubject: !p.showOtherSubject,
                      otherSubject: "",
                      subjects: p.subjects.filter(
                        (v) => v !== p.otherSubject
                      ),
                    }));

                    // clear errors related to subject
                    setErrors((e) => ({
                      ...e,
                      subjects: "",
                      otherSubject: "",
                    }));
                  } else {
                    setForm((p) => ({
                      ...p,
                      subjects: p.subjects.includes(s)
                        ? p.subjects.filter((v) => v !== s)
                        : [...p.subjects, s],
                    }));

                    // clear subjects error
                    setErrors((e) => ({
                      ...e,
                      subjects: "",
                    }));
                  }
                }}

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
              onChange={(e) => {
                const value = e.target.value;

                setForm((p) => ({
                  ...p,
                  otherSubject: value,
                  subjects: value
                    ? [
                        ...p.subjects.filter(
                          (v) => v !== p.otherSubject
                        ),
                        value,
                      ]
                    : p.subjects.filter(
                        (v) => v !== p.otherSubject
                      ),
                }));

                // clear related errors while typing
                setErrors((prev) => ({
                  ...prev,
                  subjects: "",
                  otherSubject: value.trim() ? "" : prev.otherSubject,
                }));
              }}

              className="mt-4 w-full rounded-full px-5 py-3 border focus:ring-2 focus:ring-brand/40 animate-fadeIn"
            />
          )}

          {errors.subjects && (
              <p className="text-red-500 text-s text-center mt-2"><span className="text-red-800">**</span>{errors.subjects}<span className="text-red-800">**</span></p>
            )}

            {errors.otherSubject && (
              <p className="text-red-500 text-s text-center mt-2"><span className="text-red-800">**</span>{errors.otherSubject}<span className="text-red-800">**</span></p>
            )}

        </section>

        {/* Interests */}
        <section className="mt-10">
          <p className="text-sm font-medium text-textSecondary mb-3">
            What do you enjoy doing?<span className="text-red-800">*</span>
          </p>
          <div className="flex flex-wrap gap-2">
            {interests.map((i) => (
              <button
                key={i}
                onClick={() => {
                  if (i === "Others") {
                    setForm((p) => ({
                      ...p,
                      showOtherInterest: !p.showOtherInterest,
                      otherInterest: "",
                      interests: p.interests.filter(
                        (v) => v !== p.otherInterest
                      ),
                    }));

                    setErrors((e) => ({
                      ...e,
                      interests: "",
                      otherInterest: "",
                    }));
                  } else {
                    setForm((p) => ({
                      ...p,
                      interests: p.interests.includes(i)
                        ? p.interests.filter((v) => v !== i)
                        : [...p.interests, i],
                    }));

                    setErrors((e) => ({
                      ...e,
                      interests: "",
                    }));
                  }
                }}

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
              onChange={(e) => {
                const value = e.target.value;

                setForm((p) => ({
                  ...p,
                  otherInterest: value,
                  interests: value
                    ? [
                        ...p.interests.filter(
                          (v) => v !== p.otherInterest
                        ),
                        value,
                      ]
                    : p.interests.filter(
                        (v) => v !== p.otherInterest
                      ),
                }));

                setErrors((prev) => ({
                  ...prev,
                  interests: "",
                  otherInterest: value.trim() ? "" : prev.otherInterest,
                }));
              }}

              className="mt-4 w-full rounded-full px-5 py-3 border focus:ring-2 focus:ring-brand/40 animate-fadeIn"
            />
          )}

          {errors.interests && (
            <p className="text-red-500 text-s text-center mt-2"><span className="text-red-800">**</span>{errors.interests}<span className="text-red-800">**</span></p>
          )}

          {errors.otherInterest && (
            <p className="text-red-500 text-s text-center mt-2"><span className="text-red-800">**</span>{errors.otherInterest}<span className="text-red-800">**</span></p>
          )}


        </section>

        {/* CTA */}
        <div className="mt-12 text-center">
          <button
            onClick={handleSubmit}
            disabled={submitting}
            className={`px-12 py-3 rounded-full text-white font-semibold shadow-lg transition-all
              ${
                submitting
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-gradient-to-r from-amber-500 to-orange-500 hover:shadow-xl hover:-translate-y-0.5"
              }
            `}
          >
            Explore Career Options →
          </button>
        </div>

      </div>
    </div>
  );
}
