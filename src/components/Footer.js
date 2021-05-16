import React, { useState, useMemo } from "react";
import "../styles.css";

function Footer({ display, setDisplay, styles }) {
  const time = 1550;
  const [transitionUp, setTransitionUp] = useState(false);
  const [transitionDown, setTransitionDown] = useState(false);
  // eslint-disable no-alert, no-console
  const button_style = {
    cursor: "pointer",
    marginTop: "30px",
    transition: "2s ease"
  };
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
                  setDisplay("Map");
                  setTimeout(() => {
                    setTransitionUp(true);
                    setTimeout(() => setTransitionUp(false), 1550);
                  });
                }, 1550)
              : setTimeout(() => {
                  setDisplay("Map");
                });
            display && setTimeout(() => {}, 1550);
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
                  setDisplay("Map");
                  setTimeout(() => {
                    setTransitionUp(true);
                    setTimeout(() => setTransitionUp(false), 1550);
                  });
                }, 1550)
              : setTimeout(() => {
                  setDisplay("Map");
                });
            display && setTimeout(() => {}, 1550);
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
                  setDisplay("Contact");
                  setTimeout(() => {
                    setTransitionUp(true);
                    setTimeout(() => setTransitionUp(false), 1550);
                  });
                }, 1550)
              : setTimeout(() => {
                  setDisplay("Contact");
                });
            display && setTimeout(() => {}, 1550);
          }}
          style={button_style}
        >
          <i className="material-icons medium">local_phone</i>
        </a>
      </li>
      <li style={{ display: "inline", margin: 50 }}>
      {transitionUp && (
             <a style={button_style}><i className="material-icons medium">arrow_drop_up</i></a> 
            )}
            {transitionDown && (
             <a style={button_style}> <i className="material-icons medium">arrow_drop_down</i></a>
            )}
      {display && (

          <a
            onClick={() => {
              setDisplay(null);
            }}
            style={button_style}
          >

            {!transitionDown && !transitionUp && (
              <i
                className="material-icons medium"
                onClick={() =>
                  setTimeout(() => {
                    setDisplay(null);
                    setTransitionDown(true);
                    setTimeout(() => setTransitionDown(false), time);
                  })
                }
              >
                arrow_drop_down
              </i>
            )}
          </a>
       
      )}
       </li>
    </ul>
  );
}

/*eslint-enable no-alert*/

export default Footer;
