import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: auto;
  max-width: 960px;
  > h2 {
    color: #e1483d;
    text-align: center;
    font-size: 6.25vw;
    margin: 0;
  }
  > h3 {
    font-weight: lighter;
    margin: 0;
    text-align: center;
  }
`

const IndexPage = () => (
  <Wrapper>
    <h2>Mackenzie Miller</h2>
    <h3>Fullstack Web Development.</h3>
  </Wrapper>
)

export default IndexPage
