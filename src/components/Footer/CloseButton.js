import React from 'react'
import dataLayer from '../../dataLayer'


function CloseButton({footer: {footer_button_style, footer_icon_style, footer_li_style, footer_button_close_style}, title, colors, icon_name, transition, display, currentPage}) {
  const width = window.screen.width / 20;
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

export default CloseButton