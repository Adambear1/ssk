import React from "react";
import M from "materialize-css";
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
      <div className="carousel menu-modal-carousel" style={slider_container_style}>
        {images &&
          images.map((src, index) => (
              <a 
              key={index}
              className="carousel-item" style={slider_a_style} 
              onMouseDown={() => dataLayer("interaction", {category: "menu", action: "foodCard", label: "swipe", misc: name})}
              >
                <img src={src} style={slider_img_style} alt={name} />
              </a>
          ))}
      </div>
  );
}

const {slider_container_style, slider_a_style, slider_img_style} = {
  slider_img_style: {
    minWidth: "225px",
    minHeight: "225px",
    maxHeight: "250px",
    maxWidth: "250px",
    display: "flex",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
    objectFit: "center",
    borderRadius: "10px",
    border: ".5px solid white",
    left: 0,
    right: 0,
    padding: 0,
    margin: 0,
  },
  slider_a_style: {
    right: 0,
    left: 0,
    padding: 0,
    margin: 0,
  },
  slider_span_style: {
    backgroundColor: "rgba(0,0,0,.6)",
    height: "auto",
    width: "auto",
    borderTopRightRadius: "12px",
  },
  slider_container_style: {
    top: "-25px",
    maxWidth: "auto",
    maxHeight: "300px",
    right: 0,
    left: 0,
    padding: 0,
    margin: 0,
  }
}

export default Slider;
