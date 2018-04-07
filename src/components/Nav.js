import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

const Wrapper = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: #ffffff;
  z-index: 1;
  font-family: system-ui;
  font-weight: 900;
  font-size: 13px;
  display: flex;
  justify-content: space-around;
  letter-spacing: 1px;
  > a {
    padding-bottom: 1rem;
    text-decoration: none;
    color: #222222;
    &::after {
      content: '>';
      visibility: hidden;
    }
    &::before {
      content: '<';
      visibility: hidden;
    }
    &:hover {
      &::before, &::after {
        visibility: visible;
      }
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
