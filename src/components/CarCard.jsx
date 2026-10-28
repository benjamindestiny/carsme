import { Link } from "react-router-dom";
import { Zap } from "lucide-react";

export default function CarCard({ car }) {
  const fmt = (n) => n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
  return (
    <Link to={`/cars/${car.id}`} className="group bg-card rounded-2xl overflow-hidden border border-white/5 hover:border-accent/50 transition-all hover:glow block">
      <div className="aspect-video overflow-hidden relative">
        {/* Image */}
        <img src={car.images[0]} alt={car.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        {/* Overlay Name */}
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="text-white font-bold text-xl bg-black/60 px-4 py-2 rounded-lg">{car.name}</span>
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between text-xs text-gray-400 mb-2">
          <span className="uppercase tracking-wider">{car.brand}</span>
          <span className="px-2 py-0.5 bg-accent/20 text-accent rounded-full">{car.category}</span>
        </div>
        <h3 className="text-lg font-bold mb-1">{car.name}</h3>
        <div className="flex items-center justify-between mt-3">
          <span className="text-accent font-bold text-lg">{fmt(car.price)}</span>
          <span className="flex items-center gap-1 text-xs text-gray-400"><Zap size={14} className="text-accent2" /> {car.specs.power}</span>
        </div>
      </div>
    </Link>
  );
}
