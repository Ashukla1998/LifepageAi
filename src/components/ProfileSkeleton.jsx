const ProfileSkeleton = () => {
  return (
    <div
      className="
        bg-white/60 backdrop-blur-md
        rounded-3xl
        p-5 sm:p-6 md:p-8
        shadow-lg
        flex flex-col md:flex-row
        items-center md:items-start
        gap-5 md:gap-8
        max-w-xl
        mx-auto
        animate-pulse
      "
    >
      {/* Image Skeleton */}
      <div
        className="
          w-20 h-20
          sm:w-24 sm:h-24
          md:w-28 md:h-28
          rounded-full
          bg-gray-300/60
          flex-shrink-0
        "
      />

      {/* Content Skeleton */}
      <div className="flex-1 w-full flex flex-col gap-3">
        <div className="h-3 w-32 bg-gray-300/60 rounded" />
        <div className="h-1 w-full bg-gray-300/60 rounded" />
        <div className="h-6 w-3/4 bg-gray-300/60 rounded" />
        <div className="h-4 w-full bg-gray-300/60 rounded" />
        <div className="h-4 w-1/2 bg-gray-300/60 rounded" />
      </div>
    </div>
  );
};

export default ProfileSkeleton;
