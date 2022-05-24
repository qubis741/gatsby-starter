require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const projectDir = {
  journeyTrade: 'journey-trade',
};
module.exports = {
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/i18n`,
        name: `i18n`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/projects/${projectDir[process.env.GATSBY_PAGE]}/assets`,
      },
    },
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        localeJsonSourceName: `i18n`,
        languages: [`sk`, `en`, `it`],
        defaultLanguage: `sk`,
        siteUrl: `http://localhost:8000/`,
      },
    },
  ],
};
