import React from 'react';
import styled from 'styled-components';

import PostListing from '../components/Posts/PostListing';
import Label from '../components/Label';

const Blog = ({ data }) => (
  <div>
    <Label>
      <h2>Blog</h2>
      <span>Where I write neat stuff about learning to code</span>
    </Label>
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