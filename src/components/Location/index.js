import React from 'react'
import dataLayer from '../../dataLayer';
import Information from './Information'

function Location({currentPage, setCurrentPage}) {
    React.useEffect(()=> {
        dataLayer({eventCategory: "location", eventAction: "pageView", eventLabel: currentPage});
        setCurrentPage("menu");
      },[])
    return (
        <div className="container grey lighten-2 animate__animated animate__fadeIn">
            <Information/>
        </div>
    )
}

export default Location
