import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

import Nav from '../components/Nav';

const Tagline = styled.h1`
  color: #e1483d;
  font-family: 'Raleway', sans-serif;
  text-align: center;
  font-size: 6.25vw;
`;

const IndexPage = () => (
  <div>
    <Tagline>I'm not sure what my tagline should be.</Tagline>
  </div>
)

export default IndexPage
