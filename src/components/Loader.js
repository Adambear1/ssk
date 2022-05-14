import React from "react";
import { loader } from "../utils/css";
import "../utils/general-css.css"

function Loader() {
  const text = window.screen.width > 750 ? "#SEVENSONSKITCHEN" : "#SSK"
  return (
    <div className="loader animate__animated animate__fadeIn" style={loader.loader_logo}>
      <h2 className="animate" style={loader.loader_animate}>{text}</h2>
    </div>
  );
}

export default Loader;
