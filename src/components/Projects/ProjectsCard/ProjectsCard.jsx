import React from 'react'
import './ProjectsCard.css'

const ProjectsCard = ({project}) => {
  return (
    <div className="project-card">
      <h6>{project.title}</h6>

      <div className="project-content"></div>
      <h5>
        <a href={project.link} >
          {project.link}
        </a>
      </h5>
    </div>
  )
}

export default ProjectsCard