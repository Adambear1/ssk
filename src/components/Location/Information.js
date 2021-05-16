import React from 'react'
import Card from "../Card"
import image from "../../assets/map.png"
function Information() {
    const image_style={
        height: "450px",
        width: "450px",
        // margin: "50px"
    }
    return (
        <>
            <Card name="Location" color="green">
            <div class="card-content container">
              <p>
                Follow our social media to stay to date with latest events, menu
                changes, and news! Our Direct Messages are open 24/7 and we read and respond
                to all messages ASAP. 👉📧👻📱
              </p>
              </div>
            </Card>
        </>
    )
}

export default Information
