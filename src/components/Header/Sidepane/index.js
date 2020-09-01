import React from 'react'
import MenuLink from '../MenuLink';
import Logout from '../../Logout';

const Sidepane = ({links, expaned, onClose}) => {
    return(
        <div className={expaned ? "overlay expaned" : "overlay"}>
            <button className="icon-btn close-btn" onClick={onClose}></button>
            <nav className="nav-box">
                {links.map(link => <MenuLink link={link} key={link.title}/>)}
                
                <Logout/>
            </nav>
        </div>
    )
}

export default Sidepane;