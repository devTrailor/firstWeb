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
        <Container fluid>
          <Link to="/">
            <img src={Logo} alt="Loading..." />
          </Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              navbarScroll
              right
            >
              <NavLink to="/" activeClassName="active">About</NavLink>
              <NavLink to="/services" activeClassName="active">Services</NavLink>
              <NavLink to="/pricing" activeClassName="active">Pricing</NavLink>
              <NavLink to="/blogs" activeClassName="active">Blogs</NavLink>
              <NavLink to="/contact-us" activeClassName="active">Contact Us</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;

