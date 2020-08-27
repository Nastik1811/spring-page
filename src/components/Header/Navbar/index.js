import React from 'react'
import NavLink from '../NavLink'

const Navbar = ({links}) => {
    return(
        <ul className="desktop-nav">
            {links.map(link => <NavLink link={link} key={link.title}/>)}
        </ul>
    )
}

export default Navbar
