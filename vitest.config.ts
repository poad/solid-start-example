import solid from "solid-start/vite";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [solid()],
  test: {
    deps: {
      registerNodeLoader: true,
      inline: [/solid-js/],
    },
    environment: "jsdom",
    globals: true,
    setupFiles: [
      "./setupVitest.js",
    ],
    testTransformMode: { web: ['/*.[jt]sx'] },
    coverage: {
      reporter: ['text', 'json-summary', 'json'],
    },
  },
  resolve: {
    conditions: ["development", "browser"],
  },
});
