import React from "react";
import "./Navbar.css";
import image from "../../images/85dd20d6-66fc-4b7e-8825-50d2b7d02261_200x200.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar-div">
      <div className="nav-image-div">
        <img className="nav-image" src={image} alt="" />{" "}
      </div>
      <div className="navlist-div">
        <ul className="nav-ul">
          <li>
            <NavLink className="navlink" to="/home" activeClassName="navlink-active" >
              <span>Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink className="navlink" to="/events" activeClassName="navlink-active">
              <span>Events</span>
            </NavLink>
          </li>
          <li>
            <NavLink className="navlink" to="/gallery" activeClassName="navlink-active">
              <span>Gallery</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

