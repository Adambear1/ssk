import React from "react";
import dataLayer from "../../dataLayer";
import chicken1 from "../../assets/chicken1.jpg";
import chicken2 from "../../assets/chicken2.jpg";
import chicken3 from "../../assets/chicken3.jpg";
import chicken4 from "../../assets/chicken4.jpg";
import chicken5 from "../../assets/chicken5.jpg";
import chicken6 from "../../assets/chicken6.jpg";
import chicken7 from "../../assets/chicken7.jpg";
import links1 from "../../assets/links1.jpg";
import links2 from "../../assets/links2.png";
import links3 from "../../assets/links3.jpg";
import links4 from "../../assets/links4.jpg";
import links5 from "../../assets/links5.jpg";
import ribs1 from "../../assets/ribs1.png";
import ribs2 from "../../assets/ribs2.jpg";
import ribs3 from "../../assets/ribs3.jpg";
import burnttips1 from "../../assets/burnttips1.jpg"
import burnttips2 from "../../assets/burnttips2.jpg"
import burnttips3 from "../../assets/burnttips3.jpg"
import gumbo1 from "../../assets/gumbo1.jpg";
import slider1 from "../../assets/slider1.jpg"
import { menu } from "../../utils/css";
import Item from "./Item";
import Pagination from "./Pagination";
function Container() {
  const [show, setShow] = React.useState(false);
  const items = [
    {
      src: chicken2,
      name: "Chicken",
      cat: "Main Dish",
      type: "White Meat",
      all_photos: [chicken1, chicken3, chicken4, chicken5, chicken6, chicken7],
      desc: "Slow smoked chicken, comes in full, half, or assorted sizes. Marinated in our secret mix + smoked for hours before being cooked to perfection. Mouth watering a staple of who we are.",
    },
    {
      src: links1,
      name: "Pork Links",
      cat: "Side Dish",
      type: "Pork",
      all_photos: [links2, links3, links4, links5],
      desc: "Grilled pork links on the open fire. No sauce needed. Cooked to a fine outer crisp, nice and juicy inside. Customer favorite!",
    },

    {
      src: ribs1,
      name: "Ribs",
      cat: "Main Dish",
      type: "Beef/Pork",
      gf: true,
      all_photos: [ribs1, ribs2, ribs3],
      desc: "The best ribs you will ever have. Our famous six-hour-smoked ribs guaranteed to pass any expectations, grilled to perfection.",
    },
    {
      src: burnttips1,
      name: "Burnt Tips",
      cat: "Main Dish",
      type: "Pork",
      all_photos: [burnttips2, burnttips3],
      desc: "Southern classic! Best part of smoked brisket cut and cooked to a nice juicy and crisp complexion. Good on all occasions.",
    },
    {
      src: gumbo1,
      name: "Seafood Gumbo",
      cat: "Main Dish",
      type: "Pork",
      all_photos: [],
      desc: "Fan favorite, classic southern Gumbo. Cooked with a bit of lobster, crap and shrimp with a nicely done cooked rice.",
    },
    {
      src: slider1,
      name: "Pulled Pork Slider",
      cat: "Main Dish",
      type: "Pork",
      all_photos: [],
      desc: "BBQ done right. Classic pulled pork with a nice buttery and crisp bun.",
    }
  ];
 
  const [currentPage, setCurrentPage] = React.useState(1);
  const [postsPerPage] = React.useState(window && window.screen.width > 1024 ? 8 : window.screen.width > 500 ? 3 : 2);
console.log(window.screen)
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = items.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => {
    dataLayer({eventCategory: "menu", eventAction: "pagination", eventLabel: pageNumber})
    setCurrentPage(pageNumber)
  }
  return (
    <div className="container menu-container">
      {show && (
        <Item
          name={show.name}
          src={show.src}
          desc={show.desc}
          cat={show.cat}
          all_photos={show.all_photos}
          type={show.type}
          gf={show.gf}
          setShow={setShow}
        />
      )}
      <div className="row" style={menu.row_style}>
        {currentPosts.map(({ src, name, desc, cat, all_photos, type, gf }, index) => (
          <div
            key={index}
            className="col s3"
            style={menu.container_style}
            onClick={() => {
              dataLayer({eventCategory: "menu", eventAction: "foodCard", eventLabel: "view" + " | " + name})
              return setShow({ src, name, desc, cat, all_photos, type, gf })
            }
            }
          >
            <div className="waves-effect waves-light" style={menu.cover_style}>
              <img src={src} style={menu.img_style} />
            </div>
          </div>
        ))}
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={items.length}
          paginate={paginate}
        />
      </div>
    </div>
  );
}

export default Container;
