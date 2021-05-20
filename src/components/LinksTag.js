import React from 'react'

function LinksTag({link, msg}) {
    return (
        <a className="animate__animated animate__fadeIn" href={link} target="_blank" rel="noreferrer" style={{color: "blue"}}>{msg}</a>
    )
}

export default LinksTag
