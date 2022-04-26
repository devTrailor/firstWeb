import React from "react";
// styles
import "./style.scss";


const Cards = (props) => {
  return (
    <div className="company_card">
      <img src={props.source} alt="" />
    </div>
  );
};

export default Cards;
