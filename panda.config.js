import { defineConfig } from '@pandacss/dev'

import themePresets from './themePresets'

export default defineConfig({
  presets: [themePresets],
  include: ['./src/**/*.{ts,tsx,js,jsx,astro}', './pages/**/*.{ts,tsx,js,jsx,astro}'],
})
