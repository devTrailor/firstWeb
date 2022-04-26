import React from "react";
import AppRouter from "./AppRouter";

// Styles
import 'bootstrap/dist/css/bootstrap.min.css';
// eslint-disable-next-line
import "swiper/css/bundle";
import "./styles/App.scss";

const App = () => {
  return (
    <div className="main-app-container">
      <AppRouter />
    </div>
  );
};

export default App;
