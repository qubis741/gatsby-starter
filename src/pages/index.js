import { graphql } from 'gatsby';
import React, { useContext } from 'react';
import Layout from '../components/layout/Layout';
import { MyContext } from '../context';

const Index = () => {
  const ctx = useContext(MyContext);
  console.log(ctx);
  const IndexPage = ctx.project.indexPage;
  return (
    <Layout>
      <IndexPage />
    </Layout>
  );
};

export default Index;

export const query = graphql`
  query($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
