import React from "react";

const HeroCard = (props) => {
  return (
    <div className="card">
      <div className="title1">{props.title}</div>
      <div className="description">{props.description}</div>
    </div>
  );
};

export default HeroCard;
