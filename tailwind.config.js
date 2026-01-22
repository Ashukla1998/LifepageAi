/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Poppins", "sans-serif"],
      },
      colors: {
        brand: "#F59E0B",
        base: "#FFFBEB",
        textPrimary: "#3F2D1C",
        textSecondary: "#6B7280",
      },
    },
  },
  plugins: [
   
  ],
};
