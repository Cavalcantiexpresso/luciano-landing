
import { defineConfig } from "astro/config";
import icon from "astro-icon";


export default defineConfig({
  base: '/luciano-landing/',
  integrations: [icon()],
});