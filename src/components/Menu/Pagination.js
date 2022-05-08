import React from "react";
import { menu } from "../../utils/css";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav className="yellow" style={menu.pagination_nav}>
      <ul className="pagination " style={menu.pagination_ul}>
        {pageNumbers.map((number, index) => (
          <li key={index} className="page-item">
            <a
              onClick={() => paginate(number)}
              className="page-link waves-effect waves-light"
              style={menu.pagination_btn}
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
