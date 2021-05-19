import React, { useState } from "react";
import logo from "../assets/logo.png";
import { bulletinBoard } from "../utils/css";
import SlideShow from "./SlideShow";
function BulletinBoard() {
  console.log("width: ", window.screen.width)
  console.log("height: ", window.screen.height)


  const [logoStyle, setLogoStyle] = useState({
    ...bulletinBoard.logo_main,
    ...bulletinBoard.logo_regular,
  });
  return (
    <div
      className="grey lighten-2 center"
      style={{ width: "100%", height: "80vh" }}
    >
      <SlideShow
        children={
          <img
            className="logo"
            onMouseDown={() => setLogoStyle({ ...bulletinBoard.logo_main, ...bulletinBoard.logo_small })}
            onMouseUp={() => setLogoStyle({ ...bulletinBoard.logo_main, ...bulletinBoard.logo_regular })}
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
