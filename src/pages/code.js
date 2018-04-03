import React from 'react'
import styled from 'styled-components';

import Project from '../components/Code/Project';
import Demo from '../components/Code/Demo';

const Header = styled.header`
  margin: 0 auto 32px auto;
  text-align: center;
  h2 {
    margin-bottom: 5px;
  }
`

const Code = ({ data }) => (
  <div>
    <Header>
      <h2>Code</h2>
      <span>See my work and what I'm experimenting with</span>
    </Header>
    <div>
      <h3>Projects</h3>
      {data.allContentfulProject.edges.map(({ node }) => (
        <Project key={node.id} project={node} />
      ))}
    </div>
    <div>
      <h3>Demos</h3>
      {data.allContentfulDemo.edges.map(({ node }) => (
        <Demo key={node.id} demo={node} />
      ))}
    </div>
  </div>
)

export default Code;

export const query = graphql`
  query Projects {
    allContentfulProject {
      edges {
        node {
          title
          subtitle
          liveUrl
          sourceCode
          technologiesUsed
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
    allContentfulDemo {
      edges {
        node {
          title
          description
          technologiesUsed
          description
        }
      }
    }
  }
`