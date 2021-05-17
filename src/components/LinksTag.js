import React from 'react'

function LinksTag({link, msg}) {
    return (
        <a href={link} target="_blank" rel="noreferrer" style={{color: "blue"}}>{msg}</a>
    )
}

export default LinksTag
