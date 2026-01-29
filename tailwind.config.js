/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Lato", "sans-serif"],
      },
      colors: {
        brand: "#E46C09",
        base: "#FFFBEB",
        textPrimary: "#3F2D1C",
        textSecondary: "#6B7280",
        buttoncolor: "#2196f3",
        homecolor: "#ffc000",
      },
    },
  },
  plugins: [
   
  ],
};
