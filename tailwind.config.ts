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
        'neo': '0.625rem 0.625rem 0.875rem 0 rgba(161,159,153,0.2), -0.5rem -0.5rem 1.125rem 0 rgba(255,255,255, 0.3)',
        'neodark': '0.25rem 0.25rem 0.5rem 0 rgba(26,23,21), -0.25rem -0.25rem 0.5rem 0 rgba(52,47,41)',
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
      'ash': '#a3a996',
      'smoke': '#27231f',
      'timber': '#f1eee4'
    }
  },
  plugins: [
    require("@tailwindcss/typography"),
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar'),
  ],
}

export default config
