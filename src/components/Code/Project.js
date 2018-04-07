import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
  padding-bottom: 12px;
  display: flex;
  justify-content: space-between;
  h4 {
    margin: 0 0 4px 0;
  }
  .code {
    display: flex;
    flex-direction: column;
    line-height: 20px;
    > div {
      margin: 2px;
    }
  }
  .live,
  .source {
    padding: 5px;
    border-radius: 5px;
    color: #ffffff;
    > a {
      padding-left: 5px;
      text-decoration: none;
      color: #ffffff;
    }
  }
  .live {
    background: #69b578;
  }
  .source {
    background: #000000;
  }
`

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
        <div className="live">
          <a href={project.liveUrl} target="_blank">
            <i className="fas fa-link" />{' '}
            Live Deploy
          </a>
        </div>
        <div className="source">
          <a href={project.sourceCode} target="_blank">
            <i className="fab fa-github" />{' '}
            Source Code
          </a>
        </div>
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
