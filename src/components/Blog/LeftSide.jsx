import OrbitItem from "../Orbit";

export default function LeftSide({
  image,
  setImage,
  blurValue,
  weights = {},
}) {
  return (
    <div className="flex flex-col items-center pb-16">

      {/* HEADER */}
      <div className="mb-6 text-center max-w-xs">
        <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">
          Your Career Profile
        </p>
      </div>

      {/* ORBIT CONTAINER */}
      <div className="relative w-[360px] h-[360px] flex items-center justify-center">

        {/* CENTER IMAGE */}
        <div className="w-[220px] h-[220px] rounded-full overflow-hidden bg-gray-200 z-10 flex items-center justify-center">
          {image ? (
            <img
              src={image}
              alt="Profile"
              className="w-full h-full object-contain transition-all duration-700"
              style={{ filter: `blur(${blurValue}px)` }}
            />
          ) : (
            <label className="flex flex-col items-center justify-center cursor-pointer px-6 text-center">
              <span className="text-sm font-medium text-gray-700 mb-1">
                Add your photo
              </span>
              <span className="text-xs text-gray-500">
                For your personalized report (optional)
              </span>
              <input
                type="file"
                accept="image/*"
                hidden
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) setImage(URL.createObjectURL(file));
                }}
              />
            </label>
          )}
        </div>

        {/* ORBIT ITEMS */}
        <OrbitItem angle={-90} label="What Is" weight={weights["What Is"] || 0} />
        <OrbitItem angle={-30} label="Education" weight={weights["Education"] || 0} offsetX="-24%" offsetY="-20%" />
        <OrbitItem angle={30} label="Skills" weight={weights["Skills"] || 0} offsetX="-32%" offsetY="-20%" />
        <OrbitItem angle={90} label="Positives" weight={weights["Positives"] || 0} />
        <OrbitItem angle={150} label="Challenges" weight={weights["Challenges"] || 0} offsetX="-74%" />
        <OrbitItem angle={210} label="Day of Life" weight={weights["A Day Of"] || 0} offsetX="-74%" offsetY="-20%" />

      </div>

      {/* FOOTNOTE */}
      <p className="mt-10 text-xs text-gray-500 text-center max-w-xs">
        Percentages reflect the relative emphasis based on your Speakers.
      </p>
    </div>
  );
}
