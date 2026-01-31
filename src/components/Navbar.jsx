// import React, { useState } from "react";
// import { Link, useLocation } from "react-router-dom";

// const BASE = import.meta.env.BASE_URL;

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const location = useLocation();

//   return (
//     <header className="fixed top-0 left-0 w-full z-50">
//       {/* ================= TOP BAR ================= */}
//       <div
//         className="h-14 flex items-center justify-between px-4 sm:px-6 text-white"
//         style={{
//           backgroundImage: `url(${BASE}support/topbg.jpg)`,
//           backgroundRepeat: "no-repeat",
//           backgroundSize: "cover",
//         }}
//       >
//         {/* Logo */}
//         <Link to="/" className="flex items-center">
//           <img
//             src={`${BASE}icon.png`}
//             alt="Career Counselling 2.0"
//             className="h-10 w-auto"
//           />
//         </Link>

//         {/* Store buttons */}
//         <div className="flex gap-4">
//           <a
//             href="https://itunes.apple.com/us/app/lifepage-career-talks/id1422221590?ls=1&mt=8"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <img
//               src="https://storage.googleapis.com/lifepage-video-android/login/app-store.png"
//               alt="Download on App Store"
//               className="h-9"
//             />
//           </a>

//           <a
//             href="https://play.google.com/store/apps/details?id=com.lifepage.jfh&hl=en"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <img
//               src="https://storage.googleapis.com/lifepage-video-android/login/play-store-logo-33868.png"
//               alt="Get it on Google Play"
//               className="h-9"
//             />
//           </a>
//         </div>
//       </div>

//       {/* ================= SECOND NAV (OLD .topnav MATCH) ================= */}
//       <nav className="bg-[#363636] text-white">
//         {/* DESKTOP MENU */}
//         <div className="hidden md:flex h-[58px] items-center overflow-hidden">
//           {menu.map((item) => {
//             const isActive =
//               (item.label === "Home" && location.pathname === "/") ||
//               location.pathname.includes(item.link.replace(".php", ""));

//             return (
//               <a
//                 key={item.label}
//                 href={item.link}
//                 className={`
//                   flex items-center
//                   px-[16px] py-[14px]
//                   text-[17px]
//                   hover:bg-[#f89e54]
//                   ${isActive ? "active" : ""}
//                 `}
//               >
//                 <img
//                   src={`${BASE}support/${item.icon}`}
//                   alt={`Career Counselling 2.0 ${item.label}`}
//                   className="h-[15px] mr-[4px]"
//                   style={{
//                     marginBottom: "-1px",
//                     marginLeft: "-2px",
//                   }}
//                 />
//                 {item.label}
//               </a>
//             );
//           })}
//         </div>

//         {/* MOBILE BAR */}
//         <div className="md:hidden flex items-center h-[58px] px-4">
//           <button
//             className="text-xl"
//             onClick={() => setOpen(!open)}
//           >
//             ☰
//           </button>
//         </div>

//         {/* MOBILE MENU */}
//         {open && (
//           <div className="md:hidden bg-[#363636]">
//             {menu.map((item) => {
//               const isActive =
//                 (item.label === "Home" && location.pathname === "/") ||
//                 location.pathname.includes(item.link.replace(".php", ""));

//               return (
//                 <a
//                   key={item.label}
//                   href={item.link}
//                   className={`
//                     flex items-center
//                     px-[16px] py-[14px]
//                     text-[17px]
//                     hover:bg-[#f89e54]
//                     ${isActive ? "active" : ""}
//                   `}
//                   onClick={() => setOpen(false)}
//                 >
//                   <img
//                     src={`${BASE}support/${item.icon}`}
//                     alt={item.label}
//                     className="h-[15px] mr-[4px]"
//                     style={{
//                       marginBottom: "-1px",
//                       marginLeft: "-2px",
//                     }}
//                   />
//                   {item.label}
//                 </a>
//               );
//             })}
//           </div>
//         )}

//       </nav>
//       <div className="w-full flex flex-col items-center justify-start pt-20 pb-16 bg-[#f5f5f3]">

//         {/* Heading */}
//         <h1
//           className="
//       font-[Lato]
//       text-[34px]
//       font-semibold
//       text-[#4a4a4a]
//       mb-10
//       text-center
//     "
//         >
//           Career Counselling 2.0
//         </h1>

//         {/* Content Box */}
//         <div
//           className="
//       w-full
//       max-w-[760px]
//       bg-white
//       border
//       border-[#7a7a7a]
//       rounded-[4px]
//       px-8
//       py-6
//       text-left
//       font-[Lato]
//       text-[17px]
//       leading-[1.7]
//       text-black
//     "
//         >
//           <p className="mb-6">
//             Install LifePage - free Career Counselling App!
//           </p>

//           <p>
//             Invest in your 14 hour LifePage Career Plan to find which Career is best
//             for you and how to excel at it.
//           </p>
//         </div>

//       </div>

//     </header>
//   );
// }

// /* ================= MENU DATA ================= */

// const menu = [
//   { label: "Home", icon: "home.png", link: "https://www.lifepage.in/index.php" },
//   { label: "Abroad", icon: "studyabroad.png", link: "https://www.lifepage.in/studyabroad.php" },
//   { label: "Plan", icon: "plan.png", link: "https://www.lifepage.in/plan.php" },
//   { label: "Talks", icon: "list.png", link: "https://www.lifepage.in/careers.php" },
//   { label: "Philosophy", icon: "philosophy.png", link: "https://www.lifepage.in/philosophy.php" },
//   { label: "Seminar", icon: "choose.png", link: "https://www.lifepage.in/choose.php" },
//   { label: "Pages", icon: "pages.png", link: "https://www.lifepage.in/pages.php" },
//   { label: "Advisors", icon: "advisors.png", link: "https://www.lifepage.in/advisors.php" },
//   { label: "Testimonials", icon: "testimonials.png", link: "https://www.lifepage.in/testimonials.php" },
// ];


import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const BASE = import.meta.env.BASE_URL;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* TOP BAR */}
      <div
        className="h-14 flex items-center justify-between px-4 sm:px-6 text-white"
        style={{
          backgroundImage: `url(${BASE}support/topbg.jpg)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Link to="/" className="flex items-center">
          <img
            src={`${BASE}icon.png`}
            alt="Career Counselling 2.0"
            className="h-10"
          />
        </Link>

        <div className="flex gap-4">
          <img
            src="https://storage.googleapis.com/lifepage-video-android/login/app-store.png"
            className="h-9"
          />
          <img
            src="https://storage.googleapis.com/lifepage-video-android/login/play-store-logo-33868.png"
            className="h-9"
          />
        </div>
      </div>

      {/* SECOND NAV */}
      <nav className="bg-[#363636] text-white">
        <div className="hidden md:flex h-[58px] items-center">
          {menu.map((item) => {
            const isActive =
              (item.label === "Home" && location.pathname === "/") ||
              location.pathname.includes(item.slug);

            return (
              <a
                key={item.label}
                href={item.link}
                className={`
                  flex items-center px-[16px] py-[14px] text-[17px]
                  hover:bg-[#f89e54]
                  ${isActive ? "active" : ""}
                `}
              >
                <img
                  src={`${BASE}support/${item.icon}`}
                  className="h-[15px] mr-[4px]"
                  style={{ marginBottom: "-1px", marginLeft: "-2px" }}
                />
                {item.label}
              </a>
            );
          })}
        </div>
      </nav>
    </header>
  );
}

const menu = [
  { label: "Home", icon: "home.png", link: "https://www.lifepage.in/index.php", slug: "/" },
  { label: "Abroad", icon: "studyabroad.png", link: "https://www.lifepage.in/studyabroad.php", slug: "studyabroad" },
  { label: "Plan", icon: "plan.png", link: "https://www.lifepage.in/plan.php", slug: "plan" },
  { label: "Talks", icon: "list.png", link: "https://www.lifepage.in/careers.php", slug: "careers" },
  { label: "Philosophy", icon: "philosophy.png", link: "https://www.lifepage.in/philosophy.php", slug: "philosophy" },
  { label: "Seminar", icon: "choose.png", link: "https://www.lifepage.in/choose.php", slug: "choose" },
  { label: "Pages", icon: "pages.png", link: "https://www.lifepage.in/pages.php", slug: "pages" },
  { label: "Advisors", icon: "advisors.png", link: "https://www.lifepage.in/advisors.php", slug: "advisors" },
  { label: "Testimonials", icon: "testimonials.png", link: "https://www.lifepage.in/testimonials.php", slug: "testimonials" },
];
