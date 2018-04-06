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
      title="Mackenzie Miller | Web Developer and Designer"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    <Content>{children()}</Content>
    <Nav />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper;
