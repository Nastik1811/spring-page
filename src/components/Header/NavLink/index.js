
import React from 'react'

const NavLink = ({link}) => {
    if(link.sublinks){ 
        return(
            <li className="dropdown">
                <a href={link.url} className="nav-link">
                    {link.title}
                    <div className="drop-arrow"></div>
                </a>
                <div className="drop-menu">
                    <ul className="sublinks">
                        {
                            link.sublinks.map(
                            subl => 
                                <li>
                                    <a href="#" className="nav-link sublink">
                                        {subl.title}
                                    </a>
                                </li>
                            )
                        }
                </ul>
                </div>
                
            </li>
        )
    }
    return(
        <li>
            <a href={link.url} className="nav-link">
                {link.title}
            </a>
        </li>
    )
}

export default NavLink