import React from "react";
import dataLayer from "../../dataLayer";

const closeWindow = (n, prop) => {
  dataLayer("interaction", {category: "menu", action: "foodCard", label: "close", misc: n})
  prop(null);
};

function Modal({ setShow, name, children }) {
  return (
    <div id="backdrop" className="modal-backdrop" style={modal_style} onClick={({target})=> target.id && target.id === "backdrop" && closeWindow(name, setShow)}>
      <div style={content_style} className="menu-modal">
        <span className="waves-effect waves-light modal-close-btn" style={close_style} onClick={()=> closeWindow(name, setShow)}>&times;</span>
        {children}
      </div>
    </div>
  );
};

const {content_style, modal_style, close_style} = {
  modal_style: {
    position: "fixed",
    zIndex: 10000,
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
    overflow: "auto",
    backgroundColor: "rgba(0,0,0,0.2)",
  },
  content_style: {
    backgroundColor: "#fefefe",
    margin: "8.25% auto",
    padding: "20px",
    border: "1px solid #888",
    width: "37%",
  },
  close_style: {
    color: "#aaa",
    float: "right",
    fontSize: "28px",
    fontWeight: "bold",
  }
};

export default Modal;
