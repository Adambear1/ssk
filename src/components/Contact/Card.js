import React from 'react'

function Card({name, link, button, screenshot}) {
    return (
        <>
        <div class="col s12 m7">
    <div class="card horizontal">
      <div class="card-image">
        <img src={screenshot}/>
      </div>
      <div class="card-stacked">
        <div class="card-content">
          <p>{link}</p>
        </div>
        <div class="card-action align-center">
          <td dangerouslySetInnerHTML={{__html: button}} />
        </div>
      </div>
    </div>
  </div>
  </>
    )
}

export default Card
