import React from 'react'
import Information from './Information';

function Catering({currentPage, setCurrentPage}) {
  React.useEffect(()=> {
    setCurrentPage("contact");
  },[])
 
  return (
    <div className="container grey lighten-2 animate__animated animate__fadeIn">
      <Information />
    </div>
  );
}


export default Catering