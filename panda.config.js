import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  preflight: true,
  // define the content to scan 👇🏻
  include: [
    './src/**/*.{ts,tsx,js,jsx,astro}',
    './pages/**/*.{ts,tsx,js,jsx,astro}'
  ],
  exclude: [],
  outdir: 'styled-system',
  conditions: {
    light: '[data-color-mode=light] &',
    dark: '[data-color-mode=dark] &'
  },
  theme: {
    tokens: {
      colors: {
        blue: {
          50: { value: '#EEFAFC' },
          100: { value: '#C9EEF6' },
          200: { value: '#AFE6F1' },
          300: { value: '#8ADBEB' },
          400: { value: '#74D4E7' },
          500: { value: '#51C9E1' },
          600: { value: '#4AB7CD' },
          700: { value: '#3A8FA0' },
          800: { value: '#2D6F7C' },
          900: { value: '#22545F' }
        },

        gray: {
          50: { value: '#F5F5F5' },
          75: { value: '#F0F0F0' },
          100: { value: '#EBEBEB' },
          150: { value: '#E6E6E6' },
          200: { value: '#C6C6C6' },
          300: { value: '#ABABAB' },
          400: { value: '#9B9B9B' },
          500: { value: '#828282' },
          600: { value: '#5C5C5C' },
          700: { value: '#3A8FA0' },
          800: { value: '#484848' },
          900: { value: '#333333' },
          950: { value: '#1A1A1A' }
        },

        white: { value: '#FFFFFF' },
        black: { value: '#000000' }
      },
      fonts: {
        inter: { value: `'Inter', sans-serif` },
        work: { value: `'Work Sans Variable', sans-serif` }
      }
    },
    semanticTokens: {
      colors: {
        neutral: {
          foreground: {
            1: {
              enabled: {
                value: {
                  base: '{colors.gray.900}',
                  _dark: '{colors.white}'
                }
              }
            }
          },
          background: {
            1: {
              enabled: {
                value: {
                  base: '{colors.gray.50}',
                  _dark: '{colors.gray.950}'
                }
              }
            }
          }
        }
      }
    }
  }
})
