import React from 'react'

const IconButton = ({className, onClick}) => {
    return <button className={"icon-btn " + className} onClick={onClick}></button>
}