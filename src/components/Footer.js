import React, { useState, useMemo } from "react";
import "../styles.css";

function Footer({ display, setDisplay, styles }) {
  const time = 1550;
  const [transitionUp, setTransitionUp] = useState(false);
  const [transitionDown, setTransitionDown] = useState(false);
  const ul_style = {
    width: "100%",
    height: "90px",
    lineHeight: "56px",
    position: "absolute",
    justifyContent: "center",
    padding: 0,
    margin: 0,
  }
  const button_style = {
    cursor: "pointer",
    marginTop: "30px",
    transition: "2s ease",
  };
  const li_style = {
    display: "inline", margin: 50
  }
  const icon_style = {
    transition: "3s ease"
  }
  const close_style = {
    // position: "absolute",
    right: 0,
    top: 0,
  }
  const transitionClose = () => {
    setTimeout(() => {
      setDisplay(null);
      setTransitionDown(true);
      setTimeout(() => setTransitionDown(false), time);
    });
  };
  const transition = (item) => {
    if (display && item === display) {
      return transitionClose();
    }
    setDisplay(null);
    !display &&
      setTimeout(() => {
        setTransitionUp(true);
        setTimeout(() => setTransitionUp(false), 1550);
      });
    display &&
      setTimeout(() => {
        setTransitionDown(true);
        setTimeout(() => setTransitionDown(false), 1550);
      });

    display
      ? setTimeout(() => {
          setDisplay(item);
          setTimeout(() => {
            setTransitionUp(true);
            setTimeout(() => setTransitionUp(false), 1550);
          });
        }, 1550)
      : setTimeout(() => {
          setDisplay(item);
        });
    // display && setTimeout(() => {}, 1550);
  };
  return (
    <>
    <ul
      className={`center orange accent-3  ${
        !display ? "transition-footer-bottom" : "transition-footer-top"
      }`}
      style={ul_style}
    >
      <li style={li_style}>
        {
          // eslint-disable-next-line
        }<a
          onClick={() => transition("Menu")}
          style={button_style}
          title="Menu"
          class={`${display === "Menu" && "add_yellow"}`}
        >
          <i className="material-icons medium" style={icon_style}>restaurant_menu</i>
        </a>
      </li>
      <li style={li_style}>
        {
          // eslint-disable-next-line
        }<a
          onClick={() => transition("Map")}
          style={button_style}
          title="Location"
          class={`${display === "Map" && "add_green"}`}
        >
          <i className="material-icons medium" style={icon_style}>map</i>
        </a>
      </li>
      <li style={li_style}>
        {
          // eslint-disable-next-line
        }<a
          onClick={() => transition("Contact")}
          style={button_style}
          title="Contact"
          class={`${display === "Contact" && "add_red"}`}
        >
          <i className="material-icons medium" style={icon_style}>local_phone</i>
        </a>
      </li>
     {(display || transitionUp || transitionDown) &&
      <li style={{...li_style, ...close_style}}>
        {transitionUp && (
          <a style={button_style}>
            <i className="material-icons medium" style={icon_style}>arrow_drop_up</i>
          </a>
        )}
        {transitionDown && (
          <a style={button_style}>
            <i className="material-icons medium" style={icon_style}>arrow_drop_down</i>
          </a>
        )}
        {display && (
          <>
            {
              // eslint-disable-next-line
            }<a
              onClick={() => {
                setDisplay(null);
              }}
              style={button_style}
            >
              {!transitionDown && !transitionUp && (
                <i
                  className="material-icons medium"
                  onClick={() => transitionClose()}
                  title="Close"
                  style={icon_style}
                >
                  arrow_drop_down
                </i>
              )}
            </a>
          </>
        )}
      </li>}
    </ul>
    </>
  );
}

export default Footer;
