import React from 'react'
import dataLayer from '../dataLayer'

function LinksTag({link, msg, category}) {

    return (
        <a className="animate__animated animate__fadeIn" href={link} target="_blank" rel="noreferrer" style={{color: "blue"}} onClick={()=>{
            dataLayer({eventCategory: category, eventAction: "linkClicked", eventLabel: msg})
        }}>{msg}</a>
    )
}

export default LinksTag
