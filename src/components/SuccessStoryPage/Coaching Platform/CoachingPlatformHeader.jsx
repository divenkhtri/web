import React from "react";
import "../../../styles/ServicePage/DigitalEngineering/DigitalHeader.css";
import digitalBg from "../../../assets/Images/SuccessStory/saas/saas.jpg";

const CoachingPlatformHeader = () => {
  return (
    <div className="digital-engineering-banner">
      <div className="digital-engineering-overlay"></div>
      <img src={digitalBg} alt="" className="digital-engineering-background" />
      <div className="digital-engineering-content">
        <h1 className="digital-engineering-title">
          Elevate Your Development: <br />
          Transformative Coaching for <br />
          Personal and Professional Growth
        </h1>
      </div>
    </div>
  );
};

export default CoachingPlatformHeader;
