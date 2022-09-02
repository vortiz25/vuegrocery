/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Raleway', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        background: '#a21caf',
        foreground: '#ddd6fe',
        comment: '#a5f3fc',
        accent: '#c3e88d',
        redish: '#b91c1c',
        orangish: '#f78c6c',
        yellowish: '#ffcb6b',
        greenish: '#c3e88d',
        bluish: '#82aaff',
        purplish: '#c792ea',
      },
    },
  },
  plugins: [],
}