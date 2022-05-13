import React from "react";
import { contact } from "../../utils/css";

function CateringMenu() {
  return (
    <div >
      <u>
        <h5 className="center">Catering Menu</h5>
      </u>
      <div className="container">
        <div className="">
          <h6>10-50 People:</h6>
          <ul style={contact.catering_menu_style}>
            <li>2 Meats w/ 2 Sides = $19.50 per person.</li>
            <li>3 Meats w/ 3 Sides = $20.50 per person.</li>
          </ul>
          <h6>51-100 People:</h6>
          <ul style={contact.catering_menu_style}>
            <li>2 Meats w/ 2 Sides = $20.50 per person.</li>
            <li>3 Meats w/ 3 Sides = $21.50 per person.</li>
          </ul>
          <h6>101+ People:</h6>
          <ul style={contact.catering_menu_style}>
            <li>2 Meats w/ 2 Sides = $21.50 per person.</li>
            <li>3 Meats w/ 3 Sides = $22.50 per person.</li>
          </ul>
        </div>
        <hr></hr>
        <div className="row">
          <div className="col s12">
            <h6>Meats:</h6>
            <ol style={contact.catering_menu_style}>
              <li>Spare Ribs With Tips</li>
              <li>BBQ Chicken - Legs, Wings + Thighs</li>
              <li>Smoked 1/4 Chicken</li>
              <li>Beef Brisket</li>
              <li>Tri-Trip</li>
              <li>Smoked Chicken 'Wangz'</li>
              <li>Smoked Pork Blade Trips</li>
            </ol>
          </div>
        </div>
        <div className="row" style={contact.catering_menu_style}>
          <div className="col s4">
            <h6>Soups + Salads:</h6>
            <ol style={contact.catering_menu_style}>
              <li>Seafood Gumbo</li>
              <li>Potato Salad</li>
              <li>Garden Salad</li>
              <li>Pineapple Coleslaw</li>
            </ol>
          </div>
          <div className="col s4" style={contact.catering_menu_style}>
            <h6>Sides:</h6>
            <ol style={contact.catering_menu_style}>
              <li>Mac n Cheese</li>
              <li>Collard Greens</li>
              <li>BBQ Beans</li>
              <li>Fried Corn</li>
              <li>Cornbread Muffins</li>
            </ol>
          </div>
          <div className="col s4" style={contact.catering_menu_style}>
            <h6>Deserts:</h6>
            <ol style={contact.catering_menu_style}>
              <li>Pound Cake</li>
              <li>Banana Nut Pound Cake</li>
              <li>Banana Pudding</li>
              <li>Chocolate Chip Cookies</li>
            </ol>
          </div>
        </div>
        <div className="row">
        </div>
      </div>
    </div>
  );
}

export default CateringMenu;
