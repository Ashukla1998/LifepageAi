import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import LineSeparator from "./LineSeparator";
import { useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

const ProfileCard = ({ profile }) => {
  const navigate = useNavigate();

  const fromYear = new Date(profile.from * 1000).getFullYear();
  const toYear = new Date(profile.to * 1000).getFullYear();

  // const image = profile.isAI
  //   ? profile.thumb
  //   : `https://storage.googleapis.com/lifepage-plan/amscareerprofile/${profile.thumb}`;

  const image = profile.thumb
    ? (profile.isAI
      ? profile.thumb
      : `https://storage.googleapis.com/lifepage-plan/amscareerprofile/${profile.thumb}`)
    : <FaUserCircle size={20} />;


  const handleClick = () => {
    localStorage.setItem(
      "selectedProfile",
      JSON.stringify(profile)
    );

    navigate(`/careers/${profile.profilename}`);
  };

  return (
    <motion.div
      onClick={handleClick}
      whileHover={{ y: -6 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 240, damping: 20 }}
      className="
        group relative
        w-full
        rounded-2xl
        p-5 sm:p-6
        flex gap-4
        cursor-pointer
        bg-white/80 backdrop-blur-md
        border border-black/5
        shadow-sm
        hover:shadow-xl hover:border-brand/30
        transition-all
      "
    >
      {/* IMAGE */}
      <div className="relative shrink-0">
        <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-brand to-orange-400 p-[2px] flex items-center justify-center">
          {profile.thumb ? (
            <img
              src={
                profile.isAI
                  ? profile.thumb
                  : `https://storage.googleapis.com/lifepage-plan/amscareerprofile/${profile.thumb}`
              }
              alt={profile.name}
              className="w-full h-full rounded-full object-cover bg-white"
            />
          ) : (
            <FaUserCircle className="w-full h-full text-gray-400 bg-white rounded-full p-2" />
          )}
        </div>
      </div>


      {/* CONTENT */}
      <div className="flex-1 text-left">
        <span className="
          inline-flex items-center
          text-[10px] font-bold uppercase tracking-wider
          text-brand bg-brand/10 px-3 py-1 rounded-full
        ">
          {profile.title}
        </span>

        <h3 className="mt-2 text-xl font-extrabold text-textPrimary group-hover:text-brand transition">
          {profile.name}
        </h3>

        <p className="mt-1 text-xs sm:text-sm text-textSecondary line-clamp-1">
          {profile.des} · {profile.pl}
        </p>

        <div className="my-2">
          <LineSeparator color="bg-brand" thickness="h-[2px]" length="w-10" />
        </div>

        <p className="text-[11px] text-textSecondary">
          {fromYear} – {toYear}
        </p>
      </div>

      {/* HOVER ICON */}
      <ArrowUpRight
        className="
          absolute top-5 right-5
          w-4 h-4 text-brand
          opacity-0 translate-x-1 -translate-y-1
          group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0
          transition-all
        "
      />
    </motion.div>
  );
};

export default ProfileCard; 
