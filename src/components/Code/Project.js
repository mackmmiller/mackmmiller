import React from 'react';

const Project = ({ project }) => {
  return (
    <article>
      <h4>{project.title}</h4>
      <div dangerouslySetInnerHTML={{ __html: project.description.childMarkdownRemark.html }} />
    </article>
  )
}

export default Project
