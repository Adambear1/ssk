import React from 'react'
import dataLayer from '../../dataLayer'
import Card from '../Card'
import Container from './Container'

function Menu({currentPage, setCurrentPage}) {
    React.useEffect(()=> {
        dataLayer({eventCategory: "menu", eventAction: "pageView", eventLabel: currentPage});
        setCurrentPage("menu");
      },[])
    return (
        <div className="container grey lighten-2 animate__animated animate__fadeIn">
            <Card name="Menu" color="yellow" accent={false}>
                <Container/>
            </Card>
        </div>
    )
}

export default Menu
