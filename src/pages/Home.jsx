import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleExplore = () => {
    if (!searchTerm.trim()) {
      toast.error("Please enter a career");
      return;
    }
    navigate("/careers", { state: { searchTerm } });
  };

  const handleDiscover = () => navigate("/discover");

  return (
    <section className="py-16">
      <div className="flex justify-center">
        <div
          className="
            bg-[#ffc000]
            w-full
            max-w-[520px]
            px-8
            py-10
            text-center
            border
            border-black
          "
        >
          {/* TITLE */}
          <h1 className="text-2xl font-bold mb-6">
            Find a Career Path
          </h1>

          {/* WHITE BOX */}
          <div
            className="
              bg-white
              px-6
              py-5
              mb-6
            "
          >
            <div className="text-sm font-semibold leading-loose">
              Install LifePage <br />
              ⇩ <br />
              Register Account <br />
              ⇩ <br />
              Activate Account
            </div>

            <div className="flex justify-center gap-4 mt-4">
              <a
            href="https://itunes.apple.com/us/app/lifepage-career-talks/id1422221590?ls=1&mt=8"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://storage.googleapis.com/lifepage-video-android/login/app-store.png"
              alt="Career Counselling iOS"
              className="h-[35px]"
            />
          </a>
              
            <a
              href="https://play.google.com/store/apps/details?id=com.lifepage.jfh&hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://storage.googleapis.com/lifepage-video-android/login/play-store-logo-33868.png"
                alt="Career Counselling Android"
                className="h-[35px]"
              />
            </a>
            </div>
          </div>

          {/* LABEL */}
          <p className="text-sm mb-2">
            Which Career are you interested in?
          </p>

          {/* INPUT — LEGACY STYLE */}
          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="e.g. Website Designer, Data Analyst"
            className="
              w-full
              mt-2
              px-5
              py-3
              text-sm
              text-center
              bg-white
              border
              border-white
              shadow-inner
              focus:outline-none
              focus:ring-2
              focus:ring-[#f89e54]
              mb-6
            "
          />

          {/* EXPLORE */}
           <div className="mt-8 sm:mt-10 flex justify-center">
        <button
          onClick={handleExplore}
          className="
            bg-[#2196f3]
            text-white
            font-bold
            text-lg
            px-6 py-3
            rounded
            shadow-[0_8px_16px_rgba(0,0,0,0.2),0_6px_20px_rgba(0,0,0,0.19)]
            hover:opacity-90
            transition
            inline-flex items-center gap-2
          "
        >
          <span>Explore</span>
          {/* <ArrowRightIcon className="h-5 w-5" /> */}
          <img src={`${import.meta.env.BASE_URL}support/path.png`} alt="Explore path" className="h-6 w-6" />
        </button>

      </div>

          {/* OR */}
          <div className="flex items-center gap-4 mt-8 sm:mt-10 text-textSecondary">
            <div className="flex-1 h-px bg-[linear-gradient(to_right,rgba(248,158,84,0),rgba(248,158,84,0.75),rgba(248,158,84,0))] border-0" />
            <span className="text-xs sm:text-sm font-medium">OR</span>
            <div className="flex-1 h-px bg-[linear-gradient(to_right,rgba(248,158,84,0),rgba(248,158,84,0.75),rgba(248,158,84,0))] border-0" />
          </div>

          {/* DISCOVER */}
          <div className="mt-8 sm:mt-10 flex justify-center relative group">
        <button
          onClick={handleDiscover}
          className="
            bg-[#2196f3]
            text-white
            font-bold
            text-lg
            px-6 py-3
            rounded
            shadow-[0_8px_16px_rgba(0,0,0,0.2),0_6px_20px_rgba(0,0,0,0.19)]
            hover:opacity-90
            transition
            inline-flex items-center gap-2
          "
        >
          <span>Discover</span>
          <img src={`${import.meta.env.BASE_URL}support/research.png`} alt="Discover" className="w-6 h-6" />
        </button>
        </div>

        </div>
      </div>
    </section>
  );
}
