import React from "react";
import chicken from "../../assets/chicken.jpg";
import links from "../../assets/links.png";
import ribs from "../../assets/ribs_1.png";
import wings from "../../assets/slide_1.jpg";
import wings_1 from "../../assets/slide_2.jpg";
import { menu } from "../../utils/css";
import Item from "./Item";
import Pagination from "./Pagination";
function Container() {
  const [show, setShow] = React.useState(false);
  const items = [
    {
      src: chicken,
      name: "Half Chicken",
      cat: "Main Dish",
      type: "White Meat",
      all_photos: [chicken, wings, wings_1],
      desc: "Slow smoked half chicken. Marinated in our secret mix + smoked for 48 hours. Nice and tender, cooked to perfection.",
    },
    {
      src: links,
      name: "Pork Links",
      cat: "Side Dish",
      type: "Pork",
      all_photos: [chicken, wings, wings_1],
      desc: "Grilled pork links on the open fire. No sauce needed. Cooked to a fine outer crisp, nice and juicy inside. Customer favorite!",
    },
    {
      src: chicken,
      name: "Half Chicken",
      cat: "Main Dish",
      type: "White Meat",
      all_photos: [chicken, wings, wings_1],
      desc: "Slow smoked half chicken. Marinated in our secret mix + smoked for 48 hours. Nice and tender, cooked to perfection.",
    },
    {
      src: links,
      name: "Pork Links",
      cat: "Dessert",
      type: "Pork",
      all_photos: [chicken, wings, wings_1],
      desc: "Grilled pork links on the open fire. No sauce needed. Cooked to a fine outer crisp, nice and juicy inside. Customer favorite!",
    },
    {
      src: ribs,
      name: "Ribs",
      cat: "Main Dish",
      type: "Beef/Pork",
      gf: true,
      all_photos: [chicken, wings, wings_1],
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.",
    },
    {
      src: wings,
      name: "Chicken Wings",
      cat: "Dessert",
      type: "Pork",
      all_photos: [chicken, wings, wings_1],
      desc: "Best standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      src: ribs,
      name: "Ribs",
      cat: "Main Dish",
      type: "Pork",
      gf: true,
      all_photos: [chicken, wings, wings_1],
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.",
    },
    {
      src: links,
      name: "Pork Links",
      cat: "Main Dish",
      type: "Pork",
      all_photos: [chicken, wings, wings_1],
      desc: "Grilled pork links on the open fire. No sauce needed. Cooked to a fine outer crisp, nice and juicy inside. Customer favorite!",
    },
    {
      src: wings,
      name: "Chicken Wings",
      cat: "Main Dish",
      type: "Pork",
      all_photos: [chicken, wings, wings_1],
      desc: "Best standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      src: ribs,
      name: "Ribs",
      cat: "Main Dish",
      type: "Pork",
      gf: true,
      all_photos: [chicken, wings, wings_1],
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.",
    },
    {
      src: links,
      name: "Pork Links",
      cat: "Main Dish",
      type: "Pork",
      gf:true,
      all_photos: [chicken, wings, wings_1],
      desc: "Grilled pork links on the open fire. No sauce needed. Cooked to a fine outer crisp, nice and juicy inside. Customer favorite!",
    },
    {
      src: chicken,
      name: "Half Chicken",
      cat: "Main Dish",
      type: "Pork",
      all_photos: [chicken, wings, wings_1],
      desc: "Slow smoked half chicken. Marinated in our secret mix + smoked for 48 hours. Nice and tender, cooked to perfection.",
    },
    {
      src: chicken,
      name: "Half Chicken",
      all_photos: [chicken, wings, wings_1],
      type: "Pork",
      cat: "Side Dish",
      desc: "Slow smoked half chicken. Marinated in our secret mix + smoked for 48 hours. Nice and tender, cooked to perfection.",
    },
  ];
 
  const [currentPage, setCurrentPage] = React.useState(1);
  const [postsPerPage] = React.useState(window.screen.width > 1024 ? 8 : 4);
console.log(window.screen)
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = items.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div className="container">
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
        {currentPosts.map(({ src, name, desc, cat, all_photos, type, gf }) => (
          <div
            className="col s3"
            style={menu.container_style}
            onClick={() =>
              setShow({ src, name, desc, cat, all_photos, type, gf })
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
