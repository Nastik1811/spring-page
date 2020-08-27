import React from 'react'
import MenuLink from '../MenuLink';

const Sidepane = ({links, expaned, onClose}) => {
    return(
        <div className={expaned ? "overlay expaned" : "overlay"}>
            <button className="icon-btn close-btn" onClick={onClose}></button>
            <nav className="nav-box">
                {links.map(link => <MenuLink link={link}/>)}
            </nav>
        </div>
    )
}

export default Sidepane;