import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components'

const Article = styled.article`
  h3 {
    display: inline-block;
    padding-right: 32px;
  }
`;

const PostListing = ({ post }) => (
  <Article>
    <div>
      <h3>
        <Link to={`/blog/${post.slug}`}>{post.title}</Link>
      </h3>
      <span>{post.createdAt}</span>
    </div>
    <p>{post.body.childMarkdownRemark.excerpt}</p>
  </Article>
)

export default PostListing
