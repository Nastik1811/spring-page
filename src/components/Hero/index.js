import React from 'react'

const Hero = ({title, text}) => {
    return(
        <section className="hero">
            <h1 className="hero-title">{title}</h1>
            <p className="hero-text"> 
                {text}
            </p>
        </section>
    )
}

export default Hero