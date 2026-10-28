/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: { bg: "#0a0a0f", card: "#14141c", accent: "#ff2e63", accent2: "#00e5ff" },
      fontFamily: { display: ["'Space Grotesk'", "sans-serif"] },
    },
  },
  plugins: [],
};
