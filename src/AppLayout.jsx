import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Advisor from "./pages/Advisor";
import Blog from "./pages/Blog";
import Navbar from "./components/Navbar";
import { ToastContainer } from "react-toastify";
import useIsMobile from "./hooks/IsMobile";
import Discover from "./pages/Discover";
import AiCareers from "./pages/AiCareers";
import Footer from "./components/Footer";
// import ChatBot from "./pages/ChatBot";


export default function AppLayout() {
  const isMobile = useIsMobile();
  const location = useLocation();
  const [showNavbar, setShowNavbar] = useState(false);
  const isHome = location.pathname === "/";
  useEffect(() => {
    // Hide navbar ONLY on homepage
    setShowNavbar(location.pathname !== "/");
  }, [location.pathname]);

  return (
    <div
      className={`
        min-h-screen w-full
        bg-gradient-to-b from-bgStart to-bgEnd
        font-primary
        flex flex-col items-center
        px-4 sm:px-6
        py-6 sm:py-0 mt-24
      `}
    >
      <Navbar />

      <div className={`
        w-full flex justify-center
        ${isHome ? "min-h-screen items-center" : "items-start"}
      `}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/careers" element={<Advisor />} />
          <Route path="/careers/:profileid" element={<Blog />} />
          <Route path="/discover" element={<Discover />}/>
          <Route path="/sugestedcareers" element={<AiCareers />}/>
        </Routes>
      </div>

      <Footer/>

      <ToastContainer
        position={isMobile ? "bottom-center" : "top-right"}
        autoClose={3500}
        hideProgressBar={isMobile}
        closeOnClick
        pauseOnHover
        draggable
        theme="light"
        style={{
          width: isMobile ? "90vw" : "320px",
        }}
        toastClassName="!rounded-xl !text-sm !p-3"
        bodyClassName="!p-0"
        limit={isMobile ? 1 : 3}
      />
    </div>
  );
}
