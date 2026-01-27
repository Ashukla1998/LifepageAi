import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Advisor from "./pages/Advisor";
import { ToastContainer } from "react-toastify";
import useIsMobile from "./hooks/IsMobile";
import Blog from "./pages/Blog";
import Navbar from "./components/Navbar";
export default function App() {
  const isMobile = useIsMobile();
  
  return (
    <BrowserRouter basename="/ai">
      <div className="
        min-h-screen w-full
        bg-gradient-to-b from-bgStart to-bgEnd
        font-primary
        flex items-start sm:items-center
        justify-center
        px-4 sm:px-6
        py-6 sm:py-0
        flex-col
      ">
        <Navbar/>
        <div className="w-full flex justify-center">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/careers" element={<Advisor />} />
            <Route path="/careers/:profileid" element={<Blog />} />
          </Routes>
        </div>

        {/* Toasts */}
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
    </BrowserRouter>
  );
}
