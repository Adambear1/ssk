import React from "react";
import { header } from "../utils/css";

function Header() {
  return (
    <>
    <nav>
      <div class="nav-wrapper white">
        <a class="brand-logo light-green-text text-accent-4 center" style={header.header_text_style}>
          Seven Sons Kitchen #SSK
        </a>
      </div>
    </nav>
    </>
  );
}

export default Header;
