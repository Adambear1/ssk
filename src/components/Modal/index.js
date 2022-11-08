import React from "react";

function Modal({ setShow, children }) {
  return (
    <div id="backdrop" className="modal-backdrop" style={modal_style} onClick={({target})=> target.id && target.id === "backdrop" && setShow(null)}>
      <div style={content_style} className="menu-modal">
        <span className="waves-effect waves-light modal-close-btn" style={close_style} onClick={()=>setShow(null)}>&times;</span>
        {children}
      </div>
    </div>
  );
}

const {content_style, modal_style, close_style} = {
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
  },
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
}

export default Modal;
