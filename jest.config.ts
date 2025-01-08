// jest.config.ts
import { createJestConfig } from "vite-jest";

export default createJestConfig({
  preset: "ts-jest",
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
});
