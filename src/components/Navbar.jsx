import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Top navbar with background image */}
      <div
        className="h-14 flex items-center justify-between px-4 sm:px-6 text-white"
        style={{
          backgroundImage: `url(${import.meta.env.BASE_URL}support/topbg.jpg)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        {/* Left: Logo */}
        <Link to="/" className="flex items-center">
          <img
            src={`${import.meta.env.BASE_URL}icon.png`}
            alt="Career Counselling 2.0"
            className="h-10 w-auto"
          />
        </Link>

        {/* Right: App Store buttons */}
        <div className="flex gap-4">
          <a
            href="https://itunes.apple.com/us/app/lifepage-career-talks/id1422221590?ls=1&mt=8"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://storage.googleapis.com/lifepage-video-android/login/app-store.png"
              alt="Download on App Store"
              className="h-9"
            />
          </a>

          <a
            href="https://play.google.com/store/apps/details?id=com.lifepage.jfh&hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://storage.googleapis.com/lifepage-video-android/login/play-store-logo-33868.png"
              alt="Get it on Google Play"
              className="h-9"
            />
          </a>
        </div>
      </div>
    </header>
  );
}
