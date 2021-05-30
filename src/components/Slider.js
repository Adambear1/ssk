import React from "react";
import { slider } from "../utils/css";

function Slider({ display, children }) {
  return (
    <div>
      {
        <div
          style={slider.slider_style}
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

export default Slider;
