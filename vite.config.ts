import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";

export default defineConfig({
  plugins: [react()],
  base: "/demo/",
  build: {
    outDir: "dist",
    rollupOptions: {
      input: resolve(__dirname, "demo.html"),
    },
  },
  server: {
    open: "/demo.html",
  },
});
