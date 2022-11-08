import React from "react";

export default function Card({ name, color, accent = false, children }) {
  return (
    <div className="col s12 m7 animate__animated animate__fadeIn" style={h2_style}>
      <h2
        className={`header center ${color}-text ${
          accent ? "text-accent-4" : "text-accent-2"
        }`}
      >
        {name}
      </h2>
      <div className="card horizontal" style={card_style}>{children}</div>
    </div>
  );
}

const {h2_style, card_style} = {
  h2_style: {
    marginTop: "-22.5px",
  },
  card_style: {
    minWidth: "100%",
  },
};