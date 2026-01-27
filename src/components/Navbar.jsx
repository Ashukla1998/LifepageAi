import React from "react";
import { MdOutlineRestartAlt } from "react-icons/md";

export default function Navbar() {
  const handleRestart = () => {
    localStorage.clear();
    sessionStorage.clear();
    window.location.href = import.meta.env.BASE_URL;
  };

  return (
    <header
      className="
        sticky top-0 z-50
        w-full
        backdrop-blur-md
        border-b border-brand
        bg-white/70
        mb-2
      "
    >
      <nav
        className="
          max-w-7xl mx-auto
          flex items-center justify-end
          px-4 sm:px-6
          py-3
        "
      >
        {/* RESET BUTTON WITH TOOLTIP */}
        <button
          onClick={handleRestart}
          className="
            relative group
            w-full sm:w-auto
            px-8 sm:px-10 py-3 sm:py-4
            rounded-full
            bg-brand text-white font-semibold
            hover:bg-amber-600
            active:scale-95
            transition-all
            inline-flex items-center gap-2
          "
        >
          <span>Reset</span>
          <MdOutlineRestartAlt size={20} />

          {/* TOOLTIP */}
          <span
            className="
              pointer-events-none
              absolute -bottom-10 left-1/2 -translate-x-1/2
              whitespace-nowrap
              rounded-md
              bg-black text-white
              text-xs font-medium
              px-2 py-1
              opacity-0 scale-95
              group-hover:opacity-100 group-hover:scale-100
              transition duration-200 ease-out
              z-50
            "
          >
            Restart & go home
          </span>
        </button>
      </nav>
    </header>
  );
}
