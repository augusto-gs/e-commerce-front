import { fileURLToPath } from "node:url";
import { mergeConfig, defineConfig, configDefaults } from "vitest/config";
import viteConfig from "./vite.config";

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      environment: "jsdom",
      exclude: [...configDefaults.exclude, "e2e/**"],
      root: fileURLToPath(new URL("./", import.meta.url)),
      setupFiles: "./src/setupTests.ts",
      globals: true,
      coverage: {
        provider: "v8",
        reporter: ["lcov", "text"],
        all: true,
        include: ["**/src/**/*.{ts,vue}"],
        exclude: [
          "**/*.spec.{ts,vue}",
          "**/src/main.ts",
          "**/src/router/index.ts",
        ],
      },
    },
  }),
);
