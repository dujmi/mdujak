// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from "@astrojs/sitemap";

import vercel from "@astrojs/vercel";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://mdujak.vercel.app",
  output: "static",

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [sitemap(), react()],
  adapter: vercel(),
});