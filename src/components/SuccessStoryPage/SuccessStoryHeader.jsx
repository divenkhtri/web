import React from "react";
import "../../styles/ServicePage/DigitalEngineering/DigitalHeader.css";
import digitalBg from "../../assets/Images/SuccessStory/saas/saas.jpg";

const SuccessStoryHeader = () => {
  return (
    
    <div className="digital-engineering-banner">
      <div className="digital-engineering-overlay"></div>
      <img src={digitalBg} alt="" className="digital-engineering-background" />
      <div className="digital-engineering-content">
        <h1 className="digital-engineering-title">
          Driving Policy Change: Empowering <br /> Collaboration for Impactful <br/>
          Legislation
        </h1>
      </div>
    </div>
  );
};

export default SuccessStoryHeader;
