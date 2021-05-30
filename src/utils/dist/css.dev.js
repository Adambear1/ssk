"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.slideShow = exports.slider = exports.loader = exports.footer = exports.bulletinBoard = exports.card = exports.menu = exports.header = exports.contact = void 0;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var contact = {
  icon_style: {
    display: "flex",
    justifyContent: "center"
  },
  cater_style: {
    color: "blue",
    cursor: "pointer"
  },
  catering_menu_style: {
    margin: "0px",
    padding: "0px"
  },
  content_style: {
    backgroundColor: "#fefefe",
    margin: "8.25% auto",
    padding: "20px",
    border: "1px solid #888",
    width: "60%"
  }
};
exports.contact = contact;
var header = {
  header_text_style: {
    fontSize: "auto"
  },
  main_header: {// height: "10%"
  }
};
exports.header = header;
var menu = {
  row_style: {
    marginBottom: "90px"
  },
  container_style: {
    marginTop: "20px"
  },
  img_style: {
    maxHeight: "50%",
    maxWidth: "100%",
    margin: "0",
    padding: "0",
    width: "100%",
    height: "200px",
    borderRadius: "5px",
    objectFit: "cover",
    objectPosition: "100% 100%",
    cursor: "pointer"
  },
  cover_style: {
    zIndex: 1000,
    backgroundColor: "rgba (255,255,255,.1)",
    maxWidth: "100%",
    height: "100%"
  },
  footer_style: {
    top: "-25px"
  },
  h5_style: {
    margin: "0"
  },
  modal_style: {
    position: "fixed",
    zIndex: 10000,
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
    overflow: "auto",
    backgroundColor: "rgba(0,0,0,0.2)"
  },
  content_style: {
    backgroundColor: "#fefefe",
    margin: "8.25% auto",
    padding: "20px",
    border: "1px solid #888",
    width: "37%"
  },
  close_style: {
    color: "#aaa",
    "float": "right",
    fontSize: "28px",
    fontWeight: "bold"
  },
  pagination_nav: {
    position: "absolute",
    bottom: "0",
    left: "0",
    right: "0",
    width: "100%"
  },
  pagination_ul: {
    display: "flex",
    flexDirection: "row",
    flexBasis: "auto",
    justifyContent: "center",
    alignContent: "space-between",
    flexWrap: "wrap"
  },
  pagination_btn: {
    borderRadius: "40%",
    border: "2px solid black",
    backgroundColor: "white",
    marginLeft: "15px",
    transition: "1s ease"
  },
  slider_img_style: {
    minWidth: "225px",
    minHeight: "225px",
    maxHeight: "250px",
    maxWidth: "250px",
    display: "flex",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
    objectFit: "center",
    borderRadius: "10px",
    border: ".5px solid white",
    left: 0,
    right: 0,
    padding: 0,
    margin: 0
  },
  slider_a_style: {
    right: 0,
    left: 0,
    padding: 0,
    margin: 0
  },
  slider_span_style: {
    backgroundColor: "rgba(0,0,0,.6)",
    height: "auto",
    width: "auto",
    borderTopRightRadius: "12px"
  },
  slider_container_style: {
    top: "-25px",
    maxWidth: "auto",
    maxHeight: "300px",
    right: 0,
    left: 0,
    padding: 0,
    margin: 0
  }
};
exports.menu = menu;
var card = {
  h2_style: {
    marginTop: "-22.5px"
  },
  card_style: {
    minWidth: "100%"
  }
};
exports.card = card;
var bulletinBoard = {
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
    backgroundRepeat: "no-repeat"
  },
  logo_regular: {
    width: "80%",
    height: "100%",
    marginLeft: "10%"
  },
  logo_small: {
    width: "77%",
    height: "97%",
    marginLeft: "11.5%"
  }
};
exports.bulletinBoard = bulletinBoard;
var footer = {
  footer_ul_style: _defineProperty({
    width: "100%",
    height: "12.5%",
    lineHeight: "56px",
    position: "absolute",
    justifyContent: "center",
    padding: 0,
    margin: 0
  }, "justifyContent", "center"),
  footer_button_style: {
    cursor: "pointer",
    marginTop: "30%",
    transition: "2s ease"
  },
  footer_li_style: {
    display: "inline",
    margin: 50
  },
  footer_icon_style: {
    transition: "3s ease"
  },
  footer_close_style: {
    right: 0,
    top: 0
  }
};
exports.footer = footer;
var loader = {
  loader_logo: {// display: "flex",
    // flex: "center",
    // flexDirection: "center",
    // alignItems: "center",
    // justifyContent: "center",
    // height: "auto",
    // margin: "auto"
  },
  loader_animate: {
    // display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // height: "100%",
    // margin: "auto",
    // flex: "center",
    // flexDirection: "center",
    // alignItems: "center",
    // justifyContent: "center",
    // height: "auto",
    // margin: "auto",
    fontFamily: "Helvetica, sans-serif, Arial",
    animation: "load 1.2s infinite 0s ease-in-out",
    animationDirection: "alternate",
    textShadow: "0 0 1px white"
  }
};
exports.loader = loader;
var slider = {
  slider_style: {
    height: "91vh",
    maxHeight: "100%",
    position: "absolute",
    zIndex: 100,
    left: 0,
    width: "100%",
    opacity: "100%"
  }
};
exports.slider = slider;
var slideShow = {
  slideShow_container: {
    position: "absolute",
    width: "100%",
    margin: "auto",
    height: "80vh"
  },
  slideShow_image_container: {
    zIndex: -10
  },
  slideShow_image: {
    width: "100%",
    height: "88vh",
    maxHeight: "92vh",
    opacity: "60%",
    // objectFit: "cover",
    objectPosition: "center"
  }
};
exports.slideShow = slideShow;