import JTPages from './journey-trade/pages';
import JTColors from './journey-trade/colors';
import IndexPage from './journey-trade/indexPage';
import heroImg from './journey-trade/assets/hero.jpg';

const projects = {
  journeyTrade: {
    pages: JTPages,
    colors: JTColors,
    indexPage: IndexPage,
    assets: {
      heroImg,
    },
  },
};

export default projects;
