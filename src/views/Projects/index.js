import React, { useState } from 'react';
import projects from '../../data/projects';
import ProjectItem from './ProjectItem';
import Hero from '../../components/Hero';

const SearchBar = ({value, onChange}) => {
  return(
    <div className="searchbar">
      <div className="input-container">
        <input value={value} onChange={e => onChange(e.target.value)}/>
      </div>
    </div>
  )
}

const Projects = () => {
  const [filter, setFilter] = useState("")

  return (
    <div className="main-container">
      <Hero 
        title="Projects" 
        text="From configuration to security, web apps to big data—whatever the infrastructure needs of your application may be, there is a Spring Project to help you build it. Start small and use just what you need—Spring is modular by design."
        />
      <div className="content">
        <SearchBar value={filter} onChange={setFilter} />
        <div className="projects-list">
          {projects.filter(p => p.name.toLowerCase().includes(filter.toLowerCase())).map(p => <ProjectItem project={p}/>)}
        </div>
      </div>
    </div>
  );
}
export default Projects