import React  from "react";
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import image_one from "../assets/slide_1.jpg"
import image_two  from "../assets/slide_2.jpg"
import { slideShow } from "../utils/css";

function SlideShow({children}) {
  return (
    <div
      class="slide-container animate__animated animate__fadeIn"
      style={slideShow.slideShow_container}
    >
        {children}
      <Fade>
        <div class="each-fade animate__animated animate__fadeIn">
          <div className="image-container" style={slideShow.slideShow_image_container}>
            <img src={image_one} style={slideShow.slideShow_image} alt="Best BBQ in Tacoma!"/>
          </div>
        </div>
        <div class="each-fade animate__animated animate__fadeIn">
          <div className="image-slideShow.slideShow_image_container" style={slideShow.slideShow_image_container}>
            <img src={image_two} style={slideShow.slideShow_image} alt="#SSK"/>
          </div>
        </div>
      </Fade>
    </div>
  );
}

export default SlideShow;
