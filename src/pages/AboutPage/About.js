import React from "react";
import Cards from "../../components/AbtCompany/Cards";
import Header from "../../components/Header/Header";
// Styles

import "./style.scss";

const About = () => {
  return (
    <div className="about-page">
      <Header />
      <div className="card-container">
        <div className="cards">
          <Cards source={require("../../assets/imags/Bitmap1.png")} />
          <Cards source={require("../../assets/imags/Bitmap2.png")} />
          <Cards source={require("../../assets/imags/Bitmap3.png")} />
          <Cards source={require("../../assets/imags/Bitmap4.png")} />
        </div>
      </div>
    </div>
  );
};

export default About;
