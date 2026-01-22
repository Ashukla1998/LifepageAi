export default function TabsBar({ tabs, activeTab }) {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-10">
      {tabs.map((tab) => (
        <div
          key={tab}
          className={`px-5 py-2 rounded-xl text-sm font-semibold ${
            tab === activeTab
              ? "bg-orange-500 text-white"
              : "bg-white/10 text-white/60"
          }`}
        >
          {tab}
        </div>
      ))}
    </div>
  );
}
