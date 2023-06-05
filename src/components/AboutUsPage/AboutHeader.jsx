import React from "react";
import "../../styles/AboutUs/AboutHeader.css";
import heroBackground from "../../assets/Images/Services/cloudbg.jpg";
import { Link } from "react-router-dom";
const AboutHeader = () => {
  return (
    <>
      <div className="about-header-banner">
        <div className="about-header-overlay"></div>
        <img
          src={heroBackground}
          alt="Hero Background"
          className="about-header-background"
        />
        <div className="about-header-content">
          <h1 className="about-header-title">
          Transforming Businesses with <br/>
           Cutting-Edge Technology
          </h1>

          <div className="about-header-heading-tag">
            <p>
            Unleashing Big Solutions for Bigger Success
            </p>
          </div>

          <Link to="/contact" className="about-header-bottom-button">
            <button>Contact Us</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default AboutHeader;
