import React from 'react'

const ProjectItem = ({project}) => {
    return(
        <a href={project.url} className="project-item">
                <div className="project-icon">
                </div>
                <section className="project-info">
                    <h3>{project.name}</h3>
                    <p>
                        {project.description}
                    </p>
                </section>
        </a>
    )
}

export default ProjectItem