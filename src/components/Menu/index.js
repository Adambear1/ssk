import React from 'react'
import Card from '../Card'
import Container from './Container'

function Menu() {
    return (
        <div className="container grey lighten-2 animate__animated animate__fadeIn">
            <Card name="Menu" color="yellow" accent={false}>
                <Container/>
            </Card>
        </div>
    )
}

export default Menu
