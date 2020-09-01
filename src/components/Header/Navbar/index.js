import React from 'react'
import NavLink from '../NavLink'
import Logout from '../../Logout'

const Navbar = ({links}) => {
    return(
        <ul className="desktop-nav">
            {links.map(link => <NavLink link={link} key={link.title}/>)}
            <li className="nav-item">
                <Logout/>
            </li>
        </ul>
    )
}

export default Navbar
