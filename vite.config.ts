import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: join(__dirname, "src/index.ts"),
      name: "BisagMapGeospatial",
      fileName: (format) => `bisag-map-geospatial.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});