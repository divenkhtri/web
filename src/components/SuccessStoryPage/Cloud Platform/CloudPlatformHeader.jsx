import React from "react";
import "../../../styles/ServicePage/DigitalEngineering/DigitalHeader.css";
import digitalBg from "../../../assets/Images/SuccessStory/cloudPlatform/cloud.jpg";

const CloudPlatformHeader = () => {
  return (
    <div className="digital-engineering-banner">
      <div className="digital-engineering-overlay"></div>
      <img src={digitalBg} alt="" className="digital-engineering-background" />
      <div className="digital-engineering-content">
        <h1 className="digital-engineering-title">
          Elevating Car Rental Efficiency: <br />
          Data-driven Solutions for Success"
        </h1>
      </div>
    </div>
  );
};

export default CloudPlatformHeader;
