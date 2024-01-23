import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import htmx from "astro-htmx";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  site: "https://abonmassip.github.io",
  integrations: [tailwind(), htmx()],
  output: "static",
  adapter: node({
    mode: "standalone",
  }),
});
