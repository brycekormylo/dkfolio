import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: "class",
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
        'inset': 'inset 0rem 0.2rem 0.4rem 0 rgba(0,0,0,0.1)',
        'neo': '0.625rem 0.625rem 0.875rem 0 rgba(225,226,228,0.7), -0.5rem -0.5rem 1.125rem 0 rgba(255,255,255,0.6)',
        'neodark': '0.25rem 0.25rem 0.5rem 0 rgba(0,0,0,0.6), -0.25rem -0.25rem 0.5rem 0 rgba(0,0,0,0.4)',
        'neotop': '-0.5rem -0.5rem 1.125rem 0 rgb(255,255,255), 0px 0px 8px 0px rgba(0, 0, 0, 0.2)'
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'crimson': '#FF0000',
      'space-gray': '#262523',
      'cement': {
        default: '#d3d0cb',
        200: '#ECEBE9',
        300: '#E3E1DE',
        400: '#d3d0cb',
      },
      'oceanic': '#587b7f',
      'black': '#000000',
      'ash': '#B7BFB0',
      'smoke': '#111505',
      'timber': '#f2f3f9'
    }
  },
  plugins: [
    require("@tailwindcss/typography"),
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar'),
  ],
}

export default config
