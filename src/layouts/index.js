import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import Header from '../components/Header';
import Nav from '../components/Nav';
import './index.css';

const Content = styled.div`
  max-width: 1000px;
  margin: auto;
  padding: 100px 15px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Mackenzie Miller | Fullstack Web Developer"
      meta={[
        { name: 'description', content: 'Portfolio and blog for fullstack web developer located in Chicago Illinois' },
        { name: 'og:type', content='website'},
        { name: 'og:site_name', content='Mackenzie Miller | Fullstack Web Developer'},
        { name: 'twitter:site', content='@mackmmiller' },
        { name: 'keywords', content: 'web developer, frontend, backend, evanston' },
      ]}
    >
      <script
        defer
        src="https://use.fontawesome.com/releases/v5.0.9/js/all.js"
        integrity="sha384-8iPTk2s/jMVj81dnzb/iFR2sdA7u06vHJyyLlAd4snFpCl/SnyUjRrbdJsw1pGIl"
        crossorigin="anonymous"
      />
    </Helmet>
    <Header />
    <Content>{children()}</Content>
    <Nav />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper;
