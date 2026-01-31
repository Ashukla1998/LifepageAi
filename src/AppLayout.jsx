import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Advisor from "./pages/Advisor";
import Blog from "./pages/Blog";
import Discover from "./pages/Discover";
import AiCareers from "./pages/AiCareers";

export default function AppLayout() {
  return (
    <>
      <Navbar />

      <main className="w-full bg-[#f5f5f3] min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/careers" element={<Advisor />} />
          <Route path="/careers/:profileid" element={<Blog />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/sugestedcareers" element={<AiCareers />} />
        </Routes>

        <Footer />
      </main>

      {/* TOAST CONTAINER */}
      <ToastContainer
        position="top-right"
        autoClose={3500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        toastClassName="!rounded-xl !text-sm"
      />
    </>
  );
}
