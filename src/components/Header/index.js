import React from 'react';
import logo from '../../assets/images/spring-logo.svg';
import navLinks from '../../data/navLinks';

const Header = () => {
  return (
    <header className="main-header">
    <a href="/" id="logo-focus" tabindex="1">
        <img alt="Spring" class="block" id="springlogo" src={logo}/>
    </a>
    <nav>
        <ul className="nav-links">
            {navLinks.map(link => 
                <li className="nav-link">
                    <a href={link.url}>
                        {link.title}
                    </a>
                </li>
            )}
        </ul>
    </nav>
    </header>
  );
}
export default Header