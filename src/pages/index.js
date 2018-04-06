import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: auto;
  max-width: 960px;
  > h1 {
    color: #e1483d;
    text-align: center;
    font-size: 6.25vw;
    margin: 0;
  }
`

const IndexPage = () => (
  <Wrapper>
    <h1>I'm not sure what my tagline should be.</h1>
  </Wrapper>
)

export default IndexPage
