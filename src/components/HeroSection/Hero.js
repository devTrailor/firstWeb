import React from "react";
import { Link } from "react-router-dom";


// Styles
import "./style.scss";

const Hero = (props) => {
  return (
    <>
      <div className="bio">
        <div className="studio">
          <h5 className="title2">{props.title1}</h5>
          <h2 className="title1">{props.title2}</h2>
          <p className="subtitle title4">{props.subtitle}</p>
          <p className="description">{props.para}</p>

          <div className="btns">
            <li>
              <Link to="#">{props.workBtn}</Link>
            </li>
            <li>
              <Link to="#">{props.ContactUs}</Link>
            </li>
          </div>

          {props.avtarSource && <div className="avatar-info">
            <div className="avatar">
              <img src={props.avtarSource} alt="Loading...." />
            </div>
            <div className="info">
              <p className="description">{props.infoPara}</p>
              <h3 className="title4">{props.companyName}</h3>
            </div>
          </div>}
        </div>

        <div className="thumbs">
          <img src={props.thumb1} alt="Loading ...." />
        </div>
      </div>
    </>
  );
};

export default Hero;
