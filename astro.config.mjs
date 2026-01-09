
import { defineConfig } from "astro/config";
import icon from "astro-icon";


  export default defineConfig({
  site: 'https://cavalcantiexpresso.github.io',
  base: '/luciano-landing/',
  integrations: [icon()]
});

