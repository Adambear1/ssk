import React from "react";
import Modal from "./Modal";

function Item({ name, src, desc, setShow }) {
  const img_style = {
    width: "450px",
    height: "auto",
    maxHeight: "500px",
    backgroundPosition: "center",
    backgroundSize: "cover",
  };
  const span_style = {
    backgroundColor: "rgba(0,0,0,.6)",
    height: "auto",
    width: "auto",
    borderTopRightRadius: "12px",
  };
  const card_style = {
    maxWidth: "450px",
    marginLeft: "auto",
    marginRight: "auto",
    width: "auto",
    height: "auto"
  }
  return (
    <Modal setShow={setShow}>
      <div class="card" style={card_style}>
        <div class="card-image">
          <img src={src} style={img_style} />
          <span class="card-title" style={span_style}>
            {name}
          </span>
          <a class="btn-floating halfway-fab waves-effect waves-light red">
            <i class="material-icons">add</i>
          </a>
        </div>
        <div class="card-content">
          <p>{desc}</p>
        </div>
      </div>
    </Modal>
  );
}

export default Item;
