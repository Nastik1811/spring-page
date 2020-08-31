import React from 'react'

const Input = ({value, onChange, label, type}) => {
    return(
        <label > 
            {/* <div className="input-label">{label}</div> */}
            <input type={type} value={value} onChange={e => onChange(e.target.value)} className="input" placeholder={label}/>
        </label>
    )
}

export default Input