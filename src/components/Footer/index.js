import React from "react";
import Buttons from "./Buttons";
import CloseButton from "./CloseButton";

export default function Footer({ display, setDisplay, styles, currentPage, setCurrentPage}) {
  const [transitionUp, setTransitionUp] = React.useState(false);
  const [transitionDown, setTransitionDown] = React.useState(false);
  const transitionClose = () => {
    setTimeout(() => {
      setDisplay(null);
      setTransitionDown(true);
      setTimeout(() => setTransitionDown(false), footer_timer_top);
    });
  };

  const footer_timer_bottom = 1250;
  const footer_timer_top = 1550;
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
    title: "Map",
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
  }];
  const footer = {
    footer_ul_style: {
      width: "100%",
      height: "14.5%",
      lineHeight: "56px",
      position: "absolute",
      padding: "25px",
      margin: 0,
      justifyContent: "center",
    }
  };
  return (
    <div>
      <ul
        className={`row center orange accent-3 footer-nav animate__animated animate__fadeIn row ${
          !display ? "transition-footer-bottom" : "transition-footer-top"
        }`}
        style={footer_ul_style}
      >
        {list_items.map(({title, colors, icon_name}, index)=>{
                  return <Buttons  key={index} title={title} colors={colors} icon_name={icon_name} transition={transition} display={display} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
        })}
        {/* {(display && window.innerWidth > 775) && <CloseButton transition={transition} display={display} currentPage={currentPage} setCurrentPage={setCurrentPage} colors="add_light_gray" title="Close Button" icon_name="close"/>} */}
      </ul>
    </div>
  );
}

const {footer_ul_style, } = {
    footer_ul_style: {
      width: "100%",
      height: "14.5%",
      lineHeight: "56px",
      position: "absolute",
      padding: "25px",
      margin: 0,
      justifyContent: "center",
    }
};