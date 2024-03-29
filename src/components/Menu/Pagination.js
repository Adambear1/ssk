import React from "react";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav className="yellow" style={pagination_nav}>
      <ul className="pagination " style={pagination_ul}>
        {pageNumbers.map((number, index) => (
          <li key={index} className="page-item">
            <a
              onClick={() => paginate(number)}
              className="page-link waves-effect waves-light"
              style={pagination_btn}
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const {pagination_nav, pagination_ul, pagination_btn} = {
  pagination_nav: {
    position: "absolute",
    bottom: "0",
    left: "0",
    right: "0",
    width: "100%",
  },
  pagination_ul: {
    display: "flex",
    flexDirection: "row",
    flexBasis: "auto",
    justifyContent: "center",
    alignContent: "space-between",
    flexWrap: "wrap",
  },
  pagination_btn: {
    borderRadius: "40%",
    border: "2px solid black",
    backgroundColor: "white",
    marginLeft: "15px",
    transition: "1s ease",
  }
}

export default Pagination;
