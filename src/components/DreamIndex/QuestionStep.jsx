const PREFIX = {
  "What Is": "How much do you like ",
  Education: "How much did you like to study ",
  Skills: "How much did you like to develop ",
  Positives: "How much did you like ",
  Challenges: "Are you prepared to face ",
  "A Day Of": "How much did you like a day in ",
};

export default function QuestionStep({
  question,
  value,
  setValue,
  onNext,
  onPrevious,
  isFirst = false, // 👈 new
}) {
  if (!question) return null;

  return (
    <>
      <h2 className="text-3xl font-extrabold text-center mb-12">
        {PREFIX[question.que_category]}
        {question.question}
      </h2>

      {/* Slider */}
      <input
        type="range"
        min={1}
        max={10}
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        className="w-full accent-orange-500 mb-6"
      />

      {/* Scale */}
      <div className="flex justify-between text-xs text-white/60 mt-2">
        {[...Array(10)].map((_, i) => (
          <span key={i}>{i + 1}</span>
        ))}
      </div>

      {/* Current Value */}
      <div className="text-right text-orange-400 text-3xl font-extrabold mb-10">
        {value}
      </div>

      {/* Actions */}
      <div className="flex justify-between">
        <button
          onClick={onPrevious}
          disabled={isFirst}
          className={`px-6 py-3 rounded-xl transition
            ${
              isFirst
                ? "bg-white/10 text-white/40 cursor-not-allowed"
                : "bg-white/20 hover:bg-white/30"
            }
          `}
        >
          Previous
        </button>

        <button
          onClick={onNext}
          className="px-10 py-3 rounded-xl bg-orange-500 hover:bg-orange-600"
        >
          Next
        </button>
      </div>
    </>
  );
}
