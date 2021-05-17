import React from 'react'

function Item({name, src, desc}) {
    const img_style = {
        width: "450px",
        height: "auto",
        maxHeight: "500px",
        backgroundPosition: "center",
        backgroundSize: "cover"
    }
    const span_style = {
        backgroundColor: "rgba(0,0,0,.6)",
        height: "auto",
        width: "auto",
        borderTopRightRadius: "12px",
    }
    return (
        <div class="row">
        <div class="col s12 m6">
          <div class="card">
            <div class="card-image">
              <img src={src} style={img_style}/>
              <span class="card-title" style={span_style}>{name}</span>
              <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
            </div>
            <div class="card-content">
              <p>{desc}</p>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Item
