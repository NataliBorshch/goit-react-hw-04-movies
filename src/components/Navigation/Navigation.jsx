import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.scss";
import routes from "../../routes";
const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            exact
            to={routes.home}
            className="nav-link"
            activeClassName="active"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={routes.movies}
            className="nav-link"
            activeClassName="active"
          >
            Movies
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
