import React, { useState, useMemo } from "react";
import "../styles.css";
import { footer } from "../utils/css";
import { footer_timer_top, footer_timer_bottom } from "../utils/timers";

function Footer({ display, setDisplay, styles }) {
  const [transitionUp, setTransitionUp] = useState(false);
  const [transitionDown, setTransitionDown] = useState(false);

  const transitionClose = () => {
    setTimeout(() => {
      setDisplay(null);
      setTransitionDown(true);
      setTimeout(() => setTransitionDown(false), footer_timer_top);
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
        setTimeout(() => setTransitionUp(false), footer_timer_bottom);
      });
    display &&
      setTimeout(() => {
        setTransitionDown(true);
        setTimeout(() => setTransitionDown(false), footer_timer_top);
      });

    display
      ? setTimeout(() => {
          setDisplay(item);
          setTimeout(() => {
            setTransitionUp(true);
            setTimeout(() => setTransitionUp(false), footer_timer_bottom);
          });
        }, footer_timer_top)
      : setTimeout(() => {
          setDisplay(item);
        });
    // display && setTimeout(() => {}, footer_timer);
  };
  return (
    <>
      <ul
        className={`center orange accent-3  animate__animated animate__fadeIn ${
          !display ? "transition-footer-bottom" : "transition-footer-top"
        }`}
        style={footer.footer_ul_style}
      >
        <li style={footer.footer_li_style}>
          {
            // eslint-disable-next-line
          }
          <a
            onClick={() => transition("Menu")}
            style={footer.footer_button_style}
            title="Menu"
            class={`${display === "Menu" && "add_yellow"}`}
          >
            <i
              className="material-icons medium"
              style={footer.footer_icon_style}
            >
              restaurant_menu
            </i>
          </a>
        </li>
        <li style={footer.footer_li_style}>
          {
            // eslint-disable-next-line
          }
          <a
            onClick={() => transition("Map")}
            style={footer.footer_button_style}
            title="Location"
            class={`${display === "Map" && "add_green"}`}
          >
            <i
              className="material-icons medium"
              style={footer.footer_icon_style}
            >
              map
            </i>
          </a>
        </li>
        <li style={footer.footer_li_style}>
          {
            // eslint-disable-next-line
          }
          <a
            onClick={() => transition("Contact")}
            style={footer.footer_button_style}
            title="Contact"
            class={`${display === "Contact" && "add_red"}`}
          >
            <i
              className="material-icons medium"
              style={footer.footer_icon_style}
            >
              local_phone
            </i>
          </a>
        </li>
        {(display || transitionUp || transitionDown) && (
          <li
            style={{ ...footer.footer_li_style, ...footer.footer_close_style }}
          >
            {transitionUp && (
              <a style={footer.footer_button_style}>
                <i
                  className="material-icons medium"
                  style={footer.footer_icon_style}
                >
                  arrow_drop_up
                </i>
              </a>
            )}
            {transitionDown && (
              <a style={footer.footer_button_style}>
                <i
                  className="material-icons medium"
                  style={footer.footer_icon_style}
                >
                  arrow_drop_down
                </i>
              </a>
            )}
            {display && (
              <>
                {
                  // eslint-disable-next-line
                }
                <a
                  onClick={() => {
                    setDisplay(null);
                  }}
                  style={footer.footer_button_style}
                >
                  {!transitionDown && !transitionUp && (
                    <i
                      className="material-icons medium"
                      onClick={() => transitionClose()}
                      title="Close"
                      style={footer.footer_icon_style}
                    >
                      arrow_drop_down
                    </i>
                  )}
                </a>
              </>
            )}
          </li>
        )}
      </ul>
    </>
  );
}

export default Footer;
