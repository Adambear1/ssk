import React from "react";
import { header } from "../utils/css";

function Header() {
  return (
    <div>
      <nav className="animate__animated animate__fadeIn main-header" style={header.main_header}>
        <div className="nav-wrapper white main-header" >
          <a
            className="brand-logo light-green-text text-accent-4 center"
            style={header.header_text_style}
          >
            Seven Sons Kitchen #SSK
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Header;
