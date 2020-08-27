import React from 'react'

const Message = ({text}) => {
    return(
        <div className="message-container">
            <span className="big-msg">{text}</span>
        </div>
    )
}

export default Message