import React from "react";
// import { propTypes } from "react-bootstrap/esm/Image";
import { FaCheckCircle } from "react-icons/fa";
import FeaturesDescription from "../FeaturesDes/FeaturesDescription";
// Styles
import "./style.scss";

const Features = (props) => {
  return (
    <>
      <div className="features container">
        <div className="business-features">
          <h5 className="title2"> {props.heading}</h5>
          <h2 className="title1">{props.title1}</h2>
          <p className="description">{props.description}</p>
          <div className="feature-lists">
            <div className="list list-1">
              <li className="icon">
                <FaCheckCircle />
              </li>
              <li>{props.list1}</li>
            </div>
            <div className="list list-2">
              <li className="icon">
                <FaCheckCircle />
              </li>
              <li>{props.list2}</li>
            </div>
            <div className="list list-3">
              <li className="icon">
                <FaCheckCircle />
              </li>
              <li>{props.list3}</li>
            </div>
          </div>
        </div>
        <div className="thumb">
          <img src={props.source} alt="" />
        </div>
      </div>
      <div className="featureData">
        <FeaturesDescription />
      </div>
    </>
  );
};

export default Features;
