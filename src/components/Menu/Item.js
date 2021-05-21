import React from "react";
import { menu } from "../../utils/css";
import Modal from "./Modal";
import Slider from "./Slider";

function Item({ name, src, desc, setShow, all_photos, cat, type, gf }) {
  return (
    <Modal setShow={setShow}>
      <Slider images={[src, ...all_photos]} name={name} />
      <div style={menu.footer_style} className="menu-container-item"></div>
      <div className="card-action menu-modal-card">
        <h5 style={menu.h5_style} className="center menu-modal-header">
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
