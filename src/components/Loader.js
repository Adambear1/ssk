import React from "react";
import { loader } from "../utils/css";
import "../utils/general-css.css"

function Loader() {
  return (
    <div className="loader animate__animated animate__fadeIn" style={loader.loader_logo}>
      <h2 class="animate" style={loader.loader_animate}>#SEVENSONSKITCHEN</h2>
    </div>
  );
}

export default Loader;
