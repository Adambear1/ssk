import React from "react";
import M from "materialize-css";
import { menu } from "../../utils/css";
import dataLayer from "../../dataLayer";

function Slider({ images, name }) {
  React.useEffect(() => {
    var elems = document.querySelectorAll(".carousel");
    var instances = M.Carousel.init(elems, {
      draggable: true,
      height: 600,
      width: 600,
    });
  }, []);
  return (
      <div className="carousel menu-modal-carousel" style={menu.slider_container_style}>
        {images &&
          images.map((src, index) => (
              <a 
              key={index}
              className="carousel-item" style={menu.slider_a_style} 
              onMouseDown={() => dataLayer({eventCategory: "menu", eventAction: "foodCard", eventLabel: "swipe" + " | " + name})}
              >
                <img src={src} style={menu.slider_img_style} alt={name} />
              </a>
          ))}
      </div>
  );
}

export default Slider;
