import React from "react";
import "../../../styles/Industry/BankingInsurance/BankingServicesHeader.css";
import heroBackground from "../../../assets/Images/IndustrySection/transportation.jpg";
import { Link } from "react-router-dom";

const TravelHeader = () => {
  return (
    <div className="banking-header-banner">
    <div className="banking-header-overlay"></div>
      <img
        src={heroBackground}
        alt="Hero Background"
        className="banking-header-background"
      />
      <div className="banking-header-content">
        <div className="banking-header-container">
          <div className="banking-header-text">
            <h1 className="banking-header-title">
            Accelerate Innovation with Complex Engineering
            </h1>
            <div className="banking-header-description">
              <p>Driving the Future of High Tech</p>
            </div>
          </div>
          <div className="banking-header-button">
            <Link to="/contact" className="banking-header-contact-button">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TravelHeader