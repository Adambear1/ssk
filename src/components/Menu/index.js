import React from 'react'
import Card from '../Card'
import Container from './Container'

function Menu() {
    return (
        <div className="container grey lighten-2">
            <Card name="Menu" color="yellow" accent={false}>
                <Container/>
            </Card>
        </div>
    )
}

export default Menu
