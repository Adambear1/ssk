import React, { useEffect } from "react";
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import image_one from "../assets/slide_1.jpg"
import image_two  from "../assets/slide_2.jpg"

function SlideShow({children}) {
    const container = {
        zIndex: -10,
    }
  const image = {
    width: "100%",
    height: "78.9vh",
    opacity: "60%"
  };
  return (
    <div
      class="slide-container"
      style={{
        position: "absolute",
        width: "100%",
        margin: "auto",
        height: "500px",
      }}
    >
        {children}
      <Fade>
        <div class="each-fade">
          <div className="image-container" style={container}>
            <img src={image_one} style={image} alt="Best BBQ in Tacoma!"/>
          </div>
        </div>
        <div class="each-fade">
          <div className="image-container" style={container}>
            <img src={image_two} style={image} alt="#SSK"/>
          </div>
        </div>
      </Fade>
    </div>
  );
}

export default SlideShow;
