import { defineConfig } from "vitest";

export default defineConfig({
  testMatch: "**/tests/**/*.{spec,test}.{js,jsx}",
  testEnvironment: "jsdom",
  setupFiles: ["./tests/setup.js"],
});
