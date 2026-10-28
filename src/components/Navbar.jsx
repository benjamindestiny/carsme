import { Link, useLocation } from "react-router-dom";
import { Gauge } from "lucide-react";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Browse", to: "/cars" },
  { label: "Supercars", to: "/cars?category=Supercar" },
  { label: "Electric", to: "/cars?category=Electric" },
];

export default function Navbar() {
  const { pathname, search } = useLocation();

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-bg/70 border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 gap-4">
        <Link
          to="/"
          className="flex items-center gap-2 text-2xl font-bold whitespace-nowrap"
        >
          <Gauge className="text-accent" />
          <span>
            Cars<span className="text-accent">Me</span>
          </span>
        </Link>

        <nav className="flex flex-wrap items-center justify-end gap-3 text-sm">
          {navItems.map(({ label, to }) => {
            const isActive =
              to === "/"
                ? pathname === "/"
                : to === "/cars"
                  ? pathname === "/cars"
                  : pathname === "/cars" &&
                    search.includes(
                      `category=${encodeURIComponent(label === "Supercars" ? "Supercar" : "Electric")}`,
                    );

            return (
              <Link
                key={label}
                to={to}
                className={`px-3 py-2 rounded-full transition ${isActive ? "bg-accent text-white" : "text-gray-300 hover:text-white hover:bg-white/5"}`}
              >
                {label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
