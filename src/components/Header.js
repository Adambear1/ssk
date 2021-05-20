import React from "react";
import { header } from "../utils/css";

function Header() {
  return (
    <>
      <nav className="animate__animated animate__fadeIn">
        <div className="nav-wrapper white">
          <a
            className="brand-logo light-green-text text-accent-4 center"
            style={header.header_text_style}
          >
            Seven Sons Kitchen #SSK
          </a>
        </div>
      </nav>
    </>
  );
}

export default Header;
