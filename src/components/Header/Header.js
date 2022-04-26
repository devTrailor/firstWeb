import React from "react";
import Navigation from "./Navbar/Navbar";

// Styles
import "./style.scss";

const Header = () => {
  return (
    <div className="header">
      {/* Navbar */}
      <Navigation/>
    </div>
  );
};

export default Header;
