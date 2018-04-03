import React from 'react';
import styled from 'styled-components';

import PostListing from '../components/Posts/PostListing';

const Header = styled.header`
  margin: 0 auto 32px auto;
  text-align: center;
  h2 {
    margin-bottom: 5px;
  }
`;

const Blog = ({ data }) => (
  <div>
    <Header>
      <h2>Blog</h2>
      <span>Where I write neat stuff about learning to code</span>
    </Header>
    <div>
      {data.allContentfulBlogPost.edges.map(({ node }) => (
        <PostListing key={node.id} post={node} />
      ))}
    </div>
  </div>
)

export default Blog;

export const query = graphql`
  query BlogPosts {
    allContentfulBlogPost {
      edges {
        node {
          title
          body {
            childMarkdownRemark {
              excerpt
            }
          }
          createdAt(formatString: "MMMM DD, YYYY")
          slug
          id
        }
      }
    }
  }
`