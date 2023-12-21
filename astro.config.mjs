import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

import vercel from "@astrojs/vercel/static";

// https://astro.build/config
export default defineConfig({
  site: "https://computerclub.dev",
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport'
  },
  // PORT 
  vite: {
    ssr: {
      noExternal: ["react-icons"]
    }
  },
  server: {
    port: 3000
  },
  integrations: [react(), tailwind({
    applyBaseStyles: false
  }), sitemap()],
  output: "static",
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
    speedInsights: {
      enabled: true
    }
  })
});
