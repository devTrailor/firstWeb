import React from "react";
import AppRouter from "./AppRouter";
// Styles

// eslint-disable-next-line
import "swiper/css/bundle";
import "./styles/App.scss";
import 'antd/dist/antd.min.css' //ANTD
// Navigation Page

const App = () => {
  return (
    <div className="main-app-container">
      <AppRouter />
    </div>
  );
};

export default App;
