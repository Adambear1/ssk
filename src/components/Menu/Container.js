import React from "react";
import chicken from "../../assets/chicken.jpg";
import links from "../../assets/links.png";
import ribs from "../../assets/ribs_1.png";
import wings from "../../assets/slide_1.jpg";
import Item from "./Item";
import Pagination from "./Pagination";
function Container() {
    const [show, setShow] = React.useState(false)
  const items = [
    {
      src: chicken,
      name: "Half Chicken",
      cat: "Main Dish",
      desc: "Slow smoked half chicken. Marinated in our secret mix + smoked for 48 hours. Nice and tender, cooked to perfection.",
    },
    {
      src: links,
      name: "Pork Links",
      cat: "Side Dish",
      desc: "Grilled pork links on the open fire. No sauce needed. Cooked to a fine outer crisp, nice and juicy inside. Customer favorite!",
    },
    {
      src: chicken,
      name: "Half Chicken",
      cat: "Main Dish",
      desc: "Slow smoked half chicken. Marinated in our secret mix + smoked for 48 hours. Nice and tender, cooked to perfection.",
    },
    {
      src: links,
      name: "Pork Links",
      cat: "Dessert",
      desc: "Grilled pork links on the open fire. No sauce needed. Cooked to a fine outer crisp, nice and juicy inside. Customer favorite!",
    },
    {
      src: ribs,
      name: "Ribs",
      cat: "Main Dish",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.",
    },
    {
      src: wings,
      name: "Chicken Wings",
      cat: "Dessert",
      desc: "Best standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      src: ribs,
      name: "Ribs",
      cat: "Main Dish",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.",
    },
    {
        src: chicken,
        name: "Half Chicken",
      cat: "Side Dish",
        desc: "Slow smoked half chicken. Marinated in our secret mix + smoked for 48 hours. Nice and tender, cooked to perfection.",
      },
      {
        src: links,
        name: "Pork Links",
      cat: "Main Dish",
        desc: "Grilled pork links on the open fire. No sauce needed. Cooked to a fine outer crisp, nice and juicy inside. Customer favorite!",
      },
    {
      src: wings,
      name: "Chicken Wings",
      cat: "Main Dish",
      desc: "Best standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      src: ribs,
      name: "Ribs",
      cat: "Main Dish",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.",
    },
    {
      src: links,
      name: "Pork Links",
      cat: "Main Dish",
      desc: "Grilled pork links on the open fire. No sauce needed. Cooked to a fine outer crisp, nice and juicy inside. Customer favorite!",
    },
    {
      src: chicken,
      name: "Half Chicken",
      cat: "Main Dish",
      desc: "Slow smoked half chicken. Marinated in our secret mix + smoked for 48 hours. Nice and tender, cooked to perfection.",
    },
  ];
  const row_style = {
      marginBottom: "90px"
  }
  const container_style = {
    marginTop: "10px",
    marginBottom: "0px",
  };

  const img_style = {
    maxHeight: "50%",
    maxWidth: "100%",
    margin: "0",
    padding: "0",
    width: "100%",
    height: "200px",
    borderRadius: "5px",
    objectFit: "cover",
    objectPosition: "100% 100%",
    cursor: "pointer"
  };
  const cover_style = {
    zIndex: 1000,
    backgroundColor: "rgba (255,255,255,.1)",
    maxWidth: "100%",
  }
  const [currentPage, setCurrentPage] = React.useState(1);
  const [postsPerPage] = React.useState(8);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = items.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div class="container">
        {show && <Item name={show.name} src={show.src} desc={show.desc} setShow={setShow}/>}
      <div class="row" style={row_style}>
        {currentPosts.map(({ src, name, desc }) => (
          <div class="col s3" style={container_style} onClick={()=>setShow({src, name, desc})}>
              <div className="waves-effect waves-light" style={cover_style}>
            <img src={src} style={img_style}/>
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
