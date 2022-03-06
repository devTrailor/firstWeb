import React from "react";
import AppRouter from "./AppRouter";

// Styles
import 'antd/dist/antd.min.css';

import "./styles/App.scss";

const App = () => {
  return (
    <div className="main-app-container">
      <AppRouter />
    </div>
  );
};

export default App;
