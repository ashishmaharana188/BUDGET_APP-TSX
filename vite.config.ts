/// <reference types="vitest" />
import { defineConfig } from "vite";

import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    // Vitest configuration
    globals: true, // Enables global test methods like `describe` and `it`
    environment: "jsdom", // Simulates the DOM for React testing
  },
});
