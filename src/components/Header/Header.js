import React from "react";
import Navbar from "./Navbar/Navbar";

// Styles
import "./style.scss";

const Header = () => {
  return (
    <div className="header">
      {/* Navbar */}
      <Navbar/>
    </div>
  );
};

export default Header;
