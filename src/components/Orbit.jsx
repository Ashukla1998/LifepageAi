// export default function OrbitItem({
//   angle,
//   label,
//   weight,
//   values = [],
//   radius = 160,
//   offsetX = "-50%",
//   offsetY = "-50%",
// }) {
//   const rad = (angle * Math.PI) / 180;
//   const x = radius * Math.cos(rad);
//   const y = radius * Math.sin(rad);

//   return (
//     <div
//       className="absolute top-1/2 left-1/2 z-20"
//       style={{
//         transform: `translate(${offsetX}, ${offsetY}) translate(${x}px, ${y}px)`,
//       }}
//     >
//       <div
//         className="
//           group
//           relative
//           bg-white/90 backdrop-blur
//           rounded-2xl
//           px-4 py-3
//           w-[100px] h-[83px]
//           text-center
//           shadow-[0_8px_24px_rgba(0,0,0,0.08)]
//           border border-gray-100
//           transition-all duration-300
//           hover:scale-105 hover:shadow-lg
//         "
//       >
//         {/* Label */}
//         <p className="text-[11px] font-semibold tracking-wider uppercase text-textSecondary">
//           {label}
//         </p>

//         {/* Weight */}
//         <p className="mt-1 text-2xl font-extrabold text-textPrimary leading-none">
//           {weight}
//           <span className="text-sm font-semibold align-top">%</span>
//         </p>

//         {/* Optional values (shown subtly on hover) */}
//         {values.length > 0 && (
//           <p className="
//             mt-2 text-[11px] leading-snug text-textSecondary
//             opacity-0 group-hover:opacity-100
//             transition-opacity duration-300
//           ">
//             {values.slice(0, 2).join(" · ")}
//           </p>
//         )}

//         {/* Accent ring */}
//         <div className="
//           absolute inset-0 rounded-2xl
//           ring-1 ring-transparent
//           group-hover:ring-brand/30
//           transition
//         " />
//       </div>
//     </div>
//   );
// }
export default function OrbitItem({
  angle,
  label,
  weight,
  radius = 160,
  offsetX = "-50%",
  offsetY = "-50%",
}) {
  const rad = (angle * Math.PI) / 180;
  const x = radius * Math.cos(rad);
  const y = radius * Math.sin(rad);

  return (
    <div
      className="absolute top-1/2 left-1/2 z-20"
      style={{
        transform: `translate(${offsetX}, ${offsetY}) translate(${x}px, ${y}px)`,
      }}
    >
      <div
        className="
          relative
          bg-white/95 backdrop-blur
          rounded-2xl
          px-4 py-3
          w-[104px] h-[86px]
          text-center
          shadow-[0_6px_20px_rgba(0,0,0,0.08)]
          border border-gray-100
          transition
        "
      >
        {/* Label */}
        <p className="text-[11px] font-semibold tracking-wider uppercase text-gray-500">
          {label}
        </p>

        {/* Weight */}
        <p className="mt-1 text-2xl font-extrabold text-gray-900 leading-none">
          {weight}
          <span className="text-sm font-semibold align-top">%</span>
        </p>

        {/* Accent ring */}
        <div className="absolute inset-0 rounded-2xl ring-1 ring-brand/10" />
      </div>
    </div>
  );
}
