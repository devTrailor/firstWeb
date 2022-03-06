import React, { useState } from "react";
import { Tabs} from "antd";

// Styles
import "./style.scss";

const PortfoiloIntro = () => {
  const { TabPane } = Tabs;
  // const [data, setData] = useState(projects);

  const projects = [
    [
      {
        id: "1",
        img_url:
          "https://cdn.pixabay.com/photo/2017/08/07/14/02/man-2604149__340.jpg",
        title: "Validation",
      },
      {
        id: "2",
        img_url:
          "https://cdn.pixabay.com/photo/2017/08/07/14/02/man-2604149__340.jpg",
        title: "Web",
      },
      {
        id: "3",
        img_url:
          "https://cdn.pixabay.com/photo/2017/08/07/14/02/man-2604149__340.jpg",
        title: "Valid",
      },
      {
        id: "4",
        img_url:
          "https://cdn.pixabay.com/photo/2017/08/07/14/02/man-2604149__340.jpg",
        title: "Hello",
      },
      {
        id: "5",
        img_url:
          "https://cdn.pixabay.com/photo/2017/08/07/14/02/man-2604149__340.jpg",
        title: "HI",
      },
      {
        id: "6",
        img_url:
          "https://cdn.pixabay.com/photo/2017/08/07/14/02/man-2604149__340.jpg",
        title: "voletile",
      },
      {
        id: "7",
        img_url:
          "https://cdn.pixabay.com/photo/2017/08/07/14/02/man-2604149__340.jpg",
        title: "none",
      },
      {
        id: "8",
        img_url:
          "https://cdn.pixabay.com/photo/2017/08/07/14/02/man-2604149__340.jpg",
        title: "wel",
      },
      {
        id: "9",
        img_url:
          "https://cdn.pixabay.com/photo/2017/08/07/14/02/man-2604149__340.jpg",
        title: "Fac",
      },
    ],
    [
      {
        id: "1",
        img_url:
          "https://cdn.pixabay.com/photo/2017/08/07/14/02/man-2604149__340.jpg",
        title: "Hello",
      },
      {
        id: "2",
        img_url:
          "https://cdn.pixabay.com/photo/2017/08/07/14/02/man-2604149__340.jpg",
        title: "HI",
      },
      {
        id: "3",
        img_url:
          "https://cdn.pixabay.com/photo/2017/08/07/14/02/man-2604149__340.jpg",
        title: "voletile",
      },
      {
        id: "4",
        img_url:
          "https://cdn.pixabay.com/photo/2017/08/07/14/02/man-2604149__340.jpg",
        title: "none",
      },
    ],
  ];
  return (
    <div className="container portfolio-intro">
      <h5 className="title2">PORTFOLIO</h5>
      <h1 className="title1">Latest Work</h1>
      <Tabs defaultActiveKey="1" centered>
        <TabPane tab="Show All" key="1">
          <div className="container card-container">
            {projects[0].map((item) => {
              return (
                <>
                  <div className="card">
                    <div className="card-body">
                      <img src={item.img_url} alt="Loading..." />
                      <h2 className="title">{item.title}</h2>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </TabPane>
        <TabPane tab="Web" key="2">
        <div className="container card-container">
            {projects[1].map((item) => {
              return (
                <>
                  <div className="card">
                    <div className="card-body">
                      <img src={item.img_url} alt="Loading..." />
                      <h2 className="title">{item.title}</h2>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </TabPane>
        <TabPane tab="Javascript" key="3">
          Javascript Works
        </TabPane>
        <TabPane tab="React-Js" key="4">
          React-Js Works
        </TabPane>
      </Tabs>
    </div>
  );
};

export default PortfoiloIntro;
