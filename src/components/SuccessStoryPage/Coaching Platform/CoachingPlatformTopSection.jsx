import React from "react";
import "../../../styles/SuccessStory/SuccessStoryPage/TopSuccessSection.css"; // Import the CSS file
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faIndustry,
  faLocationDot,
  faMicrochip,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";

const CoachingPlatformTopSection = () => {
  return (
    <div className="top-success-main-container">
      <div className="top-success-left-container">
        <div className="top-success-row">
          <div className="top-success-card1">
            <div className="top-success-card-icon">
              <FontAwesomeIcon
                icon={faLocationDot}
                beat
                size="lg"
                style={{ color: "#ff7a33" }}
              />
            </div>
            <div className="top-success-card-title">
              <h2>Location</h2>
              <p>United States of America</p>
            </div>
          </div>
          <div className="top-success-card2">
            <div className="top-success-card-icon">
              <FontAwesomeIcon
                icon={faPerson}
                flip
                size="xl"
                style={{ color: "#ff7a33" }}
              />
            </div>
            <div className="top-success-card-title">
              <h2>Client</h2>
              <p>Education Platform</p>
            </div>
          </div>
        </div>
        <div className="top-success-row">
          <div className="top-success-row2">
            <div className="top-success-card2">
              <div className="top-success-card-icon">
                <FontAwesomeIcon
                  icon={faIndustry}
                  beat
                  size="xl"
                  style={{ color: "#ff7a33" }}
                />
              </div>
              <div className="top-success-card-title">
                <h2>Service Provide</h2>
                <p>Development of a Centralized Coaching Platform ,</p>
                <p>Single Sign-On (SSO) Implementation,</p>
              </div>
            </div>
            <div className="top-success-card4">
              <div className="top-success-card-icon">
                <FontAwesomeIcon
                  icon={faMicrochip}
                  beatFade
                  size="xl"
                  style={{ color: "#fff" }}
                />
              </div>
              <div className="top-success-card-title2">
                <h2>Technology</h2>
                <p>API Integration,</p>
                <p>SAML (Security Assertion Markup Language) ,</p>
                
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="top-success-right-container">
        <p>CLIENT</p>
        <div className="top-success-right-title">Client Background</div>
        <div className="top-success-right-text">
          The client is an innovative organization dedicated to empowering
          individuals in their personal and professional development journeys.
          They have built a thriving platform that offers a wide range of
          proprietary tools, resources, and coaching services. With a strong
          focus on community engagement and collaboration, the client has
          created a vibrant ecosystem where ambitious individuals from around
          the world can connect, learn, and grow together. Their mission is to
          provide accessible and affordable solutions that support individuals
          in reaching their full potential and achieving their goals. By
          offering a centralized coaching platform, the client aims to
          revolutionize the way people approach personal and professional
          development, making it more accessible, effective, and transformative.
        </div>
      </div>
    </div>
  );
};

export default CoachingPlatformTopSection;
