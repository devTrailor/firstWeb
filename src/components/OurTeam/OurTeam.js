import React from "react";
import Flickity from "react-flickity-component";

// Styles
import "./style.scss";

const OurTeam = () => {
  const sliderData = [
    {
      id: "1",
      img_url: require("../../assets/imags/Bitmap.png"),
      title: "Ritik",
      description: "Designer",
    },
    {
      id: "2",
      img_url: require("../../assets/imags/Bitmap.png"),
      title: "Ajay",
      description: "Designer",
    },
    {
      id: "3",
      img_url: require("../../assets/imags/Bitmap.png"),
      title: "Sachin",
      description: "Designer",
    },
    {
      id: "4",
      img_url: require("../../assets/imags/Bitmap.png"),
      title: "Hello",
      description: "Designer",
    },
    {
      id: "5",
      img_url: require("../../assets/imags/Bitmap.png"),
      title: "Ravi",
      description: "Designer",
    },
    {
      id: "6",
      img_url: require("../../assets/imags/Bitmap.png"),
      title: "Ramesh",
      description: "Designer",
    },
    {
      id: "7",
      img_url: require("../../assets/imags/Bitmap.png"),
      title: "Rajesh",
      description: "Designer",
    },
    {
      id: "8",
      img_url: require("../../assets/imags/Bitmap.png"),
      title: "Ramesh",
      description: "Designer",
    },
    {
      id: "9",
      img_url: require("../../assets/imags/Bitmap.png"),
      title: "Rahul",
      description: "Designer",
    },
    {
      id: "10",
      img_url: require("../../assets/imags/Bitmap.png"),
      title: "Anjali",
      description: "Designer",
    },
    {
      id: "11",
      img_url: require("../../assets/imags/Bitmap.png"),
      title: "Pihu",
      description: "Designer",
    },
    {
      id: "12",
      img_url: require("../../assets/imags/Bitmap.png"),
      title: "Esha",
      description: "Designer",
    },
  ];

  const flickityOptions = {
    initialIndex: 1,
    groupCells: 4,
    wrapAround: true,
    draggable: true,
    cellAlign: "center",
    pageDots: true,
    prevNextButtons: false,
    // autoPlay: true,
  };

  return (
    <div className="container card-swiper ">
      <h5 className="title2">OUR TEAM</h5>
      <h2 className="title">Team of Designers and Developers</h2>
      <div className="card-slider container">
        <Flickity
          className={"carousel"} // default ''
          elementType={"div"} // default 'div'
          options={flickityOptions} // takes flickity options {}
          disableImagesLoaded={false} // default false
          reloadOnUpdate // default false
          static // default false
        >
          {sliderData.map((items) => {
            return (
              <div className="card" key={items.id}>
                <img src={items.img_url} alt="Loading..." />
                <h3 className="title">{items.title}</h3>
                <p className="description">{items.description}</p>
              </div>
            );
          })}
        </Flickity>
      </div>
    </div>
  );
};

export default OurTeam;