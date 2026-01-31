import { useState } from "react";

const BASE = import.meta.env.BASE_URL;

const menu = [
  { label: "Home", icon: "home.png", link: "https://www.lifepage.in/", fix: true },
  { label: "Abroad", icon: "studyabroad.png", link: "https://www.lifepage.in/studyabroad.php" },
  { label: "Plan", icon: "plan.png", link: "https://www.lifepage.in/plan.php" },
  { label: "Talks", icon: "list.png", link: "https://www.lifepage.in/careers.php" },
  { label: "Philosophy", icon: "philosophy.png", link: "https://www.lifepage.in/philosophy.php" },
  { label: "Seminar", icon: "choose.png", link: "https://www.lifepage.in/choose.php" },
  { label: "Pages", icon: "pages.png", link: "https://www.lifepage.in/pages.php" },
  { label: "Advisors", icon: "advisors.png", link: "https://www.lifepage.in/advisors.php" },
  { label: "Testimonials", icon: "testimonials.png", link: "https://www.lifepage.in/testimonials.php" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50">

      {/* ================= TOP BAR ================= */}
      <div
        className="h-14 flex items-center justify-between px-4 text-white"
        style={{
          backgroundImage: `url(${BASE}support/topbg.jpg)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <img src={`${BASE}icon.png`} alt="LifePage" className="h-10" />

        <div className="flex gap-3">
          <img
            src="https://storage.googleapis.com/lifepage-video-android/login/app-store.png"
            className="h-[35px]"
            alt="iOS"
          />
          <img
            src="https://storage.googleapis.com/lifepage-video-android/login/play-store-logo-33868.png"
            className="h-[35px]"
            alt="Android"
          />
        </div>
      </div>

      {/* ================= DESKTOP MENU ================= */}
      <nav className="hidden md:block bg-[#3a3a3a] text-white">
        <div className="flex h-[58px] items-center">
          {menu.map((item) => (
            <a
              key={item.label}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-4 py-[14px] text-[17px] leading-none hover:bg-[#f57c00]"
            >
              <img
                src={`${BASE}support/${item.icon}`}
                alt={item.label}
                className={`h-[15px] mr-[6px] -ml-[2px] ${
                  item.fix ? "translate-y-[-1px]" : ""
                }`}
              />
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      {/* ================= MOBILE NAV ================= */}
      <nav className="md:hidden bg-[#3a3a3a] text-white relative">
      {/* <nav className={`md:hidden text-white relative ${ open ? "bg-[#f57c00]" : "bg-[#3a3a3a]" }`}> */}

      {/* TOP MOBILE ROW */}
      <div className="flex h-[58px]">

        {/* HOME — ORANGE */}
        <a
          href="https://www.lifepage.in/"
          className="flex items-center px-4 bg-[#f57c00] text-white"
        >
          <img
            src={`${BASE}support/home.png`}
            alt="Home"
            className="h-[15px] mr-[6px] -ml-[2px] translate-y-[-1px]"
          />
          Home
        </a>

        {/* FILL SPACE */}
        {/* <div className="flex-1 bg-[#3a3a3a] /> */}
        <div className={`flex-1 ${ open ? "bg-[#f57c00]" : "bg-[#3a3a3a]" }`}/>


        {/* HAMBURGER */}
        <button
          onClick={() => setOpen(!open)}
          className="px-4 flex items-center bg-[#f57c00] text-white text-2xl"
          aria-label="Menu"
        >
          ☰
        </button>
      </div>

      {/* FULL-WIDTH DROPDOWN */}
      {open && (
        <div
          className="
            absolute
            left-0
            top-[58px]
            w-full
            bg-[#3a3a3a]
            z-50
          "
        >
          {menu
            .filter(item => item.label !== "Home")
            .map(item => (
              <a
                key={item.label}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="
                  flex items-center
                  w-full
                  px-4
                  py-[12px]
                  text-[16px]
                  border-b
                  border-[#4a4a4a]
                  hover:bg-[#f57c00]
                "
              >
                <img
                  src={`${BASE}support/${item.icon}`}
                  alt={item.label}
                  className="h-[15px] mr-[6px] -ml-[2px]"
                />
                {item.label}
              </a>
            ))}
        </div>
      )}
      </nav>

    </header>
  );
}
