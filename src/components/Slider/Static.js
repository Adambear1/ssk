import React from 'react';


export default function Static({children}) {
  return (
    <div className={staticDisplay} style={slideShow_container}>{children}</div>
  )
}

const {staticDisplay, slideShow_container} = {
  staticDisplay: {
    position: "absolute",
    width: "100%",
    margin: "auto",
    height: "80vh",
    backgroundColor: "lightgray"
  },
  slideShow_container: {
    position: "absolute",
    width: "100%",
    margin: "auto",
    height: "80vh",
  }
};