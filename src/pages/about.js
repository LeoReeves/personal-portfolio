import React from 'react';

import About from '../components/about/about';
import Header from '../components/header/header';
import Layout from '../components/layout/layout';
import SEO from '../components/seo';

const AboutPage = () => (
  <Layout>
    <SEO title="About" keywords={['Leo Reeves', 'about me']} />
    <Header
      primaryHeading={'A little about me.'}
      secondaryHeading={'Front-end Developer'}
      buttonText={'Download CV'}
      buttonRoute={'https://drive.google.com/file/d/1qkwftwFC4vzaYQ00fO0hA7lnmyIQcFqC/view'}
      buttonExternal={true}
    />
    <About />
  </Layout>
)

export default AboutPage;
