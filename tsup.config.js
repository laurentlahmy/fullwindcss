import { defineConfig } from "tsup";

export default defineConfig({
  sourcemap: false,
  clean: true,
  treeshake: true,
  format: ["esm"],
  // external: ["react"],
  loader: { ".js": "jsx" },
});
