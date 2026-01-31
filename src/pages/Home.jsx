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
      <div className="w-full bg-[#f2f2f2] mb-1">
        <div className="flex flex-col items-center py-16">

          {/* TITLE */}
          <h1
            className="
              text-[34px]
              font-semibold
              text-[#555555]
              mb-10
            "
          >
            Lifepage AI
          </h1>

          {/* WHITE INFO BOX */}
          <div
            className="
              w-full
              max-w-[560px]
              bg-white
              border
              border-[#8a8a8a]
              rounded-[4px]
              px-6
              py-5
              text-[16px]
              text-black
              leading-[28px]
            "
          >
            <p className="mb-6 text-left">
              Install LifePage - free Career Counselling App!
            </p>

            <p className="text-left">
              Invest in your 14 hour LifePage Career Plan to understand your strengths,
              explore suitable career options, and move confidently towards your dream job.
            </p>
          </div>

        </div>
      </div>

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

          {/* LABEL */}
          <p className="text-sm mb-2">
            Which Career are you interested in?
          </p>

          {/* INPUT */}
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
              <img
                src={`${import.meta.env.BASE_URL}support/path.png`}
                alt="Explore path"
                className="h-6 w-6"
              />
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
              <img
                src={`${import.meta.env.BASE_URL}support/research.png`}
                alt="Discover"
                className="w-6 h-6"
              />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
