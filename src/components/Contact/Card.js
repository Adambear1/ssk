import React from "react";

function Card({ social_media }) {
  const icon_style = {
    display: "flex",
    justifyContent: "center",
  };
  return (
    <>
      <div class="col s12 m7">
      <h2 class="header center">Contact</h2>
        <div class="card horizontal">
          <div class="card-image">{/* <img src={screenshot}/> */}</div>
          <div class="card-stacked">
            <div class="card-content container">
              <p>
                Follow our social media to stay to date with latest events, menu
                changes, and news! Our Direct Messages are open 24/7 and respond
                to everyone ASAP. 👉📧👻📱
              </p>
              <br/>
              <br/>
              <p>
              🏆😋🥩🔥 We value all our loyal customers! We send special promotions,
                future events, and respond first to those on our VIP Mailing
                list!
              </p>
            </div>
            <div class="card-action align" style={icon_style}>
              {social_media.map(({ button }) => (
                <td dangerouslySetInnerHTML={{ __html: button }} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
