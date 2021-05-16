import React from "react";

function Menu() {
  return (
    <ul
      class="center orange accent-3"
      style={{
        width: "100%",
        height: "90px",
        lineHeight: "56px",
        position: "relative",
        justifyContent: "center",
        padding: 0,
        margin: 0,
      }}
    >
      <li style={{ display: "inline", margin: 50, marginTop: 100 }}>
        <a href="sass.html">
          <i class="material-icons medium">restaurant_menu</i>
        </a>
      </li>
      <li style={{ display: "inline", margin: 50 }}>
        <a href="badges.html">
          <i class="material-icons medium">map</i>
        </a>
      </li>
      <li style={{ display: "inline", margin: 50 }}>
        <a href="collapsible.html">
          <i class="material-icons medium">local_phone</i>
        </a>
      </li>
    </ul>
  );
}

export default Menu;
