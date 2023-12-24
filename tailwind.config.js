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
        xs: '425px',
      },
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
}
