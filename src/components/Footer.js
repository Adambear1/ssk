import React from "react";
import "../styles.css";

function Footer({ display, setDisplay, styles }) {
  const button_style = {
    cursor: "pointer",
    marginTop: "30px",
  };
  console.log(display);
  return (
    <ul
      className={`center orange accent-3 ${
        !display ? "transition-footer-bottom" : "transition-footer-top"
      }`}
      style={{
        width: "100%",
        height: "90px",
        lineHeight: "56px",
        position: "absolute",
        justifyContent: "center",
        padding: 0,
        margin: 0,
      }}
    >
      <li style={{ display: "inline", margin: 50, marginTop: 100 }}>
        <a
          onClick={() => {
            setDisplay(null);
            display
              ? setTimeout(() => setDisplay("Menu"), 1550)
              : setDisplay("Menu");
          }}
          style={button_style}
        >
          <i className="material-icons medium">restaurant_menu</i>
        </a>
      </li>
      <li style={{ display: "inline", margin: 50 }}>
        <a
          onClick={() => {
            setDisplay(null);
            display
              ? setTimeout(() => setDisplay("Map"), 1550)
              : setDisplay("Map");
          }}
          style={button_style}
        >
          <i className="material-icons medium">map</i>
        </a>
      </li>
      <li style={{ display: "inline", margin: 50 }}>
        <a
          onClick={() => {
            setDisplay(null);
            display
              ? setTimeout(() => setDisplay("Contact"), 1550)
              : setDisplay("Contact");
          }}
          style={button_style}
        >
          <i className="material-icons medium">local_phone</i>
        </a>
      </li>
      {display && (
        <li style={{ display: "inline", margin: 50 }}>
          <a
            onClick={() => {
              setDisplay(null);
            }}
            style={button_style}
          >
            {<i className="material-icons medium">arrow_drop_down</i>}
          </a>
        </li>
      )}
    </ul>
  );
}

export default Footer;
