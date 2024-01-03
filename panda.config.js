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
      },
      easings: {
        easeIn: { value: 'cubic-bezier(0.4, 0, 1, 1)' },
        easeOut: { value: 'cubic-bezier(0, 0, 0.2, 1)' },
        easeInOut: { value: 'cubic-bezier(0.4, 0, 0.2, 1)' }
      },
      durations: {
        50: { value: '50ms' },
        75: { value: '75ms' },
        100: { value: '100ms' },
        150: { value: '150ms' },
        200: { value: '200ms' },
        300: { value: '300ms' },
        500: { value: '500ms' },
        700: { value: '700ms' },
        1000: { value: '1000ms' }
      },
      radii: {
        none: { value: '0' },
        sm: { value: '0.125rem' },
        md: { value: '0.25rem' },
        lg: { value: '0.5rem' },
        xl: { value: '1rem' },
        full: { value: '9999px' }
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
              },
              hovered: {
                value: {
                  base: '{colors.gray.900}',
                  _dark: '{colors.white}'
                }
              },
              selected: {
                value: {
                  base: '{colors.gray.900}',
                  _dark: '{colors.white}'
                }
              }
            },
            2: {
              enabled: {
                value: {
                  base: '{colors.gray.600}',
                  _dark: '{colors.gray.200}'
                }
              },
              hovered: {
                value: {
                  base: '{colors.gray.800}',
                  _dark: '{colors.white}'
                }
              },
              selected: {
                value: {
                  base: '{colors.gray.800}',
                  _dark: '{colors.gray.200}'
                }
              }
            },
            3: {
              enabled: {
                value: {
                  base: '{colors.gray.300}',
                  _dark: '{colors.gray.600}'
                }
              },
              hovered: {
                value: {
                  base: '{colors.gray.400}',
                  _dark: '{colors.gray.500}'
                }
              }
            },
            onbrand: {
              enabled: {
                value: {
                  base: '{colors.white}',
                  _dark: '{colors.white}'
                }
              }
            },
            inverted: {
              enabled: {
                value: {
                  base: '{colors.white}',
                  _dark: '{colors.gray.900}'
                }
              }
            },
            brand: {
              primary: {
                hovered: {
                  value: {
                    base: '{colors.blue.500}',
                    _dark: '{colors.blue.500}'
                  }
                }
              }
            }
          },
          background: {
            inverted: {
              1: {
                enabled: {
                  value: {
                    base: '{colors.gray.900}',
                    _dark: '{colors.white}'
                  }
                },
                hovered: {
                  value: {
                    base: '{colors.black}',
                    _dark: '{colors.gray.50}'
                  }
                }
              },
              2: {
                enabled: {
                  value: {
                    base: '{colors.gray.700}',
                    _dark: '{colors.white}'
                  }
                },
                hovered: {
                  value: {
                    base: '{colors.gray.800}',
                    _dark: '{colors.gray.50}'
                  }
                }
              }
            },
            brand: {
              primary: {
                hovered: {
                  value: {
                    base: '{colors.blue.500}',
                    _dark: '{colors.blue.500}'
                  }
                }
              }
            },
            1: {
              enabled: {
                value: {
                  base: '{colors.white}',
                  _dark: '{colors.gray.950}'
                }
              }
            },
            2: {
              enabled: {
                value: {
                  base: '{colors.gray.50}',
                  _dark: '{colors.gray.900}'
                }
              }
            },
            3: {
              enabled: {
                value: {
                  base: '{colors.gray.75}',
                  _dark: '{colors.gray.800}'
                }
              }
            },
            4: {
              enabled: {
                value: {
                  base: '{colors.gray.100}',
                  _dark: '{colors.gray.600}'
                }
              }
            },
            alpha: {
              enabled: {
                value: {
                  base: 'rgba(255, 255, 255, 9)',
                  _dark: 'rgba(0, 0, 0, 9)'
                }
              }
            }
          },
          stroke: {
            1: {
              enabled: {
                value: {
                  base: '{colors.gray.50}',
                  _dark: '{colors.gray.800}'
                }
              }
            },
            2: {
              enabled: {
                value: {
                  base: '{colors.gray.200}',
                  _dark: '{colors.gray.700}'
                }
              }
            },
            3: {
              enabled: {
                value: {
                  base: '{colors.gray.700}',
                  _dark: '{colors.gray.300}'
                }
              }
            },
            4: {
              enabled: {
                value: {
                  base: '{colors.black}',
                  _dark: '{colors.white}'
                }
              }
            },
            brand: {
              primary: {
                hovered: {
                  value: {
                    base: '{colors.blue.500}',
                    _dark: '{colors.blue.500}'
                  }
                }
              }
            }
          }
        },
        brand: {
          primary: {
            foreground: {
              1: {
                enabled: {
                  value: {
                    base: '{colors.blue.500}',
                    _dark: '{colors.blue.500}'
                  }
                }
              }
            },
            background: {
              1: {
                hovered: {
                  value: {
                    base: '{colors.blue.100}',
                    _dark: '{colors.blue.900}'
                  }
                },
                selected: {
                  value: {
                    base: '{colors.blue.100}',
                    _dark: '{colors.blue.900}'
                  }
                }
              },
              2: {
                enabled: {
                  value: {
                    base: '{colors.blue.50}',
                    _dark: '{colors.blue.800}'
                  }
                },
                hovered: {
                  value: {
                    base: '{colors.blue.500}',
                    _dark: '{colors.blue.900}'
                  }
                },
                selected: {
                  value: {
                    base: '{colors.blue.500}',
                    _dark: '{colors.blue.900}'
                  }
                }
              },
              3: {
                enabled: {
                  value: {
                    base: '{colors.blue.500}',
                    _dark: '{colors.blue.400}'
                  }
                },
                hovered: {
                  value: {
                    base: '{colors.blue.900}',
                    _dark: '{colors.blue.300}'
                  }
                },
                selected: {
                  value: {
                    base: '{colors.blue.600}',
                    _dark: '{colors.blue.300}'
                  }
                }
              },
              subtle: {
                enabled: {
                  value: {
                    base: '{colors.blue.50}',
                    _dark: '{colors.blue.800}'
                  }
                },
                hovered: {
                  value: {
                    base: '{colors.blue.50}',
                    _dark: '{colors.blue.800}'
                  }
                }
              }
            },
            stroke: {
              1: {
                enabled: {
                  value: {
                    base: '{colors.blue.100}',
                    _dark: '{colors.blue.800}'
                  }
                }
              },
              2: {
                enabled: {
                  value: {
                    base: '{colors.blue.500}',
                    _dark: '{colors.blue.400}'
                  }
                },
                hovered: {
                  value: {
                    base: '{colors.blue.700}',
                    _dark: '{colors.blue.200}'
                  }
                },
                selected: {
                  value: {
                    base: '{colors.blue.700}',
                    _dark: '{colors.blue.200}'
                  }
                }
              }
            }
          }
        }
      }
    }
  }
})
