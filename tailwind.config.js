const { color } = require('framer-motion');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // فعال کردن دارک مود با کلاس
  theme: {
    extend: {
      colors: {
        light: {
          background: '#ffffff',
          text: '#333333',
          border: "#ffffff",

        },
        dark: {
          background: '#242424',
          text: '#ffffff',
          border: "#ffffff",
        },
      },
    },
  },
  plugins: [],
}

