import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

const config =
  import.meta.env.MODE === "development"
    ? defineConfig({
        site: "http://localhost:4321",
        base: "/",
        integrations: [mdx(), sitemap()],
        output: "static",
      })
    : defineConfig({
        site: "https://adaptdk.github.io",
        base: "/speculationrules/",
        integrations: [mdx(), sitemap()],
        output: "static",
      });

// https://astro.build/config
export default config;
