// @ts-check

import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, fontProviders } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://tuo.toni0haila.workers.dev/",
  integrations: [mdx(), sitemap(), react()],

  fonts: [
    {
      provider: fontProviders.local(),
      name: "BobbyJonesSoftRegular",
      cssVariable: "--font-bobby-jones",
      fallbacks: ["Lato", "Helvetica", "Arial", "Lucida", "sans-serif"],
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/BobbyJonesSoftRegular.woff2"],
            weight: "normal",
            style: "normal",
            display: "swap",
          },
        ],
      },
    },
    {
      provider: fontProviders.local(),
      name: "WCManoNegraBoldBta",
      cssVariable: "--font-mano-negra",
      fallbacks: ["Lato", "Helvetica", "Arial", "Lucida", "sans-serif"],
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/WCManoNegraBoldBta.woff"],
            weight: "normal",
            style: "normal",
            display: "swap",
          },
        ],
      },
    },
    {
      provider: fontProviders.fontsource(),
      name: "Lato",
      fallbacks: ["Helvetica", "Arial", "Lucida", "sans-serif"],
      cssVariable: "--font-lato",
      weights: [400, 700, 900],
      styles: ["normal"],
    },
    {
      provider: fontProviders.fontsource(),
      name: "Open Sans",
      cssVariable: "--font-open-sans",
      fallbacks: ["Arial", "sans-serif"],
      weights: [400, 600, 700],
      styles: ["normal"],
    },
    {
      provider: fontProviders.fontsource(),
      name: "Montserrat",
      cssVariable: "--font-montserrat",
      fallbacks: ["Open Sans", "Arial", "sans-serif"],
      weights: ["100 900"],
      styles: ["normal"],
    },
  ],

  image: {
    domains: ["opiskelijakunta.net", "cms.raknage.com"],
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
