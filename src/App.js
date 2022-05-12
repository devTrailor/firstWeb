import React from "react";
import AppRouter from "./AppRouter";

// Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.min.css';
// eslint-disable-next-line
import "swiper/css/bundle";
import "./styles/App.scss";
// Navigation Page

const App = () => {
  return (
    <div className="main-app-container">
      <AppRouter />
    </div>
  );
};

export default App;
