import React from "react";
import { contact } from "../../utils/css";
import Card from "../Card";
import LinksTag from "../LinksTag";
import CateringMenu from "../Catering/CateringMenu";
import Modal from "../Modal";
import dataLayer from "../../dataLayer";
function Information({ social_media }) {
  const [show, setShow] = React.useState(false)
  return (
    <div>
    {show && <Modal show={show} setShow={setShow}><CateringMenu/></Modal>}
      <Card name="Contact" color="red" accent={true}>
        <div className="card-stacked">
          <div className="card-content container">
            <p>We <b>CATER</b>: Any size, time, event... we provide our top quality food and deliver to the location! Please checkout our <span style={contact.cater_style} onClick={()=>setShow(true)}>CATERING MENU</span> for details.</p>
            <br/>
            <p>
              Follow our social media to stay to date with latest events, menu
              changes, and news! Our Direct Messages are open 24/7 and we read
              and respond to all messages ASAP. <span role="img" aria-label="emoji">👉📧👻📱</span>
            </p>
            <br />
            <p>
            <span role="img" aria-label="emoji">🏆😋🥩🔥</span> We value all our loyal customers! To be one, join our{" "}
              <LinksTag
                link={"http://bit.ly/sevensons"}
                msg={"VIP Mailing list"}
                category={"contact"}
              />
              , were they are first to hear all special promotions, future
              events, and much more!
            </p>
            <br />
            <p>
              When we are not making our award winning dishes, or giving back to
              our community, we stay diligent in keeping our food modern,
              natural, and gourmet. We love to hear our feedback and
              suggestions! Feel free to let us know what you think, and we will
              talk all feedback and constructive criticism to heart! Feel free
              to{" "}
              <LinksTag
                link={"mailto:SevenSonsKitchen@gmail.com?subject='We Love Seven Sons!'"}
                msg={"EMAIL"}
                category={"contact"}
              />{" "}
              us! <span role="img" aria-label="emoji">💪❤️🤗</span>
            </p>
            <br />
            <br />
            <p className="center">
              For all pre-orders, please make payment to our{" "}
              <LinksTag link={"https://lnkd.in/gzBxRUz"} msg={"Cash App"}  category={"contact"}/>!
              <span role="img" aria-label="emoji">💪❤️🤗</span>
            </p>
            <br />
          </div>
          <div
            className="card-action align social-media-container"
            style={contact.icon_style}
          >
            {social_media.map(({ button, name }, index) => (
              <td dangerouslySetInnerHTML={{ __html: button }} key={index} onClick={()=> dataLayer("interaction", {category: "contact", action: "linkClicked", label: name})} />
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
}

export default Information;
