import React from "react";
import "../../../styles/Industry/BankingInsurance/BankingServicesHeader.css";
import heroBackground from "../../../assets/Images/IndustrySection/retail.jpg";
import { Link } from "react-router-dom";

const RetailHeader = () => {
  return (
    <div className="banking-header-banner">
      <div className="banking-header-overlay"></div>
      <img
        src={heroBackground}
        alt="Hero Background"
        className="banking-header-background"
      />
      <div className="banking-header-content">
        <h1 className="banking-header-title">Consumer & Retail</h1>
        <div className="banking-bottom-tag">
          <p>Enhancing consumer experiences with digital technology</p>
        </div>

        <Link to="/contact" className="banking-header-contact-button">
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default RetailHeader;
