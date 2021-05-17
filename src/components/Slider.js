import React from "react";

function Slider({ display, children }) {
  const contact_style = {
    height: "91vh",
    position: "absolute",
    zIndex: 100,
    left: 0,
    width: "100%",
    opacity: "100%",
  };
  return (
    <>
      {
        <div
          style={contact_style}
          className={`${
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
