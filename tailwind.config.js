const projects = require('./src/projects');

const { colors } = projects[process.env.GATSBY_PAGE];

module.exports = {
  theme: {
    extend: {
      colors,
    },
  },
  variants: {},
  plugins: [],
};
