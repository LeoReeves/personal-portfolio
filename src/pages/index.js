import React from 'react';

import Header from '../components/header/header';
import Layout from '../components/layout/layout';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={['Leo Reeves', 'front-end', 'developer']} />
    <Header
      primaryHeading={'Leo Reeves'}
      secondaryHeading={'Front-end Developer'}
      buttonText={'Contact Me'}
      buttonRoute={'/contact/'}
    />
  </Layout>
)

export default IndexPage;
