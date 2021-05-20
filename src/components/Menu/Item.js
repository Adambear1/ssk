import React from "react";
import { menu } from "../../utils/css";
import Modal from "./Modal";
import Slider from "./Slider";

function Item({ name, src, desc, setShow, all_photos, cat, type, gf }) {
  return (
    <Modal setShow={setShow}>
      <Slider images={[src, ...all_photos]} name={name} />
      <div style={menu.footer_style}></div>
      <div className="card-action">
        <h5 style={menu.h5_style} className="center">
          {name}
        </h5>
        <p className="center">{desc}</p>
      </div>
      <div className="card-action center">
        {/* {cat}{"   "}{type}{"   "}{gf}{"   "} */}
      </div>
    </Modal>
  );
}

export default Item;
