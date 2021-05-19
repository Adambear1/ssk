import React from "react";
import Modal from "./Modal";
import Slider from "./Slider";

function Item({ name, src, desc, setShow, all_photos, cat, type, gf }) {
  const footer_style = {
    top: "-25px",
  };
  const h5_style = {
    margin: "0",
  };
  return (
    <Modal setShow={setShow}>
      <Slider images={[src, ...all_photos]} name={name} />
      <div style={footer_style}></div>
      <div class="card-action">
        <h5 style={h5_style} className="center">
          {name}
        </h5>
        <p className="center">{desc}</p>
      </div>
      <div class="card-action center">
        {/* {cat}{"   "}{type}{"   "}{gf}{"   "} */}
      </div>
    </Modal>
  );
}

export default Item;
