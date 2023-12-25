const { nextui } = require('@nextui-org/react')
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        lightBlue: 'rgb(208, 214, 249)',
        darkBlue: 'rgb(11, 13, 23)',
      },
      fontFamily: {
        sans: ['Barlow', 'sans-serif'],
        'barlow-condensed': ['Barlow Condensed', 'sans-serif'],
        bellefair: ['Bellefair', 'serif'],
      },
      screens: {
        xs: '426px',
        md: '769px',
      },
      gridTemplateColumns: {
        'auto-fit-164': 'repeat(auto-fill, minmax(164px, 1fr))',
        'auto-fit-220': 'repeat(auto-fill, minmax(220px, 1fr))',
        'auto-fit-280': 'repeat(auto-fill, minmax(280px, 1fr))',
        main: 'max-content, 1fr',
        tech: 'max-content 1fr max-content',
      },
    },
  },
  darkMode: 'class',
  plugins: [
    nextui(),
    function ({ addUtilities }) {
      const newUtilities = {
        '.bg-y-0': { 'background-position-y': '0px' },
        '.bg-y-380': { 'background-position-y': '-380px' },
      }

      addUtilities(newUtilities)
    },
  ],
}
