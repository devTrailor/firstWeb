import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./pages/AboutPage/About";
import Services from "./pages/ServicePage/Services";

const AppRouter = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </Router>
    </>
  );
};

export default AppRouter;
