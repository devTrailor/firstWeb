import React from "react";
// Styles
import "./style.scss";

const FutureCards = (props) => {
  return (
    <div className="future-card">
      <div className="card-data">
        <div className="top">
          <div className="topData">
            <h1 className="date, title1">{props.date}</h1>
            <div className="month_year">
              <h3 className="title">{props.month}</h3>
              <h4 className="title">{props.year}</h4>
            </div>
          </div>
          <h4 className="time">{props.time}</h4>
        </div>
        <div className="bottom">
          <h1 className="title1">{props.title}</h1>
          <p className="description">{props.description}</p>
          <h4 className="title">{props.more}</h4>
        </div>
      </div>
    </div>
  );
};

export default FutureCards;
