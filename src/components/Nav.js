import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

const Wrapper = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100px;
  background: #ffffff;
  z-index: 1;
  margin: 0 auto;
  font-family: 'Lato', sans-serif;
  font-weight: 900;
  font-size: 13px;
  display: flex;
  justify-content: space-around;
  letter-spacing: 1px;
  padding: 32px;
  > a {
    padding: 10px;
    text-decoration: none;
    color: #222222;
    &:hover {
      text-decoration: line-through;
    }
  }
`

const Nav = () => (
  <Wrapper>
      <Link to="/blog">BLOG</Link>
      <Link to="/code">CODE</Link>
      <Link to="/about">ABOUT</Link>
      <Link to="/contact">CONTACT</Link>
  </Wrapper>
);

export default Nav;
