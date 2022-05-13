import React from 'react';
import {staticDisplay, slideShow}  from "../../utils/css";


function Static({children}) {
  return (
    <div className={staticDisplay} style={slideShow.slideShow_container}>{children}</div>
  )
}

export default Static