import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import path from "../assets/path.png";

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
    toast.info("Explore career paths freely...");
    navigate("/discover");
  };

  return (
    <div
      className="
        w-full
        max-w-[560px] sm:max-w-[600px] lg:max-w-3xl
        bg-homecolor backdrop-blur-xl
        rounded-3xl
        shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)]
        px-6 py-8
        sm:px-8 sm:py-10
        lg:px-14 lg:py-14
        text-center text-black
      "
    >
      {/* Heading */}
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold">
        Find a Career Path
      </h1>

      {/* Header */}
      <div className="bg-white w-full h-60 mt-5 mx-auto flex flex-col items-center justify-center text-center text-lg font-semibold leading-snug rounded-lg shadow">
        <div>
          Install LifePage
          <div className="leading-none mt-2 mb-2">⇩</div>
          Register Account
          <div className="leading-none mt-2 mb-2">⇩</div>
          Activate Account
        </div>

        <div className="flex gap-5 mt-3">
          <a href="https://itunes.apple.com/us/app/lifepage-career-talks/id1422221590?ls=1&ampmt=8" target="_blank" rel="noopener noreferrer">
            <img
              src="https://storage.googleapis.com/lifepage-video-android/login/app-store.png"
              alt="iOS"
              className="h-10"
            />
          </a>
          <a href="https://play.google.com/store/apps/details?id=com.lifepage.jfh&hl=en" target="_blank" rel="noopener noreferrer">
            <img
              src="https://storage.googleapis.com/lifepage-video-android/login/play-store-logo-33868.png"
              alt="Android"
              className="h-10"
            />
          </a>
        </div>

      </div>

      {/* Input */}
      <div className="mt-8 sm:mt-10">
        <label className="text-sm">
          Which Career are you interested in?
        </label>

        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="e.g. Website Designer, Data Analyst"
          className="
            w-full
            mt-2
            rounded-full
            border border-brand/30
            px-5 py-4
            text-sm 
            text-black
            text-center
            focus:outline-none
            focus:ring-2 focus:ring-brand/40
            transition
          "
        />
      </div>

      {/* Explore Button */}
      <div className="mt-8 sm:mt-10 flex justify-center">
        <button
          onClick={handleExplore}
          className="
            w-[200px]
            px-10 py-4
            rounded-full
            bg-buttoncolor text-white font-semibold
            active:scale-95
            transition-all
            inline-flex items-center justify-center gap-2
          "
        >
          <span>Explore</span>
          <img src={path} alt="Explore" className="w-6 h-6" />
        </button>
      </div>

      {/* OR Divider */}
      <div className="flex items-center gap-4 mt-8 sm:mt-10 text-textSecondary">
        <div className="flex-1 h-px bg-black/20" />
        <span className="text-xs sm:text-sm font-medium">OR</span>
        <div className="flex-1 h-px bg-black/20" />
      </div>

      {/* Discover Button */}
      <div className="mt-8 sm:mt-10 flex justify-center relative group">
        <button
          onClick={handleSkip}
          className="
            w-[200px]
            px-10 py-4
            rounded-full
            bg-buttoncolor text-white font-semibold
            active:scale-95
            transition-all
            inline-flex items-center justify-center gap-2
          "
        >
          <span>Discover</span>
          <img src={path} alt="Discover" className="w-6 h-6" />
        </button>

        {/* Tooltip */}
        <div className="
          absolute
          -top-12
          left-1/2
          -translate-x-1/2
          hidden
          group-hover:block
          bg-black text-white text-xs
          px-3 py-2
          rounded-md
          whitespace-nowrap
          shadow-lg
        ">
          Not sure what career to choose? Start here.
        </div>
      </div>


    </div>
  );
}
