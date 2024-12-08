import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["./index.ts", "./script.ts"],
  sourcemap: false,
  clean: true,
  treeshake: true,
  format: ["esm"],
  // external: ["react"],
  loader: { ".js": "jsx" },
});
