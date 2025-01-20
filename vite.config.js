import { defineConfig } from "vite";
import eslint from "vite-plugin-eslint";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint()],
});
