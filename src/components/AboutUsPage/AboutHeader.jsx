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
            A core-tech approach for effective business <br /> transformation!
          </h1>

          <div className="about-header-heading-tag">
            <p>
              A digital product engineering company. <br />
              We integrate experience design and complex engineering to help our
              clients imagine <br /> what’s possible and accelerate their
              transition into tomorrow’s digital businesses.
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
