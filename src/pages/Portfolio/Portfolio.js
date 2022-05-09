import React from "react";
import PortfolioIntro from "../../components/PortfolioIntro/PortfolioIntro";
import SectionIntro from "../../components/SectionIntro/SectionIntro";
// styles
import "./style.scss"

const PricePage = () => {
  return (
    <div className="portfolio-section">
      <div className="potfolio-intro-section">
        <SectionIntro
          title="Potfolio" intro_para="Agency provides a full service range including technical skills, design, business understanding."
        />
      </div>
      <div className="portfolio-list">
        <PortfolioIntro />
      </div>


    </div>
  );
};

export default PricePage;
