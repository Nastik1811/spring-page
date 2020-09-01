import React, { useState, useMemo } from 'react';
import projects from '../../data/projects';
import ProjectItem from './ProjectItem';
import Hero from '../../components/Hero';
import SearchBar from '../../components/Searchbar';
import Message from '../../components/Message';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

const Projects = () => {
  const [searchValue, setSearchValue] = useState("")
  const filteredItems = useMemo(() =>  projects.filter(p => p.name.toLowerCase().includes(searchValue.toLowerCase())), [searchValue])

  const isAuthorized = useSelector(state => state.isAuthorized)
  
  if(!isAuthorized){
    return(
      <Redirect to="/login" />
    )
  }
  
  return (
    <div className="main-container">
      <Hero 
        title="Projects" 
        text="From configuration to security, web apps to big data—whatever the infrastructure needs of your application may be, there is a Spring Project to help you build it. Start small and use just what you need—Spring is modular by design."
        />
      <div className="content">
        <div className="search-container">
          <SearchBar value={searchValue} onChange={setSearchValue} />
        </div>
        <div className="projects-list">
          {filteredItems.map(p => <ProjectItem project={p} key={p.name}/>)}
        </div>
        {filteredItems.length === 0 && <Message text="No results :("/>}
      </div>
    </div>
  );
}
export default Projects