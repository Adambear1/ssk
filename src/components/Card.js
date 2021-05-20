import React from "react";
import { card } from "../utils/css";

function Card({ name, color, accent = false, children }) {
  return (
    <div className="col s12 m7 animate__animated animate__fadeIn" style={card.h2_style}>
      <h2
        className={`header center ${color}-text ${
          accent ? "text-accent-4" : "text-accent-2"
        }`}
      >
        {name}
      </h2>
      <div className="card horizontal" style={card.card_style}>{children}</div>
    </div>
  );
}

export default Card;
