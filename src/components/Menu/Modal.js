import React from "react";
import dataLayer from "../../dataLayer";
import { menu } from "../../utils/css";

const closeWindow = (n, prop) => {
  dataLayer("interaction", {category: "menu", action: "foodCard", label: "close", misc: n})
  prop(null);
};

function Modal({ setShow, name, children }) {
  return (
    <div id="backdrop" className="modal-backdrop" style={menu.modal_style} onClick={({target})=> target.id && target.id === "backdrop" && closeWindow(name, setShow)}>
      <div style={menu.content_style} className="menu-modal">
        <span className="waves-effect waves-light modal-close-btn" style={menu.close_style} onClick={()=> closeWindow(name, setShow)}>&times;</span>
        {children}
      </div>
    </div>
  );
}

export default Modal;
