import { defineConfig } from 'astro/config';

import pandacss from '@pandacss/astro'
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale: "es",
    locales: ["es", "ca"],
    routing: {
      prefixDefaultLocale: false
    }
  },
  integrations: [pandacss(), react()]
});