import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
export default function Home() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const handleExplore = () => {
    if (!searchTerm.trim()) {
      toast.error("Please enter a career before continuing");
      return;
    }
    toast.success("Searching career possibilities...");
    navigate("/careers", { state: { searchTerm } });
  };

  const handleSkip = () => {
    toast.info("Exploring career paths freely...");
    navigate("/careers");
  };

  return (
    <div className="
      w-full max-w-3xl
      bg-white/70 backdrop-blur-xl
      rounded-3xl
      shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)]
      px-6 py-8
      sm:px-8 sm:py-10
      lg:px-14 lg:py-14
      text-center
    ">
      {/* Heading */}
      <h1 className="
        text-2xl sm:text-3xl lg:text-4xl
        font-extrabold text-textPrimary
      ">
        Choose a Career Path
      </h1>

      <p className="
        mt-3
        text-sm sm:text-textSecondary
        text-textSecondary
        max-w-xl mx-auto
      ">
        Enter a career you’re interested in, or skip to explore career possibilities freely.
      </p>

      {/* Input */}
      <div className="mt-8 sm:mt-10 text-left">
        <label className="text-sm text-textSecondary">
          Which career are you interested in?
        </label>

        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="e.g. Website Designer, Data Analyst"
          className="
            w-full rounded-full
            border border-brand/30
            px-5 py-3 sm:py-4
            text-sm sm:text-textPrimary
            text-textPrimary
            focus:outline-none
            focus:ring-2 focus:ring-brand/40
            transition mt-2
          "
        />
      </div>

      {/* Explore Button */}
      <div className="mt-8 sm:mt-10">
        <button
          onClick={handleExplore}
          className="
            w-full sm:w-auto
            px-8 sm:px-10 py-3 sm:py-4
            rounded-full
            bg-brand text-white font-semibold
            hover:bg-amber-600
            active:scale-95
            transition-all
          "
        >
          Explore
        </button>
      </div>

      {/* OR Divider */}
      <div className="
        flex items-center gap-4
        mt-8 sm:mt-10
        text-textSecondary
      ">
        <div className="flex-1 h-px bg-brand/20" />
        <span className="text-xs sm:text-sm font-medium">OR</span>
        <div className="flex-1 h-px bg-brand/20" />
      </div>

      {/* Skip Button */}
      <div className="mt-6 sm:mt-8">
        <button
          onClick={handleSkip}
          className="
            w-full sm:w-auto
            px-8 sm:px-10 py-3
            rounded-full
            border border-brand
            text-brand font-semibold
            text-sm sm:text-brand
            hover:bg-brand/10
            active:scale-95
            transition-all
          "
        >
          I have no idea about my career interest
        </button>
      </div>
    </div>
  );
}
