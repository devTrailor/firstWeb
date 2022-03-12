import React from "react";
import Cards from "../../components/comcard/Cards";
import Header from "../../components/Header/Header";
import Hero from "../../components/HeroSection/Hero";
import Avatar from "../../assets/imags/avatar1.png";
import Thumb from "../../assets/imags/pic1.png";
// Styles

import "./style.scss";

// Sections

import HeroCard from "../../components/HeroSection/HeroCard/HeroCard";
import HowWork from "../../components/howWork/HowWork";
import Features from "../../components/Features/Features";
import ServiceIntro from "../../components/ServiceIntro/ServiceIntro";
import ServicesInfo from "../../components/ServiceIntro/ServiceInfo/ServicesInfo";
import PortfoiloIntro from "../../components/PortfolioIntro/PortfoiloIntro";
import FutureEvents from "../../components/FutureEvents/FutureEvents";
import OurTeam from "../../components/OurTeam/OurTeam";
import Testimonials from "../../components/Testimonials/Testimonials";
import { Faq } from "../../components/Faq/Faq";
import OurAwards from "../../components/OurAwards/OurAwards";
import OurBlogs from "../../components/OurBlogs/OurBlogs";
import Newsletter from "../../components/NewLetter/Newsletter";

function About() {
  return (
    <div className="about-page">
      <Header />
      <Hero
        title1=" Modern Studio"
        title2="We’re Help To Build Your Dream Project"
        para="Agency provides a full service range including technical skills, design, business understanding."
        workBtn="How We Work"
        ContactUs="Contact Us"
        avtarSource={Avatar}
        infoPara="Put themselves in the merchant's shoes"
        companyName="Meta Inc."
        thumb1={Thumb} />
      <div className="card-container">
        <div className="cards">
          <Cards source={require("../../assets/imags/Bitmap1.png")} />
          <Cards source={require("../../assets/imags/Bitmap2.png")} />
          <Cards source={require("../../assets/imags/Bitmap3.png")} />
          <Cards source={require("../../assets/imags/Bitmap4.png")} />
        </div>
      </div>

      {/* About-Hero */}

      <div className="about-hero-section ">
        <div className="container">
          <Hero
            thumb1={require("../../assets/imags/pic2.png")}
            title1="About"
            title2="An Experience Design Agency"
            subtitle="Provides a full service range"
            para="Ability to put themselves in the merchant's shoes. It is meant to partner on the long run, and work as an extension of the merchant's team."
            workBtn="About Us" />
        </div>
        <div className="hero-cards">
          <div className="container">
            <HeroCard title="42%" description="Years of experience" />
            <HeroCard title="73+" description="Agency members" />
            <HeroCard title="5.000" description="Projects complete" />
          </div>
        </div>
      </div>

      {/* How to work Section */}

      <div className="how-work-section">
        <div className="container">
          <HowWork />
        </div>
      </div>

      {/* Feature-section */}
      <div className="feature-section">
        <Features
          heading="Features"
          title1="Give Your Site A New Look"
          description="Service range including technical skills, design, business understanding."
          list1="Range including technical skills"
          list2="Business understanding"
          list3="Partner on the long run"
          source={require("../../assets/imags/pic3.png")} />
      </div>

      {/* Service-intro */}
      <div className="service-intro-section">
        <ServiceIntro />
      </div>
      {/* Service-info */}
      <div className="service-data">
        <ServicesInfo />
      </div>

      {/* Porfolio-intro */}
      <div className="portfolio-intro-section">
        <PortfoiloIntro />
      </div>

      {/* Future Events */}
      <div className="future-events-section">
        <FutureEvents />
      </div>
      {/* Our_team */}
      <div className="our-team-section">
        <OurTeam />
      </div>
      {/* testimonial_Section */}
      <div className="testimonial-section">
        <Testimonials />
      </div>
      {/* FAQ_Section */}
      <div className="faq-section">
        <Faq />
      </div>
      {/* Our_Award_Section */}
      <div className="our-award-section">
        <OurAwards />
      </div>
      {/* Our_Blog_page */}
      <div className="our-blog-section">
        <OurBlogs />
      </div>
      {/* New_letter */}
      <div className="news-letter-section">
        <Newsletter />
      </div>
    </div>
  );
}

export default About;
