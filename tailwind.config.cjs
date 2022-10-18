/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    extend: {
      backgroundImage: {
      topbackground: 'url(/img/backgroungHeading-img.png)' 
      },

      fontSize: {
        xs: 12,
        sm: 14,
        md: 24,
        llg: 42,
        xl: 48
      },

      colors: {
        black: '#000000',

        white: {
          500: '#EEE',
          'Total': '#FFF'
        },

        transparent: 'transparent',

        lightPink: '#F1DBDD',

        lightOrange: '#F1C3A9',

        Purple: '#9A58CE'
      },

      fontFamily: {
        sans: 'Inter, sans-serif',
      },
    },
  },
  plugins: [],
}
