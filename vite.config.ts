/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    // Vitest configuration
    globals: true,
    environment: "jsdom",
    silent: true,
  },
});
