import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import image_one from "../assets/slide_1.jpg";
import image_two from "../assets/slide_2.jpg";
import image_three from "../assets/burnt_tips.jpg";
import image_four from "../assets/meats_vegges.jpg";
import image_five from "../assets/meat_example.jpg";
import { slideShow } from "../utils/css";

const images = [image_one, image_two, image_three, image_four, image_five];

function SlideShow({ children }) {
  return (
    <div
      class="slide-container animate__animated animate__fadeIn"
      style={slideShow.slideShow_container}
    >
      {children}
      <Fade>
        {images.map((src) => (
          <div class="each-fade animate__animated animate__fadeIn">
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
