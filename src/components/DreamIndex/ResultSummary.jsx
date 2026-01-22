import { MdPictureAsPdf } from "react-icons/md";

export default function ResultSummary({
  calculating,
  dreamResult,
  onExport,
  exporting,
}) {
  return (
    <div className="text-center py-16">
      <h2 className="text-4xl font-extrabold mb-6">
        Your Dream Index Report Is Ready
      </h2>

      {calculating && (
        <p className="text-white/60 text-sm mb-6">
          Calculating your career success…
        </p>
      )}

      {dreamResult && !calculating && (
        <>
          <p className="text-sm uppercase tracking-wider text-white/60">
            Career Success Probability
          </p>

          <p className="text-6xl font-extrabold text-orange-400 mt-2">
            {dreamResult.overall_percentage}%
          </p>

          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-xl mx-auto">
            {Object.entries(dreamResult.breakdown).map(([cat, val]) => (
              <div
                key={cat}
                className="bg-white/10 rounded-xl p-4"
              >
                <p className="text-xs text-white/60">{cat}</p>
                <p className="text-xl font-bold text-orange-300">
                  {val}%
                </p>
              </div>
            ))}
          </div>
        </>
      )}

      <button
        onClick={onExport}
        disabled={exporting }
        className={`inline-flex items-center gap-3 px-12 py-4 rounded-xl font-semibold text-lg mt-10 ${
          exporting
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-orange-500 hover:bg-orange-600"
        }`}
      >
        <MdPictureAsPdf size={22} />
        {exporting ? "Preparing PDF…" : "Generate PDF Report"}
      </button>
    </div>
  );
}
