import React from "react";
import "./Navbar.css";
import image from "../../images/85dd20d6-66fc-4b7e-8825-50d2b7d02261_200x200.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar-div">
      <div className="nav-image-div">
        <img className="nav-image" src={image} alt="" />{" "}
      </div>
      <div className="navlist-div">
        <ul className="nav-ul">
          <li>
            <Link className="navlink" to="/home">
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link className="navlink" to="/events">
              <span>Events</span>
            </Link>
          </li>
          <li>
            <Link className="navlink" to="/gallery">
              <span>Gallery</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
