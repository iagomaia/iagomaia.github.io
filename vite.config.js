import { defineConfig } from "vite";
import WindiCSS from "vite-plugin-windicss";
import vue from "@vitejs/plugin-vue";
import VitePluginFonts from "vite-plugin-fonts";
import PurgeIcons from "vite-plugin-purge-icons";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    WindiCSS(),
    VitePluginFonts({
      google: {
        families: ["Roboto"],
      },
    }),
    PurgeIcons(),
  ],
});
