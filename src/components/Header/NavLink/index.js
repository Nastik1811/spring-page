
import React from 'react'

const Dropdown = ({links}) => {
    return(
        <div className="drop-menu">
            {
                links.map(
                    link => 
                    <div className="sublink" key={link.title}>
                        <a href={link.url} className="nav-link">
                            {link.title}
                        </a>
                    </div>
                    )
                }
        </div>
    )
}

const NavLink = ({link}) => {
    if(link.sublinks){ 
        return(
            <li className="nav-item">
                <span>
                    {link.title}
                    <div className="drop-arrow"></div>
                </span>
                <Dropdown links={link.sublinks}/>
            </li>
        )
    }
    return(
        <li className="nav-item">
            <a className="nav-link" href={link.url} >
                {link.title}
            </a>
        </li>
    )
}

export default NavLink