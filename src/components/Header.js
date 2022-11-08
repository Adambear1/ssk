import React from "react";

function Header() {
  return (
    <div>
      <nav className="animate__animated animate__fadeIn main-header" style={main_header}>
        <div className="nav-wrapper white main-header" >
          <a
            className="brand-logo orange-text text-accent-4 left"
            style={header_text_style}
            href="mailto:sevensonskitchen@gmail.com"
          >
            SevenSonsKitchen@gmail.com
          </a>
          <a
            className="brand-logo light-green-text text-accent-4 center"
            style={header_text_style}
          >
            Seven Sons Kitchen #SSK
          </a>
          <a
            className="brand-logo red-text text-accent-4 right"
            style={header_text_style}
            href="tel:253-555-5555"
          >
            Call now! 253-555-5555
          </a>
        </div>
      </nav>
    </div>
  );
}

const {header_text_style, main_header} = {
    header_text_style : {
        fontSize: "auto"
    },
    main_header : {
      // height: "10%"
    }
}

export default Header;
