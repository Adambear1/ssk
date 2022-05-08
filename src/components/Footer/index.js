import React, { useState, useMemo } from "react";
import "../../styles.css";
import { footer } from "../../utils/css";
import { footer_timer_top, footer_timer_bottom } from "../../utils/timers";
import Buttons from "./Buttons";

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
  const list_items = [{
    title: "Menu",
    colors: "add_yellow",
    icon_name: "restaurant_menu"
  }, {
    title: "Location",
    colors: "add_green",
    icon_name: "map"
  }, {
    title: "Catering",
    colors: "add_brown",
    icon_name: "restaurant"
  },
  {
    title: "Contact",
    colors: "add_red",
    icon_name: "local_phone"
  }]
  return (
    <div>
      <ul
        className={`center orange accent-3 footer-nav animate__animated animate__fadeIn ${
          !display ? "transition-footer-bottom" : "transition-footer-top"
        }`}
        style={footer.footer_ul_style}
      >
        {list_items.map(({title, colors, icon_name}, index)=>{
                  return <Buttons key={index} footer={footer} title={title} colors={colors} icon_name={icon_name} transition={transition} display={display}/>
        })}
      </ul>
    </div>
  );
}

export default Footer;
