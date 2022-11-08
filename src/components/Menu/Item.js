import React from "react";
import Modal from "./Modal";
import Slider from "./Slider";

export default function Item({ name, src, desc, setShow, all_photos, cat, type, gf }) {
  return (
    <Modal setShow={setShow} name={name}>
      <Slider images={[src, ...all_photos]} name={name} />
      <div style={footer_style} className="menu-container-item"></div>
      <div className="card-action menu-modal-card">
        <h5 style={h5_style} className="center menu-modal-header">
          {name}
        </h5>
        <p className="center">{desc}</p>
      </div>
      <div className="card-action center menu-card-footer">
      </div>
    </Modal>
  );
}

const {footer_style, h5_style}= {
  footer_style: {
    top: "-25px",
  },
  h5_style: {
    margin: "0",
  }
};
