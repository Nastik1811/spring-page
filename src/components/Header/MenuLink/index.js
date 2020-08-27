import React, { useState } from 'react'

const Submenu = ({links, expaned}) => {
    return(
        <div className={expaned ? "submenu expaned" : "submenu"}>
                {links.map(l =>
                    <div className="sub-item">
                        <a href={l.url} >
                            {l.title}
                        </a>
                    </div>
                )}
        </div>
    )
}

const MenuLink = ({link}) => {
    const [expaned, setExpaned] = useState(false)

    if(link.sublinks){
        return(
            <div className="container">
                <div className="menu-item" onClick={() => setExpaned(!expaned)}>
                    <span >
                        {link.title}
                    </span>
                    <div className={expaned ? "drop-arrow expaned" : "drop-arrow"}></div>
                </div>
                <Submenu links={link.sublinks} expaned={expaned}/>
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

export default MenuLink