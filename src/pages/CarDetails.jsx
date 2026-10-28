import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  Zap,
  Gauge,
  Timer,
  Cog,
  Wind,
  Settings,
  Star,
  ShieldCheck,
} from "lucide-react";
import { cars } from "../data/cars";

const ICONS = {
  power: Zap,
  torque: Gauge,
  topSpeed: Wind,
  zeroTo60: Timer,
  engine: Settings,
  transmission: Cog,
};

export default function CarDetails() {
  const { id } = useParams();
  const car = cars.find((c) => c.id === Number(id));
  const [activeImg, setActiveImg] = useState(0);

  useEffect(() => {
    setActiveImg(0);
  }, [id]);

  if (!car)
    return (
      <div className="max-w-3xl mx-auto px-6 py-24 text-center">
        <h1 className="text-3xl font-bold mb-4">Car not found</h1>
        <Link to="/cars" className="text-accent hover:underline">
          ← Back to browsing
        </Link>
      </div>
    );

  const gallery = car.images?.length ? car.images : [car.image];
  const fmt = (n) =>
    n.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    });
  const specLabels = {
    power: "Power",
    torque: "Torque",
    topSpeed: "Top Speed",
    zeroTo60: "0–60 mph",
    engine: "Engine",
    transmission: "Transmission",
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 relative">
      <Link
        to="/cars"
        className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition"
      >
        <ArrowLeft size={18} /> Back to all cars
      </Link>

      <div className="flex flex-col gap-10">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="rounded-2xl overflow-hidden border border-white/10 glow">
              <img
                src={gallery[activeImg]}
                alt={car.name}
                className="w-full aspect-video object-cover transition-all duration-300"
              />
            </div>

            <div className="flex gap-3 mt-4">
              {gallery.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImg(index)}
                  className={`w-24 h-16 rounded-lg overflow-hidden border-2 transition-all ${activeImg === index ? "border-accent opacity-100" : "border-white/10 opacity-50 hover:opacity-100"}`}
                >
                  <img
                    src={img}
                    alt={`Thumbnail ${index}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs uppercase tracking-widest text-accent font-bold">
                {car.brand}
              </span>
              <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-xs font-semibold">
                {car.category}
              </span>
              <span className="text-xs text-gray-400 border border-white/10 px-2 py-1 rounded-md">
                {car.year}
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{car.name}</h1>
            <p className="text-3xl text-accent font-bold mb-6">
              {fmt(car.price)}
            </p>

            <div className="flex flex-wrap gap-2">
              <span className="flex items-center gap-1 px-3 py-1 bg-card border border-white/10 rounded-lg text-sm text-gray-300">
                <Star size={14} className="text-yellow-400" /> Premium Spec
              </span>
              <span className="flex items-center gap-1 px-3 py-1 bg-card border border-white/10 rounded-lg text-sm text-gray-300">
                <ShieldCheck size={14} className="text-green-400" /> Verified
                Data
              </span>
            </div>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-3 gap-10 mt-6 border-t border-white/10 pt-10">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="lg:col-span-1 rounded-2xl border border-white/10 bg-card/60 p-6"
          >
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              Why it's special
            </h2>
            <p className="text-gray-400 leading-relaxed text-sm md:text-base">
              {car.description}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.08, ease: "easeOut" }}
            className="lg:col-span-2"
          >
            <h2 className="text-2xl font-bold mb-4">Performance Specs</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {Object.entries(car.specs).map(([key, val]) => {
                const Icon = ICONS[key] || Zap;
                return (
                  <motion.div
                    key={key}
                    whileHover={{
                      y: -4,
                      boxShadow: "0 0 20px rgba(255, 46, 99, 0.18)",
                    }}
                    className="bg-card border border-white/10 rounded-xl p-4 transition"
                  >
                    <div className="flex items-center gap-2 text-gray-400 text-xs mb-1 uppercase tracking-wider font-semibold">
                      <Icon size={14} className="text-accent2" />{" "}
                      {specLabels[key] || key}
                    </div>
                    <div className="font-bold text-lg">{val}</div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
