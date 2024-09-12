/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        quicksand: ["Quicksand", "sans-serif"],
        miniver: ["Miniver", "serif"],
        josefin: ["Josefin Sans", "sans-serif"],
        comingSoon: ["Coming Soon", "cursive"],
        zentokyo: ['"Zen Tokyo Zoo"', "cursive"],
      },
      colors: {
        gold: "#C8AB81",
      },
      screens: {
        ipad: { min: "768px", max: "1024px" }, // Adjust this range as needed
      },
    },
  },
  plugins: [],
};
