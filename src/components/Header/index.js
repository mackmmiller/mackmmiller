import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: #ffffff;
  padding: 32px;
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  height: 100px;
  z-index: 1;
`

const Home = styled.h1`
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
