import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Pages
import About from "./pages/AboutPage/About";
import BlogPage from "./pages/BlogPage/BlogPage";
import PricePage from "./pages/PricePage/PricePage";
import Services from "./pages/ServicePage/Services";

const AppRouter = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/pricing" element={<PricePage/>} />
          <Route path="/blogs" element={<BlogPage/>} />
        </Routes>
      </Router>
    </>
  );
};

export default AppRouter;
