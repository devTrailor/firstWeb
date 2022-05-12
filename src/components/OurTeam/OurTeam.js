import React from "react";
import Flickity from "react-flickity-component";

// Styles
import "./style.scss";

const OurTeam = () => {
  const sliderData = [
    {
      img_url: require("../../assets/imags/Bitmap.png"),
      title: "Ritik",
      description: "Designer",
    },
    {
      img_url: require("../../assets/imags/Bitmap.png"),
      title: "Ajay",
      description: "Designer",
    },
    {
      img_url: require("../../assets/imags/Bitmap.png"),
      title: "Sachin",
      description: "Designer",
    },
    {
      img_url: require("../../assets/imags/Bitmap.png"),
      title: "Hello",
      description: "Designer",
    },
    {
      img_url: require("../../assets/imags/Bitmap.png"),
      title: "Ravi",
      description: "Designer",
    },
    {
      img_url: require("../../assets/imags/Bitmap.png"),
      title: "Ramesh",
      description: "Designer",
    },
    {
      img_url: require("../../assets/imags/Bitmap.png"),
      title: "Rajesh",
      description: "Designer",
    },
    {
      img_url: require("../../assets/imags/Bitmap.png"),
      title: "Ramesh",
      description: "Designer",
    },
    {
      img_url: require("../../assets/imags/Bitmap.png"),
      title: "Rahul",
      description: "Designer",
    },
    {
      img_url: require("../../assets/imags/Bitmap.png"),
      title: "Anjali",
      description: "Designer",
    },
    {
      img_url: require("../../assets/imags/Bitmap.png"),
      title: "Pihu",
      description: "Designer",
    },
    {
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
    autoPlay: true,
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
              <>
                <div className="card">
                  <img src={items.img_url} alt="Loading..." />
                  <h3 className="title">{items.title}</h3>
                  <p className="description">{items.description}</p>
                </div>
              </>
            );
          })}
        </Flickity>
      </div>
    </div>
  );
};

export default OurTeam;