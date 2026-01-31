/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Lato", "sans-serif"],
      },
      colors: {
        lifepageYellow: "#ffc000",
        lifepageBlue: "#2196f3",
        textPrimary: "#3F2D1C",
        textSecondary: "#6B7280",
      },
    },
  },
  plugins: [],
};
