import React from "react";
import { menu } from "../../utils/css";

function Modal({ setShow, children }) {
  return (
    <div id="backdrop" style={menu.modal_style} onClick={({target})=> target.id && target.id === "backdrop" && setShow(null)}>
      <div style={menu.content_style}>
        <span class="waves-effect waves-light" style={menu.close_style} onClick={()=>setShow(null)}>&times;</span>
        {children}
      </div>
    </div>
  );
}

export default Modal;
