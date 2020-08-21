import React from 'react';
import projects from '../../data/projects';

const Projects = () => {
  return (
    <div className="main-container">
      <section className="hero">
        <h1 className="hero-title">Projects</h1>
        <p className="hero-text"> 
          From configuration to security, web apps to big data—whatever the infrastructure needs of your application may be, there is a Spring Project to help you build it. Start small and use just what you need—Spring is modular by design.
        </p>
      </section>
      <div className="content">
        <div className="projects-list">
          {projects.map(p => <div>{p.name}</div>)}
        </div>
      </div>
    </div>
  );
}
export default Projects