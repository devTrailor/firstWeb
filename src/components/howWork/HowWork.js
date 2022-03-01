import React from "react";
import { Link } from "react-router-dom";
// Styles
import "./style.scss";

const HowWork = () => {
  return (
    <>
      <div className="how-work">
        <div className="projects">
          <h5 className="title2"> How We Work</h5>
          <h2 className="title1">Making Your Projects Look Awesome</h2>
          <p className="description">
            Technical skills, design, business understanding, ability to put
            themselves in the merchant's shoes.
          </p>
          <div className="btn">
            <Link to="/">Read More</Link>
          </div>
        </div>
        <div className="project-info">
          <div className="project-list">
            <div className="list list-1">
              <h5 className="title2">1</h5>
              <p className="description">Full service range including</p>
            </div>
            <div className="list list-2">
              <h5 className="title2">2</h5>
              <p className="description">Full service range including</p>
            </div>
            <div className="list list-3">
              <h5 className="title2">3</h5>
              <p className="description">Full service range including</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowWork;
