export default function ProgressBar({ answered, total }) {
  const percent = total === 0 ? 0 : Math.round((answered / total) * 100);

  return (
    <div className="flex items-center justify-between mb-10">
      <span className="text-sm text-white/80">
        {answered} / {total}
      </span>

      <div className="flex items-center gap-4 w-1/2">
        <div className="h-2 flex-1 bg-white/20 rounded-full overflow-hidden">
          <div
            className="h-full bg-orange-500 transition-all"
            style={{ width: `${percent}%` }}
          />
        </div>
        <span className="text-orange-400 font-semibold text-sm">
          {percent}% Complete
        </span>
      </div>
    </div>
  );
}
