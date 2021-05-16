import React from 'react'

function Card({name, color, children}) {
    return (
        <div class="col s12 m7">
        <h2 class={`header center ${color}-text text-accent-4`}>{name}</h2>
        <div class="card horizontal">
            {children}
            </div>
            </div>
    )
}

export default Card
