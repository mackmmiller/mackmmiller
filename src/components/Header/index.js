import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 0 32px;
  padding: 32px 0;
`;

const Home = styled.h1`
  font-family: 'Lato', sans-serif;
  font-size: 13px;
  font-weight: 900;
  letter-spacing: 1px;
  > a {
    color: #222222;
    text-decoration: none;
  }
`;

const Header = () => (
  <Wrapper>
      <Home>
        <Link to="/">
          MACKENZIE MILLER
        </Link>
      </Home>
  </Wrapper>
)

export default Header
