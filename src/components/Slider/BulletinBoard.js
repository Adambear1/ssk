import React, { useState } from "react";
import logo from "../../assets/logo.png";
import dataLayer from "../../dataLayer";
import { bulletinBoard } from "../../utils/css";
import SlideShow from "./SlideShow";
// import Static from "./Static";
function BulletinBoard() {
  const [logoStyle, setLogoStyle] = useState({
    ...bulletinBoard.logo_main,
    ...bulletinBoard.logo_regular,
  });


// const isSmall = window.innerWidth < 769;

  return (
    <div
      className="grey lighten-2 center animate__animated animate__fadeIn main-container"
      style={{ width: "100%", height: "80vh" }}
    >
      {
        // isSmall ? <Static children={
        //   <img
        //     className="logo"
        //     onMouseDown={() => {
        //       dataLayer("interaction", {category: "home", action: "iconInteraction", label: "click"})
        //       setLogoStyle({ ...bulletinBoard.logo_main, ...bulletinBoard.logo_small })
        //     }
        //   }
        //     onMouseUp={() => setLogoStyle({ ...bulletinBoard.logo_main, ...bulletinBoard.logo_regular })}
        //     src={logo}
        //     style={logoStyle}
        //     alt="Company Logo"
        //     title="Seven Son's Kitchen!"
        //   />
        // }/> :
      <SlideShow
        children={
          <img
            className="logo"
            onMouseDown={() => {
              dataLayer("interaction", {category: "home", action: "iconInteraction", label: "click"})
              setLogoStyle({ ...bulletinBoard.logo_main, ...bulletinBoard.logo_small })
            }
          }
            onMouseUp={() => setLogoStyle({ ...bulletinBoard.logo_main, ...bulletinBoard.logo_regular })}
            src={logo}
            style={logoStyle}
            alt="Company Logo"
            title="Seven Son's Kitchen!"
          />
        }
      />}
    </div>
  );
}

export default BulletinBoard;
