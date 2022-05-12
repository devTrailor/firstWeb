import React from "react";
import { Link } from "react-router-dom";
// styles
import "./style.scss";

const ServiceIntro = () => {
  return (
    <>
      <div className="service-intro container">
        <div className="thumb">
          <img src={require("../../assets/imags/pic1.png")} alt="" />
        </div>
        <div className="service-help">
          <h5 className="title2">Services</h5>
          <div className="title1">Making Complex Digital Products</div>
          <p className="description">
            Agency provides a full service range including technical skills,
            design, business.
          </p>
          <div className="serice-user-info">
            <div className="thumb">
              <img src={require("../../assets/imags/avatar1.png")} alt="" />
            </div>
            <div className="info">
              <p className="description">
                "Understanding, ability to put themselves in the merchant's
                shoes. It is meant to partner."
              </p>
              <h6 className="title5">Jenny Murtaugh</h6>
              <div className="btn">
                <Link to="/">EXPLORE</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceIntro;
