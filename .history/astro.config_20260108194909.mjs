
import { defineConfig } from "astro/config";
import icon from "astro-icon";

export default defineConfig({
  site: 'https://cavalcanteexpresso.github.io/luciano-landing/',
  base: '/luciano-landing/',
  integrations: [icon()],
});