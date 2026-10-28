import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cars from "./pages/Cars";
import CarDetails from "./pages/CarDetails";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/cars/:id" element={<CarDetails />} />
      </Routes>
      <footer className="border-t border-white/10 py-6 text-center text-sm text-gray-500 mt-16">© {new Date().getFullYear()} CarsMe — Built with React</footer>
    </BrowserRouter>
  );
}
