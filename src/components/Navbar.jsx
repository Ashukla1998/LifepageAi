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
          flex items-center justify-between
          px-4 sm:px-6
          py-3
        "
      >
        <img src={`${import.meta.env.BASE_URL}icon.png`} alt="Lifepage.in" className="w-10 h-10" />
        {/* RESET BUTTON WITH TOOLTIP */}
        <a href="/">
          <h1 className="text-blue-400 underline">www.lifepage.in/ai</h1>
        </a>
      </nav>
    </header>
  );
}
