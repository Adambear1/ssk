import React from 'react';
import dataLayer from '../../dataLayer';

export default function Buttons({title, colors, icon_name, transition, display, currentPage}) {
  return (
    <li style={footer_li_style} 
    onMouseOver={({target})=> {
      dataLayer("interaction", {category: currentPage, action: "iconInteraction", label: "hover", misc: title})
      target.parentNode.parentNode.classList.add(colors)}
    }
    onClick={()=> dataLayer("interaction", {category: currentPage, action: "iconInteraction", label: "click", misc: title})}
    onMouseOut={({target})=> Array.from(target.parentNode.parentNode.classList).length > 0 && target.parentNode.parentNode.classList.remove(colors)}
    >
    {
      // eslint-disable-next-line
    }
    <a
      onClick={() => transition(title)}
      style={footer_button_style}
      title={title}
      className={`${display === title ? colors : "none"}`}
    >
      <i
        className="material-icons medium"
        style={footer_icon_style}
      >
        {icon_name}
      </i>
    </a>
  </li>
  )
}

const {footer_button_style, footer_li_style, footer_icon_style} = {
  footer_button_style: {
    cursor: "pointer",
    marginTop: "30%",
    transition: "2s ease",
  },
  footer_li_style: {
    display: "inline",
    margin: 50,
  },
  footer_icon_style: {
    transition: "3s ease",
  },
};