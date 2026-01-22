import ProfileSkeleton from "./ProfileSkeleton";

export default function ProfileLoadingScreen({ count = 3 }) {
  return (
    <div className="flex flex-col gap-8 sm:gap-10">
      {Array.from({ length: count }).map((_, index) => (
        <ProfileSkeleton key={index} />
      ))}
    </div>
  );
}
