import React from 'react';
import logo from '../../assets/images/spring-logo.svg';
import navLinks from '../../data/navLinks';
import NavLink from './NavLink';

const Header = () => {
  return (
    <header className="main-header">
        <div className="nav-container">
            <a href="/" id="logo-focus" tabindex="1">
                <img alt="Spring" class="block" id="springlogo" src={logo}/>
            </a>
            <nav className="main-nav">
                <ul className="nav-links">
                    {navLinks.map(link => <NavLink link={link}/>)}
                </ul>
            </nav>
        </div>
    </header>
  );
}
export default Header