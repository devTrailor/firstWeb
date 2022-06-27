import React from "react";
import FutureCards from "./Cards/FutureCards";
// Styles
import "./style.scss";

const FutureEvents = () => {
  const cardData = [
    {
      id: 0,
      date: "3",
      month: "November",
      year: "2021",
      time: "9:00am-3:00pm ",
      title: "Design Weeks",
      description:
        "Digital agency is a business you hire to outsource your digital.",
      more: "Explore Now",
    },
    {
      id: 1,
      date: "15",
      month: "November",
      year: "2021",
      time: "9:00am-3:00pm ",
      title: "Interior Design",
      description: "Marketing efforts, instead of handling in-house.",
      more: "Explore Now",
    },
    {
      id: 2,
      date: "2",
      month: "December",
      year: "2021",
      time: "9:00am-3:00pm ",
      title: "The F design events",
      description:
        "Provide your business with a variety of digital solutions to promote.",
      more: "Explore Now",
    },
  ];
  return (
    <div className=" container future_events">
      <h5 className="title2">Events</h5>
      <h1 className="title1">Explore Future Conferences</h1>
      <div className="future-card-container">
        {cardData.map((items) => {
          return (
            <>
              <FutureCards
                key={items.id}
                date={items.date}
                month={items.month}
                year={items.year}
                time={items.time}
                title={items.title}
                description={items.description}
                more={items.more}
              />
            </>
          );
        })}
        {/* <FutureCards />
        <FutureCards /> */}
      </div>
    </div>
  );
};

export default FutureEvents;
