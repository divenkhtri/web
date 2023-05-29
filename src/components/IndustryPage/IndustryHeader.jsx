import React from "react";
import "../../styles/Industry/IndustryHeader.css";
import heroBackground from "../../assets/Images/Services/cloudbg.jpg";

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
            Digital Know-How Applied Expertly by Industry Vertical
            </h1>
            <div className="industry-header-description">
              <p>Build your digital fortress with us!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default IndustryHeader;
