import React from "react";

function Navbar() {
  return (
    <nav class>
      <div class="nav-wrapper white">
        <a class="brand-logo light-green-text text-accent-4 center heading h2">
          Seven Sons Kitchen
        </a>
        <ul id="dropdown1" class="dropdown-content">
          <li>
            <a href="#!">one</a>
          </li>
          <li>
            <a href="#!">two</a>
          </li>
          <li class="divider"></li>
          <li>
            <a href="#!">three</a>
          </li>
        </ul>
        <ul class="right hide-on-med-and-down">
          <li>
            <a
              class="dropdown-trigger light-green-text text-accent-4"
              href="#!"
              data-target="dropdown1"
            >
              Menu<i class="material-icons right">arrow_drop_down</i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
