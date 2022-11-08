import React from 'react';
import dataLayer from '../../dataLayer';

function CloseButton({title, colors, icon_name, transition, display, currentPage}) {
  const width = window.screen.width / 20;
  const footer = {
    footer_button_style: {
      cursor: "pointer",
      marginTop: "30%",
      transition: "2s ease",
    },
    footer_li_style: {
      display: "inline",
      margin: 50,
    },
    footer_button_close_style: {
      border: "5px solid white",
      borderRadius: "50%",
      position: "absolute",
      right: "20px"
      // margin: "10px"
    },
    footer_icon_style: {
      transition: "3s ease",
    }
  };
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
      onClick={() => transition('')}
      style={footer_button_style}
      title={title}
      className={`${display === title && colors}`}
    >
      <i
        className="material-icons medium"
        style={{...footer_icon_style, ...footer_button_close_style}}
      >
        {icon_name}
      </i>
    </a>
  </li>
  )
}

const {footer_button_close_style, footer_icon_style, footer_li_style, footer_button_style} = {
  footer_button_style: {
    cursor: "pointer",
    marginTop: "30%",
    transition: "2s ease",
  },
  footer_li_style: {
    display: "inline",
    margin: 50,
  },
  footer_button_close_style: {
    border: "5px solid white",
    borderRadius: "50%",
    position: "absolute",
    right: "20px"
    // margin: "10px"
  },
  footer_icon_style: {
    transition: "3s ease",
  },
  footer_close_style: {
    right: 0,
    top: 0,
  },
}

export default CloseButton