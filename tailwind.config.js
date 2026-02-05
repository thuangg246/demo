/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        primary: "#163051",
        second: "#17426D",
        "gradient-start": "#00D1FE",
        "gradient-end": "#B220FC",
      },
      backgroundImage: {
        "gradient-main": "linear-gradient(135deg, #00D1FE 0%, #B220FC 100%)",
      },
    },
  },
  plugins: [],
};
