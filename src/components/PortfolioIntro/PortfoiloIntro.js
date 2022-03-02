import React from "react";
import { Tabs } from "antd";

// Styles
import "./style.scss";

const PortfoiloIntro = () => {
  const { TabPane } = Tabs;
  return (
    <div className="container portfolio-intro">
      <h5 className="title2">PORTFOLIO</h5>
      <h1 className="title1">Latest Work</h1>
      <Tabs defaultActiveKey="1" centered>
        <TabPane tab="Show All" key="1">
          Show All
        </TabPane>
        <TabPane tab="Web" key="2">
          Web Works
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
