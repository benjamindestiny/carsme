import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Zap } from "lucide-react";

export default function CarCard({ car }) {
  const imageSource = car.image || car.images?.[0] || "";
  const fmt = (n) =>
    n.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    });

  return (
    <motion.article
      layout
      whileHover={{ y: -6, scale: 1.01 }}
      whileTap={{ scale: 0.985 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="group"
    >
      <Link
        to={`/cars/${car.id}`}
        className="block bg-card rounded-2xl overflow-hidden border border-white/5 hover:border-accent/50 transition-all hover:glow"
      >
        <div className="aspect-video overflow-hidden">
          <motion.img
            src={imageSource}
            alt={car.name}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        </div>
        <div className="p-5">
          <div className="flex items-center justify-between text-xs text-gray-400 mb-2">
            <span className="uppercase tracking-wider">{car.brand}</span>
            <span className="px-2 py-0.5 bg-accent/20 text-accent rounded-full">
              {car.category}
            </span>
          </div>
          <h3 className="text-lg font-bold mb-1">{car.name}</h3>
          <div className="flex items-center justify-between mt-3 gap-2">
            <motion.span
              className="text-accent font-bold text-lg"
              animate={{ scale: [1, 1.04, 1] }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {fmt(car.price)}
            </motion.span>
            <span className="flex items-center gap-1 text-xs text-gray-400">
              <Zap size={14} className="text-accent2" /> {car.specs.power}
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
