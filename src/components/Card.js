import React from "react";
import { card } from "../utils/css";

function Card({ name, color, accent = false, children }) {
  return (
    <div class="col s12 m7" style={card.h2_style}>
      <h2
        class={`header center ${color}-text ${
          accent ? "text-accent-4" : "text-accent-2"
        }`}
      >
        {name}
      </h2>
      <div class="card horizontal" style={card.card_style}>{children}</div>
    </div>
  );
}

export default Card;
