import React from 'react';
import { MyContext } from './src/context';
import './src/css/tailwind.css';

export const wrapRootElement = ({ element }) => (
  <MyContext.Provider
    value={{
      isJourneyTradePage: process.env.GATSBY_PAGE === 'journey-trade',
      isAtanerPage: process.env.GATSBY_PAGE === 'ataner',
    }}
  >
    {element}
  </MyContext.Provider>
);
