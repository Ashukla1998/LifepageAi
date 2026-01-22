function PlanBlock({ title, items }) {
  return (
    <div
      className="
        bg-white/70 backdrop-blur-md
        rounded-3xl
        p-8
        shadow-md
      "
    >
      <h3 className="text-xl font-bold text-textPrimary mb-4">
        {title}
      </h3>

      <ul className="list-disc list-inside space-y-2 text-textSecondary">
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default PlanBlock; 