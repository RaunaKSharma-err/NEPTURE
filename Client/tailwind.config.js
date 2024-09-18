/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        BLACK: "#000000",
        ORANGE: "#FF6600",
        WHITE: "#F5F5F5",
        VOILET: "#604CC3",
      },
    },
  },
  plugins: [require("daisyui")],
};
