import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
  h4 {
    margin: 0;
  }
  margin-bottom: 1rem;
`;

const Body = styled.div`
  .description {
    margin-bottom: 1rem;
  }
`;

const renderTech = (str, i) => {
  if (i > 0) return <span key={i}>, {str}</span>
  return <span key={i}>{str}</span>
}

const Project = ({ demo }) => {
  return <article>
      <Header>
        <h4>{demo.title}</h4>
        <span>{demo.technologiesUsed.map(renderTech)}</span>
      </Header>
      <Body>
        <div className="description">{demo.description}</div>
        <div dangerouslySetInnerHTML={{ __html: demo.source.childMarkdownRemark.html }} />
      </Body>
    </article>
}

export default Project;