const colorsJT = require('./src/projects/journey-trade/colors');

const colors = process.env.GATSBY_PAGE === 'journeyTrade' ? colorsJT : null;

module.exports = {
  theme: {
    extend: {
      colors,
    },
  },
  variants: {},
  plugins: [],
};
