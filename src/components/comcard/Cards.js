import React from "react";


const Cards = (props) => {
  return (
    <div className="card">
      <img src={props.source} alt="" />
    </div>
  );
};

export default Cards;
