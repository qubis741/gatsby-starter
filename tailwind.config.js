const colorsJT = require('./src/projects/journey-trade/colors');

const colors = process.env.GATSBY_PAGE === 'journeyTrade' ? colorsJT : null;

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors,
    },
  },
  variants: {},
  plugins: [],
};
