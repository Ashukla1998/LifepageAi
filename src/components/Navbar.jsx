import { Link } from "react-router-dom";

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
        <div className="flex items-center">
          <img src={`${BASE}icon.png`} alt="LifePage" className="h-10" />
        </div>

        <div className="flex gap-4">
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

      {/* ================= LEGACY MENU BAR ================= */}
      <nav className="bg-[#363636] text-white">
        <div className="hidden md:flex h-[58px] items-center">
          {menu.map((item) => (
            <a
              key={item.label}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex items-center
                px-4 py-[14px]
                text-[17px]
                leading-none
                hover:bg-[#f89e54]
              "
            >
              <img
                src={`${BASE}support/${item.icon}`}
                alt={item.label}
                className={`
                  h-[15px]
                  mr-[4px]
                  -ml-[2px]
                  ${item.fix ? "translate-y-[-1px]" : ""}
                `}
              />
              {item.label}
            </a>
          ))}
        </div>

        {/* ================= MOBILE BAR ================= */}
        <div className="md:hidden flex items-center h-[58px] px-4">
          <span className="text-xl">☰</span>
        </div>
      </nav>
      
    </header>
  );
}
