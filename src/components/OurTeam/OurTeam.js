import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { FreeMode, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// Styles
import "./style.scss"

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
  return (
    <div className="container card-swiper ">
      <h5 className="title2">OUR TEAM</h5>
      <h2 className="title">Team of Designers and Developers</h2>
      <div className="card-slider container">
        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          freeMode={true}
          loop = {true}
          pagination={{
            clickable: true,
          slidesPerView :4
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          {sliderData.map((items) => {
            return (
              <>
                <SwiperSlide>
                  <div className="card">
                    <img src={items.img_url} alt="Loading..." />
                    <h3 className="title">{items.title}</h3>
                    <p className="description">{items.description}</p>
                  </div>
                </SwiperSlide>
                ;
              </>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default OurTeam;
