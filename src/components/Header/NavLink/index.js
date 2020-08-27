
import React, { useState } from 'react'

const Dropdown = ({links}) => {
    return(
        <div className="drop-menu">
            {
                links.map(
                    link => 
                    <div className="sublink">
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

export const Sidepane = ({links, expaned, onClose}) => {
    return(
        <div className={expaned ? "overlay expaned" : "overlay"}>
            <button className="icon-btn close-btn" onClick={onClose}></button>
            <nav className="nav-box">
                {links.map(link => <MenuLink link={link}/>)}
            </nav>
        </div>
    )
}

const MenuLink = ({link}) => {
    const [open, setOpen] = useState(false)

    if(link.sublinks){
        return(
            <div className="container">
                <div className="menu-item" onClick={() => setOpen(!open)}>
                    <span >
                        {link.title}
                    </span>
                    <div className={open ? "drop-arrow expaned" : "drop-arrow"}></div>
                </div>
                <div className={open ? "submenu expaned" : "submenu"}>
                        {link.sublinks.map(l =>
                            <div className="sub-item">
                                <a href={l.url} >
                                    {l.title}
                                </a>
                            </div>
                        )}
                </div>
            </div>
        )
    }

    return(
        <div className="menu-item">
            <a href={link.url} >
                {link.title}
            </a>
        </div>
    )

}



export default NavLink