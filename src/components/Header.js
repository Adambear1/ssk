import React from "react";

function Header({store}) {
  console.log(store)
  return (
    <div>
      <nav className="animate__animated animate__fadeIn main-header" style={main_header}>
        <div className="nav-wrapper white main-header row" >
          <a
            className={`orange-text text-accent-4 ${store.isMed ? "col s6 right" : "brand-logo left"}`}
            style={store.isMed ? header_text_style_med : header_text_style}
            href="mailto:sevensonskitchen@gmail.com"
          >
            SevenSonsKitchen@gmail.com
          </a>
          <a
            className={`brand-logo light-green-text text-accent-4 center ${store.isMed &&  "hide-on-med-and-down"}`}
            style={store.isMed ? header_text_style_med : header_text_style}
          >
            Seven Sons Kitchen #SSK
          </a>
          <a
            className={` red-text text-accent-4  ${store.isMed ? "col s6 left" : "brand-logo right"}`}
            style={store.isMed ? header_text_style_med : header_text_style}
            href="tel:253-555-5555"
          >
            Call now! 253-555-5555
          </a>
        </div>
      </nav>
    </div>
  );
}

const {header_text_style, header_text_style_med, main_header} = {
    header_text_style : {
        fontSize: "auto"
    },
    header_text_style_med : {
      fontSize: "40px !important"
    },
    main_header : {
      // height: "10%"
    }
}

export default Header;
