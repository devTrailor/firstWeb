import { Link, NavLink } from "react-router-dom";
// import React, { useState } from "react";
// import { Modal, Button } from "antd";

import Logo from "../../../assets/logos/logo.png";

//Styles
import "antd/dist/antd.css";
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
          <li>
            <NavLink to="/" activeClassName="active">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" activeClassName="active">
              Services
            </NavLink>
          </li>

          <li>
            <NavLink to="/pricing" activeClassName="active">
              Pricing
            </NavLink>
          </li>
          <li>
            <NavLink to="/blogs" activeClassName="active">
              Blog
            </NavLink>
          </li>
        </ul>
        {/* For Contact */}
        <div className="contact-btn">
          <Link to="/contact-us">Contact Us</Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;