import React from "react";
import "../../styles/Industry/IndustryHeader.css";
import heroBackground from "../../assets/Images/IndustrySection/news.jpg";

const IndustryHeader = () => {
  return (
    <>
      <div className="industry-header-banner">
      <div className="industry-header-overlay"></div>
      <img
        src={heroBackground}
        alt="Hero Background"
        className="industry-header-background"
      />
      <div className="industry-header-content">
        <div className="industry-header-container">
          <div className="industry-header-text">
            <h1 className="industry-header-title">
            Latest News Regarding Tech Industry
            </h1>
            <div className="industry-header-description">
              <p>Awareness about your industry</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default IndustryHeader;
