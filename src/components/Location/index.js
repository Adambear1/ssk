import React from 'react'
import Information from './Information'

export default function Location({currentPage, setCurrentPage}) {
    React.useEffect(()=> {
        setCurrentPage("menu");
      },[])
    return (
        <div className="container grey lighten-2 animate__animated animate__fadeIn">
            <Information/>
        </div>
    )
}
