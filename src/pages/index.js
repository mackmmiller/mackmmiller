import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

import Nav from '../components/Nav';
import photo from '../images/brad-knight-569319-unsplash.jpg';

const Tagline = styled.h1`
  color: #e1483d;
  text-align: center;
  font-size: 6.25vw;
`

const Wrapper = styled.div`
  margin: auto;
  max-width: 960px;
`

const IndexPage = () => (
  <Wrapper>
    <Tagline>I'm not sure what my tagline should be.</Tagline>
  </Wrapper>
)

export default IndexPage
