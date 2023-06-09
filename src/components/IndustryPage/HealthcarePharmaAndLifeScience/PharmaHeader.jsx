import React from "react";
import "../../../styles/Industry/BankingInsurance/BankingServicesHeader.css";
import heroBackground from "../../../assets/Images/IndustrySection/pharma.jpg";
import { Link } from "react-router-dom";

const PharmaHeader = () => {
  return (
    <>
      <div className="banking-header-banner">
        <div className="banking-header-overlay"></div>
        <img
          src={heroBackground}
          alt="Hero Background"
          className="banking-header-background"
        />
        <div className="banking-header-content">
          <h1 className="banking-header-title">
            Healthcare Reimagined with Tech
          </h1>
          <div className="banking-bottom-tag">
            <p>
              Chronic diseases and their required monitoring have changed
              <br />
              how healthcare is delivered in the digital age
            </p>
          </div>

          <Link to="/contact" className="banking-header-contact-button">
            Contact Us
          </Link>
        </div>
      </div>
    </>
  );
};

export default PharmaHeader;
