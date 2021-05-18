import React from "react";

function Modal({ setShow, children }) {
  const modal_style = {
    position: "fixed",
    zIndex: 10000,
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
    overflow: "auto",
    backgroundColor: "rgba(0,0,0,0.2)",
  };
  const content_style = {
    backgroundColor: "#fefefe",
    margin: "1.25% auto",
    padding: "20px",
    border: "1px solid #888",
    width: "50%",
  };
  const close_style = {
    color: "#aaa",
    float: "right",
    fontSize: "28px",
    fontWeight: "bold"
  }
  return (
    <div id="backdrop" style={modal_style} onClick={({target})=> target.id && target.id === "backdrop" && setShow(null)}>
      <div style={content_style}>
        <span class="waves-effect waves-light" style={close_style} onClick={()=>setShow(null)}>&times;</span>
        {children}
      </div>
    </div>
  );
}

export default Modal;
