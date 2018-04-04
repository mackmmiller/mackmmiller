import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
  padding-bottom: 12px;
  display: flex;
  justify-content: space-between;
  h4 {
    margin: 0;
  }
  .code {
    display: flex;
    flex-direction: column;
    line-height: 20px;
  }
`;

const Article = styled.article`
  padding: 1rem 0;
  hr {
    margin: 10px 0;
  }
`;

const renderTech = (str, i) => {
  if (i > 0) return (<span key={i}>, {str}</span>);
  return <span key={i}>{str}</span>;
}

const Project = ({ project }) => (
  <Article>
    <Header>
      <div>
        <h4>{project.title}</h4>
        <span>{project.technologiesUsed.map(renderTech)}</span>
      </div>
      <div className="code">
        <a href={project.liveUrl}>Live Deployment</a>
        <a href={project.sourceCode}>Source Code</a>
      </div>
    </Header>
    <div
      dangerouslySetInnerHTML={{
        __html: project.description.childMarkdownRemark.html,
      }}
    />
  </Article>
)

export default Project;
