import React, { useState } from "react";
import logo from "../assets/logo.png";
import SlideShow from "./SlideShow";
function BulletinBoard() {
    const main = {
        zIndex: 10,
        position: "absolute",
        display: "flex",
        justifyContent: "center",
        cursor: "pointer",
        transition: ".3s ease"
    }
  const regular = {
    width: "80%",
    height: "100%",
    marginLeft: "10%"
  };
  const small = {
      width: "77%",
      height: "97%",
      marginLeft: "11.5%"
  }

  const [logoStyle, setLogoStyle] = useState({
    ...main,
    ...regular
  });
  return (
    <div
      className="grey lighten-2 center"
      style={{ width: "100%", height: "80vh" }}
    >
      <SlideShow
        children={
          <img
            onMouseDown={
              ()=>setLogoStyle({ ...main, ...small})
            }
            onMouseUp={
              ()=>setLogoStyle({ ...main, ...regular})
            }
            src={logo}
            style={logoStyle}
            alt="Company Logo"
            title="Seven Son's Kitchen!"
          />
        }
      />
    </div>
  );
}

export default BulletinBoard;
