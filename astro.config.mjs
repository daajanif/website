import { defineConfig } from "astro/config";
import partytown from "@astrojs/partytown";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://foxi.netlify.app/",
  integrations: [
    tailwind(),
    icon(),
    sitemap({
      // Include all languages in sitemap
      customPages: [
        '/',
        '/ar/',
        '/de/',
        '/features',
        '/ar/features',
        '/de/features',
        '/faq',
        '/ar/faq',
        '/de/faq',
        '/contact',
        '/ar/contact',
        '/de/contact',
      ]
    }),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ],
  // Remove all experimental features
  // We'll handle i18n manually through our middleware and components
});