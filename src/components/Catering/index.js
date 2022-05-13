import React from 'react'
import dataLayer from '../../dataLayer';
import Information from './Information';

function Catering({currentPage, setCurrentPage}) {
  React.useEffect(()=> {
    dataLayer({eventCategory: "contact", eventAction: "pageView", eventLabel: currentPage});
    setCurrentPage("contact");
  },[])
 
  return (
    <div className="container grey lighten-2 animate__animated animate__fadeIn">
      <Information />
    </div>
  );
}


export default Catering