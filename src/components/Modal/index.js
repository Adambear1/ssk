import React from "react";
import { menu, contact } from "../../utils/css";

function Modal({ setShow, children }) {
  return (
    <div id="backdrop" className="modal-backdrop" style={menu.modal_style} onClick={({target})=> target.id && target.id === "backdrop" && setShow(null)}>
      <div style={contact.content_style} className="menu-modal">
        <span className="waves-effect waves-light modal-close-btn" style={menu.close_style} onClick={()=>setShow(null)}>&times;</span>
        {children}
      </div>
    </div>
  );
}

export default Modal;
