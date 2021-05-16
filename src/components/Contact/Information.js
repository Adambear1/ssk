import React from "react";
import Card from "../Card"
function Information({ social_media }) {
  const icon_style = {
    display: "flex",
    justifyContent: "center",
  };
  return (
    <>
  <Card name="Contact" color="red">
          <div class="card-stacked">
            <div class="card-content container">
              <p>
                Follow our social media to stay to date with latest events, menu
                changes, and news! Our Direct Messages are open 24/7 and we read and respond
                to all messages ASAP. 👉📧👻📱
              </p>
              <br />
              <p>
              🏆😋🥩🔥   We value all our loyal customers! To be one, join our <a href="http://bit.ly/sevensons" target="_blank" rel="noreferrer" style={{color: "blue"}}>VIP Mailing list</a> ,
                were they are first to hear all special promotions, future events, and much more!
              </p>
              <br/>
              <p>
              When we are not making our award winning dishes, or giving back to our community, we stay diligent in keeping our food modern, natural, and gourmet. We love to hear our feedback and suggestions! Feel free to let us know what you think, and we will talk all feedback and constructive criticism to heart! Feel free to <a href="mailto:SevenSonsKitchen@gmail.com?subject='We Love Seven Sons!'"target="_blank" rel="noreferrer" style={{color: "blue"}}>EMAIL</a> us! 💪❤️🤗
              </p>
              <br/>
              <br/>
              <p class="center">
              For all pre-orders, please make payment to our <a href="https://lnkd.in/gzBxRUz" target="_blank" rel="noreferrer" style={{color: "blue"}}>Cash App</a>! 💪❤️🤗
              </p>
              <br/>
            </div>
            <div class="card-action align" style={icon_style}>
              {social_media.map(({ button }) => (
                <td dangerouslySetInnerHTML={{ __html: button }} />
              ))}
            </div>
          </div>
          </Card>
    </>
  );
}

export default Information;
