import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// global Pages
import Copyright from "./components/Copyright/Copyright";
import Footer from "./components/Footer/Footer";
import Contact from "./components/FormSection/Contact";
import Header from "./components/Header/Header";
import PortfolioDetails from "./components/PortfolioIntro/PortfolioDetails";
// import PortfolioIntro from "./components/PortfolioIntro/PortfolioIntro";

// Pages
import About from "./pages/AboutPage/About";
import BlogPage from "./pages/BlogPage/BlogPage";
import Portfolio from "./pages/Portfolio/Portfolio";
import Services from "./pages/ServicePage/Services";
// import AboutUsInfo from "./pages/SubAboutPage/AboutUsInfo";

const AppRouter = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<About />}>
            {/* <Route path="/aboutUs" element={<AboutUsInfo />} /> */}
          </Route>
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio/>} />
          <Route path="/blogs" element={<BlogPage />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route exact path="/project/:id" element={<PortfolioDetails />} />
        </Routes>

        {/* footer-part */}
        <div className="footer-section">
          <Footer />
        </div>
        {/* Copyright-part */}
        <div className="copyright-content">
          <Copyright />
        </div>
      </Router>
    </>
  );
};

export default AppRouter;
