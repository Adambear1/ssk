import React from 'react'
import Card from './Card'

function Contact({styles}) {
    const social_media = [
        {
            name: "Facebook",
            link: "",
            button: `<a class="waves-effect center waves-light btn-large social facebook blue">
            <i class="fa fa-facebook center"></i> Follow Us On Facebook</a>`,
            screenshot: ""
        }
    ]
    return (
        <div className="container grey lighten-2">
            {social_media.map(({name, link, button, screenshot})=>(
                <Card name={name} link={link} button ={button} screenshot={screenshot}/>
            ))}
        </div>
    )
}

export default Contact
