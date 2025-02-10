import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true, // enables global variables like `describe`, `test`, `expect`
    environment: "jsdom", // or 'node', depending on your test environment
    watch: true, // to enable watch mode
    // additional config options can be added here
  },
});
