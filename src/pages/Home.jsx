import { Link } from "react-router-dom";
import { ArrowRight, Flame, Gauge } from "lucide-react";
import CarCard from "../components/CarCard";
import { cars } from "../data/cars";

export default function Home() {
  const featured = cars.slice(0, 6);
  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-accent2/20" />
        <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-accent/20 text-accent rounded-full text-sm mb-6"><Flame size={16} /> Specs. Prices. Power.</span>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">Every car.<br /><span className="text-accent">Every spec.</span></h1>
            <p className="text-gray-400 text-lg mb-8 max-w-lg">Explore supercars, hypercars, and everyday rides — with real specs, prices, and performance data.</p>
            <Link to="/cars" className="inline-flex items-center gap-2 bg-accent hover:bg-accent/80 px-6 py-3 rounded-xl font-semibold transition">Browse Cars <ArrowRight size={18} /></Link>
          </div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex items-center gap-2 mb-8"><Gauge className="text-accent" /><h2 className="text-3xl font-bold">Featured Supercars</h2></div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">{featured.map((c) => <CarCard key={c.id} car={c} />)}</div>
      </section>
    </div>
  );
}
