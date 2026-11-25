/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        zappora: '#fd7e14',
        zapporaLight: '#ffa39e',
        zapporaDark: '#c4532a',
        saas: {
          50: '#fffbff',
          100: '#f7f0fa',
          500: '#a855f7',
          600: '#9a4cff',
        },
        gradient: {
          zappora: 'linear-gradient(135deg, #fd7e14, #ffa39e)',
          saas: 'linear-gradient(135deg, #fd7e14, #c4532a)',
        }
      },
      fontFamily: {
        sans: ['System', 'sans-serif'],
      }
    },
  },
  plugins: [],
}