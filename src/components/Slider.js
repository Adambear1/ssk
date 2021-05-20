import React from "react";
import { slider } from "../utils/css";

function Slider({ display, children }) {
  return (
    <>
      {
        <div
          style={slider.slider_style}
          className={`"animate__animated animate__fadeIn" ${
            display
              ? "transition-container-top grey lighten-2"
              : "transition-container-bottom grey lighten-2"
          }`}
        >
          {children}
        </div>
      }
    </>
  );
}

export default Slider;
