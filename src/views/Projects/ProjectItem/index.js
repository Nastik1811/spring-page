import React from 'react'
import icon from '../../../assets/images/spring-boot.svg';

const ProjectItem = ({project}) => {
    return(
        <a href={project.url} className="project-item">
                <div className="project-icon">
                    <img className="icon" src={icon} alt="icon" />
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