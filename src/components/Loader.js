import React from "react";
import dataLayer from "../dataLayer";
import { loader } from "../utils/css";
import "../utils/general-css.css"

function Loader() {
  React.useEffect(()=> {
    dataLayer({eventCategory: "loading", eventAction: "pageView", eventLabel: "-"})
  },[])
  return (
    <div className="loader animate__animated animate__fadeIn" style={loader.loader_logo}>
      <h2 class="animate" style={loader.loader_animate}>#SEVENSONSKITCHEN</h2>
    </div>
  );
}

export default Loader;
