import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      rotate: {
        '60': '60deg'
      },
      fontFamily: {
        quicksand: ['var(--font-quicksand)'],
      },
      boxShadow: {
        'dark': '0px 0px 8px 0px rgba(0, 0, 0, 0.7)',
      }
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'space-gray': '#262523',
      'cement': {
        default: '#d3d0cb',
        200: '#ECEBE9',
        300: '#E3E1DE',
        400: '#d3d0cb',
      },
      'oceanic': '#587b7f',
      'myrtle': '#20A39E',
      'giallo': {
        default: '#FFBA49',
        800: '#FFBA49'
      },
      'black': '#000000',
      'ash': '#B7BFB0',
      'smoke': '#111505',
      'timber': '#D9D9D7'
    }
  },
  plugins: [
    require("@tailwindcss/typography"),
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar'),
  ],
}

export default config
