import { Link, NavLink } from "react-router-dom";
// import React, { useState } from "react";
// import { Modal, Button } from "antd";
import { Container, Nav, Navbar } from "react-bootstrap";

import Logo from "../../../assets/logos/logo.png";

//Styles
import "antd/dist/antd.css";
import "./style.scss";

const Navigation = () => {
  return (
    <>
      <Navbar expand="lg">
        <Container>
          <Link to="/">
            <img src={Logo} alt="Loading..." />
          </Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              navbarScroll
              right
            >
              <NavLink to="/" activeclassname="active">About</NavLink>
              <NavLink to="/services" activeclassname="active">Services</NavLink>
              <NavLink to="/portfolio" activeclassname="active">Portfolio</NavLink>
              <NavLink to="/blogs" activeclassname="active">Blogs</NavLink>
              <NavLink to="/contact-us" activeclassname="active">Contact Us</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;

