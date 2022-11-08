import React from "react";
import logo from "../../assets/logo.png";
import dataLayer from "../../dataLayer";
import SlideShow from "./SlideShow";
import Static from "./Static";
export default function BulletinBoard() {
  const [logoStyle, setLogoStyle] = React.useState({
    ...logo_main,
    ...logo_regular,
  });
const isSmall = window.innerWidth < 769;

  return (
    <div
      className="grey lighten-2 center animate__animated animate__fadeIn main-container"
      style={{ width: "100%", height: "80vh" }}
    >
      {
        // isSmall ? 
        // <Static children={
        //   <img
        //     className="logo"
        //     onMouseDown={() => {
        //       dataLayer("interaction", {category: "home", action: "iconInteraction", label: "click"})
        //       setLogoStyle({ ...logo_main, ...logo_small })
        //     }
        //   }
        //     onMouseUp={() => setLogoStyle({ ...logo_main, ...logo_regular })}
        //     src={logo}
        //     style={logoStyle}
        //     alt="Company Logo"
        //     title="Seven Son's Kitchen!"
        //   />
        // }/> 
        // :
      <SlideShow children={
        <img
            className="logo"
            onMouseDown={() => {
              dataLayer("interaction", {category: "home", action: "iconInteraction", label: "click"})
                setLogoStyle({ ...logo_main, ...logo_small })
              }
            }
            onMouseUp={() => setLogoStyle({ ...logo_main, ...logo_regular })}
            src={logo}
            style={logoStyle}
            alt="Company Logo"
            title="Seven Son's Kitchen!"
      />
      }/>
        
}
    </div>
  );
}

const {logo_main, logo_regular, logo_small} = {
  logo_main: {
    zIndex: 10,
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    cursor: "pointer",
    width: "auto",
    height: "auto",
    textAlign: "center",
    transition: ".3s ease",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
  },
  logo_regular: {
    width: "80%",
    height: "100%",
    marginLeft: "10%",
  },
  logo_small: {
    width: "77%",
    height: "97%",
    marginLeft: "11.5%",
  },
};
