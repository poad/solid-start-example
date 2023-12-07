// vitest.config.ts
import solid from "file:///Users/ken-yo/git/poad/solidjs/solid-start-example/node_modules/.pnpm/solid-start@0.3.10_@solidjs+meta@0.29.1_@solidjs+router@0.9.1_solid-js@1.8.7_solid-start-node@0.3.10_vite@5.0.6/node_modules/solid-start/vite/plugin.js";
import { defineConfig } from "file:///Users/ken-yo/git/poad/solidjs/solid-start-example/node_modules/.pnpm/vitest@1.0.2_@vitest+ui@1.0.2_jsdom@23.0.1/node_modules/vitest/dist/config.js";
var vitest_config_default = defineConfig({
  plugins: [solid()],
  test: {
    deps: {
      registerNodeLoader: true,
      inline: [/solid-js/]
    },
    environment: "jsdom",
    globals: true,
    setupFiles: [
      "./setupVitest.js"
    ],
    testTransformMode: { web: ["/*.[jt]sx"] },
    coverage: {
      reporter: ["text", "json-summary", "json"]
    }
  },
  resolve: {
    conditions: ["development", "browser"]
  }
});
export {
  vitest_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZXN0LmNvbmZpZy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9Vc2Vycy9rZW4teW8vZ2l0L3BvYWQvc29saWRqcy9zb2xpZC1zdGFydC1leGFtcGxlXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMva2VuLXlvL2dpdC9wb2FkL3NvbGlkanMvc29saWQtc3RhcnQtZXhhbXBsZS92aXRlc3QuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9rZW4teW8vZ2l0L3BvYWQvc29saWRqcy9zb2xpZC1zdGFydC1leGFtcGxlL3ZpdGVzdC5jb25maWcudHNcIjtpbXBvcnQgc29saWQgZnJvbSBcInNvbGlkLXN0YXJ0L3ZpdGVcIjtcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gXCJ2aXRlc3QvY29uZmlnXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtzb2xpZCgpXSxcbiAgdGVzdDoge1xuICAgIGRlcHM6IHtcbiAgICAgIHJlZ2lzdGVyTm9kZUxvYWRlcjogdHJ1ZSxcbiAgICAgIGlubGluZTogWy9zb2xpZC1qcy9dLFxuICAgIH0sXG4gICAgZW52aXJvbm1lbnQ6IFwianNkb21cIixcbiAgICBnbG9iYWxzOiB0cnVlLFxuICAgIHNldHVwRmlsZXM6IFtcbiAgICAgIFwiLi9zZXR1cFZpdGVzdC5qc1wiLFxuICAgIF0sXG4gICAgdGVzdFRyYW5zZm9ybU1vZGU6IHsgd2ViOiBbJy8qLltqdF1zeCddIH0sXG4gICAgY292ZXJhZ2U6IHtcbiAgICAgIHJlcG9ydGVyOiBbJ3RleHQnLCAnanNvbi1zdW1tYXJ5JywgJ2pzb24nXSxcbiAgICB9LFxuICB9LFxuICByZXNvbHZlOiB7XG4gICAgY29uZGl0aW9uczogW1wiZGV2ZWxvcG1lbnRcIiwgXCJicm93c2VyXCJdLFxuICB9LFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTRVLE9BQU8sV0FBVztBQUM5VixTQUFTLG9CQUFvQjtBQUU3QixJQUFPLHdCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTLENBQUMsTUFBTSxDQUFDO0FBQUEsRUFDakIsTUFBTTtBQUFBLElBQ0osTUFBTTtBQUFBLE1BQ0osb0JBQW9CO0FBQUEsTUFDcEIsUUFBUSxDQUFDLFVBQVU7QUFBQSxJQUNyQjtBQUFBLElBQ0EsYUFBYTtBQUFBLElBQ2IsU0FBUztBQUFBLElBQ1QsWUFBWTtBQUFBLE1BQ1Y7QUFBQSxJQUNGO0FBQUEsSUFDQSxtQkFBbUIsRUFBRSxLQUFLLENBQUMsV0FBVyxFQUFFO0FBQUEsSUFDeEMsVUFBVTtBQUFBLE1BQ1IsVUFBVSxDQUFDLFFBQVEsZ0JBQWdCLE1BQU07QUFBQSxJQUMzQztBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLFlBQVksQ0FBQyxlQUFlLFNBQVM7QUFBQSxFQUN2QztBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
