import React from "react";
import M from "materialize-css";
import { menu } from "../../utils/css";

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
    <div>
      <div className="carousel" style={menu.slider_container_style}>
        {images &&
          images.map((src) => (
              <a className="carousel-item" style={menu.slider_a_style}>
                <img src={src} style={menu.slider_img_style} alt={name} />
              </a>
          ))}
      </div>
    </div>
  );
}

export default Slider;
