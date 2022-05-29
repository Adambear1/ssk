import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import image_one from "../../assets/meats_vegges.jpg";
import image_two from "../../assets/chicken6.jpg";
import image_three from "../../assets/burnttips1.jpg";
import image_four from "../../assets/ribs3.jpg";
import image_five from "../../assets/slider1.jpg";
import image_six from "../../assets/side-min.png";
import { slideShow } from "../../utils/css";

const images = [image_one, image_two, image_three, image_four, image_five, image_six];

function SlideShow({ children }) {
  return (
    <div
      className="slide-container animate__animated animate__fadeIn"
      style={slideShow.slideShow_container}
    >
      {children}
      <Fade>
        {images.map((src, index) => (
          <div className="each-fade animate__animated animate__fadeIn" key={index}>
            <div
              className="image-slideShow.slideShow_image_container "
              style={slideShow.slideShow_image_container}
            >
              <img src={src} style={slideShow.slideShow_image} alt="#SSK" />
            </div>
          </div>
        ))}
      </Fade>
    </div>
  );
}

export default SlideShow;