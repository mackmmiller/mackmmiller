import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: #ffffff;
  position: fixed;
  display: flex;
  align-content: center;
  right: 0;
  left: 0;
  top: 0;
  z-index: 1;
  /* box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.3); */
`;

const Home = styled.h1`
  font-size: 13px;
  font-weight: 900;
  letter-spacing: 1px;
  margin: 0;
  padding: 24px;
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
