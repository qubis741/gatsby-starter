import React from 'react';
import { MyContext } from './src/context';
import projects from './src/projects';
import './src/css/tailwind.css';

export const wrapRootElement = ({ element }) => {
  const isJourneyTradePage = process.env.GATSBY_PAGE === 'journeyTrade';
  const isAtanerPage = process.env.GATSBY_PAGE === 'ataner';
  return (
    <MyContext.Provider
      value={{
        isJourneyTradePage,
        isAtanerPage,
        project: projects[process.env.GATSBY_PAGE],
      }}
    >
      {element}
    </MyContext.Provider>
  );
};
