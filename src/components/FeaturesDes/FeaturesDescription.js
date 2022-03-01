import React from "react";
import { Link } from "react-router-dom";
// Styles
import "./style.scss";
const FeaturesDescription = () => {
  return (
    <div className="feture-info container">
      <div className="feature">
        <h5 className="title2">Features</h5>
        <p className="description">
          Long run, and work as an extension of the merchant's team.
        </p>

        <div className="btn">
          <Link to="/">Read More.</Link>
        </div>
      </div>
      <div className="cards">
        <div className="card">
          <h2 className="title2">Professional</h2>
          <p className="description">
            Full service range including technical skills, design.
          </p>
        </div>
        <div className="card">
          <h2 className="title2">Accessibility</h2>
          <p className="description">
            Business understanding, ability to put themselves.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeaturesDescription;
