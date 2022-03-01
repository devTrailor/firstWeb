import React from "react";
import { Link } from "react-router-dom";
import { BsEaselFill, BsBagFill, BsExclude } from "react-icons/bs";
// Styles
import "./style.scss";

const ServicesInfo = () => {
  const Data = [
    {
      id: 1,
      icon: <BsEaselFill />,
      title: "Design",
      description:
        "Agency provides a full service range including technical skills, design.",
      more: "Learn More",
    },
    {
      id: 2,
      icon: <BsBagFill />,
      title: "Development",
      description:
        "Full service range including technical skills, design, business.",
      more: "Discover More",
    },
    {
      id: 3,
      icon: <BsExclude />,
      title: "Marketing",
      description: "Technical skills, design, business understanding, ability.",
      more: "Explore Now",
    },
  ];

  return (
    <>
      <div className="container service-info ">
        <h5 className="title2">Service</h5>
        <p className="para">How Our Agency Can Help</p>
        <div className="card-container">
          {Data.map((elm, id) => {
            return (
              <>
                <div className="card" key={id}>
                  <div className="card-body">
                    <img src={elm.icon} alt="Loading..." />
                    <h2 className="title3">{elm.title}</h2>
                    <p className="description">{elm.description}</p>
                    <Link to="/">{elm.more}</Link>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ServicesInfo;
