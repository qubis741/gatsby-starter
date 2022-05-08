const languages = {
  sk: {
    default: true,
    path: `sk`,
    locale: `sk`,
    defaultTitle: `Using i18n with Gatsby`,
    defaultDescription: `Gatsby example site using MDX and dependency-free i18n`,
  },
  en: {
    path: `en`,
    locale: `en-US`,
    defaultTitle: `i18n mit Gatsby nutzen`,
    defaultDescription: `Gatsby Beispielseite, die MDX und i18n (frei von dependencies) nutzt`,
  },
  it: {
    path: `de`,
    locale: `de-DE`,
    defaultTitle: `i18n mit Gatsby nutzen`,
    defaultDescription: `Gatsby Beispielseite, die MDX und i18n (frei von dependencies) nutzt`,
  },
};
export const langageKeys = Object.keys(languages);
export default languages;
