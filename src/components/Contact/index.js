import React from 'react'
import Card from './Card'

function Contact({styles}) {
    const social_media = [
        {
            name: "Facebook",
            link: "",
            button: `<a class="waves-effect center waves-light btn-large social facebook blue darken-4">
            <i class="fa fa-facebook center"></i>   Facebook</a>`,
            screenshot: ""
        },
        {
            name: "Instagram",
            link: "",
            button: `<a class="waves-effect center waves-light btn-large social instagram pink lighten-1">
            <i class="fa fa-instagram center"></i>  Instagram</a>`,
            screenshot: ""
        },
        {
            name: "LinkedIn",
            link: "",
            button: `<a class="waves-effect center waves-light btn-large social twitter blue lighten-3">
            <i class="fa fa-twitter center"></i>    Twitter</a>`,
            screenshot: ""
        },
        {
            name: "Twitter",
            link: "",
            button: `<a class="waves-effect center waves-light btn-large social linkedin blue">
            <i class="fa fa-linkedin center"></i>   LinkedIn</a>`,
            screenshot: ""
        },
        {
            name: "Snapchat",
            link: "",
            button: `<a class="waves-effect center waves-light btn-large social snapchat yellow accent-4">
            <i class="fa fa-snapchat center"></i>   LinkedIn</a>`,
            screenshot: ""
        }
    ]
    return (
        <div className="container grey lighten-2">
                <Card social_media={social_media}/>
        </div>
    )
}

export default Contact
