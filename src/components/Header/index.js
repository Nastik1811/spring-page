import React, { useState } from 'react';
import logo from '../../assets/images/spring-logo.svg';
import navLinks from '../../data/navLinks';
import NavLink, { Sidepane } from './NavLink';
import './index.css';



const Navbar = ({links}) => {
    return(
        <ul className="desktop-nav">
            {links.map(link => <NavLink link={link} key={link.title}/>)}
        </ul>
    )
}
const Header = () => {
    const [mobileExpaned, setMobileExpaned] = useState(false)
    
    return(
         <header className="app-header">
            <nav className="nav-container">
                <a href="/">
                    <img alt="Spring" id="springlogo" src={logo}/>
                </a>
                <Navbar links={navLinks}/>
                <button className="open-btn" onClick={() => setMobileExpaned(true)}></button>
            </nav>
           <Sidepane links={navLinks} expaned={mobileExpaned} onClose={() => setMobileExpaned(false)}/>
        </header>
    )
}
export default Header