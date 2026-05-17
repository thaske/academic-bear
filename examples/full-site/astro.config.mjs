// @ts-check

import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import { site } from "./src/site.config.ts";

export default defineConfig({
  site: site.url,
  integrations: [sitemap()],
});
