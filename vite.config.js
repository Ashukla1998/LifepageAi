// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/ai/",
  server: {
    proxy: {
      "/n/api": {
        target: "https://www.lifepage.in",
        changeOrigin: true,
        secure: true,
        rewrite: (path) =>
          path.replace(/^\/lifepage/, ""),
      },
    },
  },
});
