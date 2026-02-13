// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://krzysiekworwa.github.io',
  base: "/codify-homepage/",
  vite: {
    plugins: [tailwindcss()]
  }
});