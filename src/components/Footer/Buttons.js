import React from 'react'

function Buttons({footer: {footer_button_style, footer_icon_style, footer_li_style}, title, colors, icon_name, transition, display}) {
  return (
    <li style={footer_li_style}>
    {
      // eslint-disable-next-line
    }
    <a
      onClick={() => transition(title)}
      style={footer_button_style}
      title={title}
      class={`${display === title && colors}`}
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

export default Buttons