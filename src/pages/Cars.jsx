import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { useSearchParams } from "react-router-dom";
import CarCard from "../components/CarCard";
import SearchBar from "../components/SearchBar";
import { cars } from "../data/cars";

const CATEGORIES = [
  "All",
  "Supercar",
  "Hypercar",
  "Normal",
  "Sedan",
  "Sport",
  "Electric",
];

export default function Cars() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState("");
  const initialCategory = searchParams.get("category") || "All";
  const [cat, setCat] = useState(
    CATEGORIES.includes(initialCategory) ? initialCategory : "All",
  );

  useEffect(() => {
    const categoryFromUrl = searchParams.get("category");
    if (categoryFromUrl && CATEGORIES.includes(categoryFromUrl)) {
      setCat(categoryFromUrl);
    } else if (!categoryFromUrl) {
      setCat("All");
    }
  }, [searchParams]);

  const handleCategoryChange = (nextCat) => {
    setCat(nextCat);
    const nextParams = new URLSearchParams(searchParams);

    if (nextCat === "All") {
      nextParams.delete("category");
    } else {
      nextParams.set("category", nextCat);
    }

    setSearchParams(nextParams);
  };

  const filtered = useMemo(
    () =>
      cars.filter((c) => {
        const matchCat = cat === "All" || c.category === cat;
        const q = query.toLowerCase();
        const matchQ =
          !q ||
          c.name.toLowerCase().includes(q) ||
          c.brand.toLowerCase().includes(q);
        return matchCat && matchQ;
      }),
    [query, cat],
  );

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="mb-8">
        <p className="text-sm uppercase tracking-[0.25em] text-accent mb-3">
          Collection
        </p>
        <h1 className="text-4xl md:text-5xl font-bold mb-2">Browse Cars</h1>
      </div>
      <p className="text-gray-400 mb-8">{filtered.length} cars found</p>

      <div className="flex flex-col md:flex-row md:items-center gap-4 mb-12">
        <SearchBar value={query} onChange={setQuery} />
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => handleCategoryChange(c)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition ${cat === c ? "bg-accent text-white shadow-lg shadow-accent/20" : "bg-card text-gray-300 hover:bg-white/10"}`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="text-gray-400 py-16 text-center">
          No cars match your search.
        </p>
      ) : (
        <motion.div
          layout
          className="grid md:grid-cols-2 gap-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          {filtered.map((c) => (
            <motion.div
              key={c.id}
              layout
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <CarCard car={c} />
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
}
