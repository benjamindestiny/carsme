import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Zap, Gauge, Timer, Cog, Wind, Settings, Star, ShieldCheck } from "lucide-react";
import { cars } from "../data/cars";

const ICONS = { power: Zap, torque: Gauge, topSpeed: Wind, zeroTo60: Timer, engine: Settings, transmission: Cog };

export default function CarDetails() {
  const { id } = useParams();
  const car = cars.find((c) => c.id === Number(id));

  if (!car) return (
    <div className="max-w-3xl mx-auto px-6 py-24 text-center">
      <h1 className="text-3xl font-bold mb-4">Car not found</h1>
      <Link to="/cars" className="text-accent hover:underline">← Back to browsing</Link>
    </div>
  );

  const fmt = (n) => n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
  const specLabels = { power: "Power", torque: "Torque", topSpeed: "Top Speed", zeroTo60: "0–60 mph", engine: "Engine", transmission: "Transmission" };

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <Link to="/cars" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition">
        <ArrowLeft size={18} /> Back to all cars
      </Link>
      
      <div className="grid lg:grid-cols-2 gap-10">
        {/* Left Side - Image */}
        <div>
          <div className="rounded-2xl overflow-hidden border border-white/10 glow">
            <img src={car.image} alt={car.name} className="w-full h-auto object-cover" />
          </div>
          
          {/* Quick Badges below image */}
          <div className="flex flex-wrap gap-2 mt-4">
            <span className="flex items-center gap-1 px-3 py-1 bg-card border border-white/10 rounded-lg text-sm text-gray-300"><Star size={14} className="text-yellow-400" /> Premium Spec</span>
            <span className="flex items-center gap-1 px-3 py-1 bg-card border border-white/10 rounded-lg text-sm text-gray-300"><ShieldCheck size={14} className="text-green-400" /> Verified Data</span>
          </div>
        </div>

        {/* Right Side - Info */}
        <div>
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs uppercase tracking-widest text-accent font-bold">{car.brand}</span>
            <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-xs font-semibold">{car.category}</span>
            <span className="text-xs text-gray-400 border border-white/10 px-2 py-1 rounded-md">{car.year}</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-2">{car.name}</h1>
          <p className="text-3xl text-accent font-bold mb-6">{fmt(car.price)}</p>
          
          {/* The "Talk" / Description */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-3 flex items-center gap-2">Why it's special</h2>
            <p className="text-gray-400 leading-relaxed text-sm md:text-base">
              {car.description}
            </p>
          </div>

          {/* Specs Grid */}
          <div>
            <h2 className="text-xl font-bold mb-4">Performance Specs</h2>
            <div className="grid grid-cols-2 gap-3">
              {Object.entries(car.specs).map(([key, val]) => {
                const Icon = ICONS[key] || Zap;
                return (
                  <div key={key} className="bg-card border border-white/10 rounded-xl p-4 hover:border-accent/50 transition">
                    <div className="flex items-center gap-2 text-gray-400 text-xs mb-1 uppercase tracking-wider font-semibold">
                      <Icon size={14} className="text-accent2" /> {specLabels[key] || key}
                    </div>
                    <div className="font-bold text-lg">{val}</div>
                  </div>
                );
              })}
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
