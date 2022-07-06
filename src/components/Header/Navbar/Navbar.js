import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../../assets/logos/logo.png";
import { HiMenuAlt2, HiX } from "react-icons/hi"

//Styles
import "./style.scss";
// links lists
const links = [
  {
    page: "About",
    path: "/"
  },
  {
    page: "Services",
    path: "/services"
  },
  {
    page: "Portfolio",
    path: "/portfolio"
  },
  {
    page: "Blogs",
    path: "/blogs"
  },
  {
    page: "Contact Us",
    path: "/contact-us"
  },
]
const Navigation = () => {
  // Hem Menu toggle
  const [toggle, setToggle] = useState(false)
  // For links active or not
  const [active, setActive] = useState(true)
  return (
    <nav className='app__navbar container'>
      <div className='app__navbar-logo'>
        <Link to="/">
          <img src={Logo} alt="Logo...." />
        </Link>
      </div>
      <ul className='app__navbar-links'>
        {links.map((item) => {
          return (
            <li key={item.page} className={!active ? "active" : ""}>
              <NavLink to={item.path} className={!active ? "active" : ""}>{item.page}</NavLink>
            </li>
          )
        })}
      </ul>
      <div className="app_navbar-menu">
        <HiMenuAlt2 onClick={() => { setToggle(!toggle) }} />
        <div className={`sidebar ${toggle ? "active" : ""}`}>
          <HiX onClick={() => { setToggle(false) }} />
          <ul>
            {links.map((item) => {
              return (
                <li key={item.page}>
                  <NavLink to={item.path} className={!active ? "active" : ""} onClick={() => { setToggle(false) }}>{item.page}</NavLink>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;