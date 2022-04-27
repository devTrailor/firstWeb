import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from "./components/FormSection/Contact";
import Header from "./components/Header/Header";

// Pages
import About from "./pages/AboutPage/About";
import BlogPage from "./pages/BlogPage/BlogPage";
import PricePage from "./pages/PricePage/PricePage";
import Services from "./pages/ServicePage/Services";
import AboutUsInfo from "./pages/SubAboutPage/AboutUsInfo";

const AppRouter = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<About />}>
            <Route path="/aboutUs" element={<AboutUsInfo />} />
          </Route>
          <Route path="/services" element={<Services />} />
          <Route path="/pricing" element={<PricePage />} />
          <Route path="/blogs" element={<BlogPage />} />
          <Route path="/contact-us" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
};

export default AppRouter;
