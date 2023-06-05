import React from "react";
import "../../../styles/ServicePage/DigitalEngineering/DigitalHeader.css";
import digitalBg from "../../../assets/Images/SuccessStory/bigData/bigData (2).jpg";

const BigDataHeader = () => {
  return (
    
    <div className="digital-engineering-banner">
      <div className="digital-engineering-overlay"></div>
      <img src={digitalBg} alt="" className="digital-engineering-background" />
      <div className="digital-engineering-content">
        <h1 className="digital-engineering-title">
        Elevating Travel Experiences: <br/> Insights Unleashed
        </h1>
      </div>
    </div>
  );
};

export default BigDataHeader;
 