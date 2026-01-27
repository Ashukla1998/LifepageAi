import { MdPlayArrow } from "react-icons/md";
import { useState } from "react";
import DreamIndexModal from "../../models/DreamIndex";
import VideoModal from "../../models/VideoModal";

export default function RightSide({
  blogSections,
  currentIndex,
  setCurrentIndex,
  contentIndex,
  setContentIndex,
  progress,
  journeyPhase,
  isCompleted,
  sessionid,
  questions,
  image
}) {
  const [dreamOpen, setDreamOpen] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);

  const currentSection = blogSections[currentIndex];
  const totalContents = currentSection.content.length;

  const isLastContent =
    contentIndex === totalContents - 1;

  /* ---------------- NAVIGATION ---------------- */
  const handleNext = () => {
    if (!isLastContent) {
      setContentIndex((prev) => prev + 1);
    } else {
      setCurrentIndex((prev) => prev + 1);
      setContentIndex(0);
    }
  };

  /* ---------------- COPY ---------------- */
  const phaseLabel = {
    intro: "Understanding the basics",
    analysis: "Analyzing your strengths",
    insight: "Connecting the insights",
    complete: "Journey complete",
  }[journeyPhase];

  const primaryCTA = {
    intro: "Next Insight →",
    analysis: "Continue Analysis →",
    insight: "Reveal Final Insight →",
    complete: "Analysis Complete",
  }[journeyPhase];

  /* ---------------- UI ---------------- */
  return (
    <div className="bg-white/80 backdrop-blur rounded-3xl p-10 shadow-sm border">

      {/* PROGRESS */}
      <div className="mb-12">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-semibold text-gray-600">
            {phaseLabel}
          </span>
          <span className="text-sm font-bold text-gray-900">
            {Math.round(progress * 100)}%
          </span>
        </div>

        <div className="relative h-3 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="absolute left-0 top-0 h-full bg-gradient-to-r from-brand to-brand/80 rounded-full transition-all duration-700 ease-out"
            style={{ width: `${progress * 100}%` }}
          />
        </div>
      </div>

      {/* ARTICLE */}
      <div className="flex justify-center">
        <article className="w-full max-w-[65ch]">

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 mb-6">
            {currentSection.title}
          </h1>

          {currentSection.content[contentIndex].subtitle && (
            <p className="text-lg sm:text-xl text-gray-500 leading-relaxed mb-10">
              {currentSection.content[contentIndex].subtitle}
            </p>
          )}

          {currentSection.content[contentIndex].image && (
            <img
              src={currentSection.content[contentIndex].image}
              alt=""
              className="w-full rounded-2xl mb-12"
            />
          )}

          <div className="text-[18px] sm:text-[19px] leading-[1.9] text-gray-700 space-y-6">
            {currentSection.content[contentIndex].text}
          </div>

        </article>
      </div>

      {/* ACTIONS */}
      <div className="mt-14 flex flex-col items-center w-full max-w-[65ch] mx-auto">

        {/* PRIMARY CTA */}
        {!isCompleted && (
          <button
            onClick={handleNext}
            className="
              w-full sm:w-auto
              px-10 py-4
              rounded-full
              font-semibold text-lg
              bg-brand text-white
              hover:bg-brand
              transition
            "
          >
            {primaryCTA}
          </button>
        )}

        {/* VIDEO CTA */}
        {!isCompleted && (
          <button
            onClick={() => setVideoOpen(true)}
            className="mt-4 inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition"
          >
            <MdPlayArrow size={20} />
            2-min expert explanation
          </button>
        )}

        {/* COMPLETION STATE */}
        {isCompleted && (
          <div className="mt-16 text-center w-full">

            <p className="text-sm uppercase tracking-wider text-gray-500 mb-3">
              Analysis Complete
            </p>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">
              Your Career Pattern Is Ready
            </h2>

            <p className="max-w-xl mx-auto text-gray-600 text-lg mb-10">
              Based on your responses, we’ve identified patterns
              across your skills, interests, and preferences.
            </p>

            <button
              onClick={() => setDreamOpen(true)}
              className="
                inline-flex items-center justify-center
                px-12 py-4
                rounded-full
                bg-brand text-white
                font-semibold text-lg
                hover:opacity-90
                transition
              "
            >
              View Your Dream Index
            </button>
          </div>
        )}
      </div>

      {/* MODALS */}
      <DreamIndexModal
        open={dreamOpen}
        onClose={() => setDreamOpen(false)}
        sessionData={questions}
        image={image}
      />

      <VideoModal
        isOpen={videoOpen}
        onClose={() => setVideoOpen(false)}
        videoUrl={`https://storage.googleapis.com/lifepage-video-android/${sessionid}/${sessionid}.mp4`}
      />
    </div>
  );
}
