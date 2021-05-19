import React from "react";
import M from "materialize-css";

function Slider({ images, name }) {
  React.useEffect(() => {
    var elems = document.querySelectorAll(".carousel");
    var instances = M.Carousel.init(elems, {
      draggable: true,
      height: 600,
      width: 600,
    });
  }, []);
  const img_style = {
    // width: "250px",
    // height: "250px",
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
    margin: 0
  };
  const a_style = {
    right: 0,
    left: 0,
    padding: 0,
    margin: 0
  }
  const span_style = {
    backgroundColor: "rgba(0,0,0,.6)",
    height: "auto",
    width: "auto",
    borderTopRightRadius: "12px",
  };
  const container_style = {
    top: "-25px",
    maxWidth: "auto",
    maxHeight: "300px",
    right: 0,
    left: 0,
    padding: 0,
    margin: 0
    // marginLeft: "auto",
    // marginRight: "auto",
    // width: "auto",
    // height: "auto",
  };
  return (
    <div>
      <div className="carousel" style={container_style}>
        {images &&
          images.map((src) => (
              <a className="carousel-item" style={a_style}>
                <img src={src} style={img_style} alt={name} />
              </a>
          ))}
      </div>
    </div>
  );
}

export default Slider;
