import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import UnoCss from "unocss/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), UnoCss()],

  build: {
    rollupOptions: {
      output: {
        chunkFileNames: "js/[name]-[hash].js",
        entryFileNames: "js/[name]-[hash].js",
        assetFileNames: "[ext]/[name]-[hash].[ext]",
      },
    },
  },

  server: {
    port: 5173,
    hmr: true,
    host: true,
    proxy: {},
  },
});
