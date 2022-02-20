import React from "react";
import { Link } from "react-router-dom";

import Logo from "../../assets/logos/logo.png";

//Styles

import "./style.scss";

const Navbar = () => {
  return (
    <div className="navSection">
      <nav className="navbar">
        {/* Logo */}
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="Loading..." srcset="" />
          </Link>
        </div>
        {/* Lists */}
        <ul className="lists">
          <li className="active">
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>

          <li>
            <Link to="/pricing">Pricing</Link>
          </li>
          <li>
            <Link to="/blogs">Blog</Link>
          </li>
        </ul>
        {/* For Contact */}
        <div className="contact-btn">
          <Link to= '#'>Contact</Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
