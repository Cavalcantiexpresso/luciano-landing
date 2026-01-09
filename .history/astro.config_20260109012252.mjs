import { defineConfig } from "astro/config";
import github from "@astrojs/github";

export default defineConfig({
  base: "/luciano-landing/",
  output: "static",
  adapter: github(),
});
