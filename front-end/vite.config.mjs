import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "build",
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.js",
    // Node's native localStorage global shadows jsdom's working one in tests; disable it.
    execArgv: ["--no-experimental-webstorage"],
  },
});
