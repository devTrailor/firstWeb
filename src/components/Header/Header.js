import React from "react";
import Navbar from "../Navbar/Navbar";
import BioData from "./bioSection/BioData";

// Styles
import "./style.scss";

const Header = () => {
  return (
    <div className="header">

    {/* Navbar */}
      <Navbar />
      {/* Bio data */}
      <BioData />
    </div>
  );
};

export default Header;
