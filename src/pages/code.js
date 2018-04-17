import React from 'react'
import styled from 'styled-components';

import Project from '../components/Code/Project';
import Demo from '../components/Code/Demo';
import Label from '../components/Label';

const Section = styled.section`
  >div {
    padding: 1rem;
  }
`;

const Code = ({ data }) => (
  <div>
    <Label>
      <h2>Code</h2>
      <span>My work and what I'm experimenting with.</span>
    </Label>
    <Section>
      <h3>Projects</h3>
      <div>
        {data.allContentfulProject.edges.map(({ node }) => (
          <Project key={node.id} project={node} />
        ))}
      </div>
    </Section>
    <Section>
      <h3>Demos</h3>
      <div>
        {data.allContentfulDemo.edges.map(({ node }) => (
          <Demo key={node.id} demo={node} />
        ))}
      </div>
    </Section>
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
                 id
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
                 source {
                   childMarkdownRemark {
                     html
                   }
                 }
                 id
               }
             }
           }
         }
       `