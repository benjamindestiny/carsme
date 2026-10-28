import { Search } from "lucide-react";

export default function SearchBar({ value, onChange }) {
  return (
    <div className="relative w-full max-w-md">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
      <input value={value} onChange={(e) => onChange(e.target.value)} placeholder="Search brand, model, category..." className="w-full bg-card border border-white/10 rounded-xl pl-10 pr-4 py-3 outline-none focus:border-accent transition" />
    </div>
  );
}
