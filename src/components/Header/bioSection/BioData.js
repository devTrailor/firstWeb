import React from "react";
import { Link } from "react-router-dom";

import Thumb from "../../../assets/imags/pic.png";
import Avatar from "../../../assets/imags/avatar1.png";

// Styles
import "./style.scss";

const BioData = (props) => {
  return (
    <>
      <div className="bio">
        <div className="studio">
          <h5 className="title2">Modern Studio</h5>
          <h2 className="title1">We’re Help To Build Your Dream Project</h2>
          <p className="description">
            Agency provides a full service range including technical skills,
            design, business understanding.
          </p>

          <div className="btns">
            <li>
              <Link to="#">How We Work</Link>
            </li>
            <li>
              <Link to="#">Contact Us</Link>
            </li>
          </div>

          <div className="avatar-info">
            <div className="avatar">
              <img src={Avatar} alt="Loading...." />
            </div>
            <div className="info">
              <p className="description">
                "Put themselves in the merchant's shoes"
              </p>
              <h3 className="title4">Meta Inc.</h3>
            </div>
          </div>
        </div>

        <div className="thumbs">
          <img src={Thumb} alt="Loading ...." />
        </div>
      </div>
    </>
  );
};

export default BioData;
