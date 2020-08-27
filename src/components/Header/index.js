import React, { useState } from 'react';
import logo from '../../assets/images/spring-logo.svg';
import navLinks from '../../data/navLinks';
import './index.css';
import Navbar from './Navbar';
import Sidepane from './Sidepane'

const Header = () => {
    const [mobileExpaned, setMobileExpaned] = useState(false)
    
    return(
         <header className="app-header">
            <nav className="nav-container">
                <a href="/">
                    <img alt="Spring" id="springlogo" src={logo}/>
                </a>
                <Navbar links={navLinks}/>
                <button className="icon-btn open-btn" onClick={() => setMobileExpaned(true)}></button>
            </nav>
           <Sidepane links={navLinks} expaned={mobileExpaned} onClose={() => setMobileExpaned(false)}/>
        </header>
    )
}
export default Header