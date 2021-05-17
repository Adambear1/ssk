import React from 'react'
import Card from "../Card"
import image from "../../assets/map.png"
import LinksTag from '../LinksTag'
function Information() {
    const image_style={
        height: "450px",
        width: "450px",
        // margin: "50px"
    }
    return (
        <>
            <Card name="Location" color="green" accent={true}>
            <div class="card-content container">
              <p>
                With the companies current status, we are limited to designated pickup location at <LinksTag link={"https://www.google.com/maps/place/Safeway/@47.2195316,-122.4669339,12z"} msg="707 S 56th St, Tacoma WA 98408"/> for all main events. However, for catering and orders of equal or greater of 10 servings, we service all of Pierce, King, and Thurston County. 🚚🐔🔥
              </p>
              <br/>
              <p>
                <i>However</i>, stay tuned!! We are in the process of being more mobile and flexible with all orders + events! ☝👨‍🍳🐖
              </p>
              </div>
            </Card>
        </>
    )
}

export default Information
