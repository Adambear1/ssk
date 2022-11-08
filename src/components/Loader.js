import React from "react";

function Loader() {
  const text = window.screen.width > 750 ? "#SEVENSONSKITCHEN" : "#SSK"
  return (
    <div className="loader animate__animated animate__fadeIn" style={loader_logo}>
      <h2 className="animate" style={loader_animate}>{text}</h2>
    </div>
  );
}

const {loader_animate, loader_logo} = {
  loader_logo: {
    // display: "flex",
    // flex: "center",
    // flexDirection: "center",
    // alignItems: "center",
    // justifyContent: "center",
    // height: "auto",
    // margin: "auto"
  },
  loader_animate: {
    // display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // height: "100%",
    // margin: "auto",
    // flex: "center",
    // flexDirection: "center",
    // alignItems: "center",
    // justifyContent: "center",
    // height: "auto",
    // margin: "auto",
    fontFamily: "Helvetica, sans-serif, Arial",
    animation: "load 1.2s infinite 0s ease-in-out",
    animationDirection: "alternate",
    textShadow: "0 0 1px white",
  },
};

export default Loader;
