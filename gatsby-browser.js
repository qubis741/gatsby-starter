import './src/css/tailwind.css';
import React from "react"
import Layout from './src/components/layout/Layout';
import { MyContext } from './src/context';

export const wrapRootElement = ({ element }) => (
  <MyContext.Provider value={{isJourneyTradePage: process.env.GATSBY_PAGE === 'journey-trade', isAtanerPage: process.env.GATSBY_PAGE === 'ataner'}}>
    <Layout>{element}</Layout>
  </MyContext.Provider>
)