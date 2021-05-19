import React from "react";
import { loader } from "../utils/css";

function Loader() {
  return (
    <div className="loader" style={loader.loader_logo}>
      <h2 class="animate" style={loader.loader_animate}>#SEVENSONSKITCHEN</h2>
    </div>
  );
}

export default Loader;
