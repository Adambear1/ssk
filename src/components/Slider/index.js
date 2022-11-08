import React from "react";

function Slider({ display, children }) {
  return (
    <div>
      {
        <div
          style={slider_style}
          className={`"animate__animated animate__fadeIn slider-container" ${
            display
              ? "transition-container-top grey lighten-2 slider-container"
              : "transition-container-bottom grey lighten-2 slider-container"
          }`}
        >
          {children}
        </div>
      }
    </div>
  );
}

const {slider_style} = {
  slider_style: {
    height: "91vh",
    maxHeight: "100%",
    position: "absolute",
    zIndex: 100,
    left: 0,
    width: "100%",
    opacity: "100%",
  },
};




export default Slider;
