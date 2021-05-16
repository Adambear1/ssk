import React from "react";
import logo from "../assets/logo.png";
import SlideShow from "./SlideShow";
function BulletinBoard() {
  return (
    <div
      className="grey lighten-2 center"
      style={{ width: "100%", height: "80vh" }}
    >
        <SlideShow/>
      <img
        src={logo}
        style={{ width: "72.5%", height: "500px", zIndex: 10 }}
        alt="Company Logo"
        title="Seven Son's Kitchen!"
      />
    </div>
  );
}

export default BulletinBoard;
