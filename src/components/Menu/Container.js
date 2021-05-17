import React from 'react'
import chicken from "../../assets/chicken.jpg"
import links from "../../assets/links.png"
import Item from './Item'
function Container() {
    const items = [
        {
            src: chicken,
            name: "Half Chicken",
            desc: "Slow smoked half chicken. Marinated in our secret mix + smoked for 48 hours. Nice and tender, cooked to perfection."
        },
        {
            src: links,
            name: "Pork Links",
            desc: "Grilled pork links on the open fire. No sauce needed. Cooked to a fine outer crisp, nice and juicy inside. Customer favorite!"
        }
    ]
    return (
        <div class="container">
            {
                items.map(({src, name, desc})=>(
                    <Item src={src} name={name} desc={desc}/>
                ))
            }
        </div>
    )
}

export default Container
