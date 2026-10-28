import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cars from "./pages/Cars";
import CarDetails from "./pages/CarDetails";
import LoadingScreen from "./components/LoadingScreen";
import SpeedBanner from "./components/SpeedBanner";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <BrowserRouter>
      {loading && <LoadingScreen onFinish={() => setLoading(false)} />}
      
      <div className={`transition-opacity duration-700 ${loading ? "opacity-0" : "opacity-100"}`}>
        <ScrollToTop />
        {/* The banner right under the navbar */}
        <Navbar />
        <SpeedBanner /> 
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cars" element={<Cars />} />
          <Route path="/cars/:id" element={<CarDetails />} />
        </Routes>
        <footer className="border-t border-white/10 py-6 text-center text-sm text-gray-500 mt-16">© {new Date().getFullYear()} CarsMe — Built with React</footer>
      </div>
    </BrowserRouter>
  );
}
