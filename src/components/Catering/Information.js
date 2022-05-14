import React from "react";
import { contact } from "../../utils/css";
import Card from "../Card";
import LinksTag from "../LinksTag";
import CateringMenu from "./CateringMenu";
import Modal from "../Modal";
function Information({ social_media }) {
  const [show, setShow] = React.useState(false)
  return (
    <div>
    {show && <Modal show={show} setShow={setShow}><CateringMenu/></Modal>}
      <Card name="Catering" color="brown" accent={true}>
        <div className="card-stacked">
          <div className="card-content container">
            <p>We <b>CATER</b>: Any size, time, event... we provide our top quality food and deliver to the location! Please checkout our <span style={contact.cater_style} onClick={()=>setShow(true)}>CATERING MENU</span> for details.</p>
            <br/>
            <p>We have catered hundreds events ranging from weddings, birthday parties, and graduations to sporting events, retirement parties and everything in between.</p>
            <p>
              Follow our social media to stay to date with latest events, menu
              changes, and news! Our Direct Messages are open 24/7 and we read
              and respond to all messages ASAP. <span role="img" aria-label="emoji">👉📧👻📱</span>
            </p>
            <br />
            <p className="center">
              For all pre-orders, please make payment to our{" "}
              <LinksTag link={"https://lnkd.in/gzBxRUz"} msg={"Cash App"} category={"Catering"} />!
              <span role="img" aria-label="emoji">💪❤️🤗</span>
            </p>
            <br />
          </div>
        </div>
      </Card>
    </div>
  );
}

export default Information;
