// @ts-check

import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import relativeLinks from "astro-relative-links";
import { site } from "./src/site.config.ts";

export default defineConfig({
  site: site.url,
  base: "/academic-bear",
  integrations: [relativeLinks(), sitemap()],
});
