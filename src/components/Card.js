import React from "react";

function Card({ name, color, accent = false, children }) {
  return (
    <div class="col s12 m7">
      <h2
        class={`header center ${color}-text ${
          accent ? "text-accent-4" : "text-accent-2"
        }`}
      >
        {name}
      </h2>
      <div class="card horizontal">{children}</div>
    </div>
  );
}

export default Card;
