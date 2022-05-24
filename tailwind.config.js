const colorsJT = require('./src/projects/journey-trade/colors');

const colors = process.env.GATSBY_PAGE === 'journeyTrade' ? colorsJT : null;

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: colors.primary,
        background: colors.background,
      },
      height: {
        128: '32rem',
      },
    },
  },
  variants: {},
  plugins: [],
};
