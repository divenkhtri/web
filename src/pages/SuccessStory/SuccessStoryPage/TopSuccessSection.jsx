import React from "react";
import "../../../styles/SuccessStory/SuccessStoryPage/TopSuccessSection.css"; // Import the CSS file
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faIndustry,
  faLocationDot,
  faMicrochip,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";

const TopSuccessSection = () => {
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
              <p>Government</p>
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
                <p>Infrastructure and Production Support,</p>
                <p>UI/UX Enhancements,</p>
                <p>Product Development</p>
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
                <p>Natural Language Processing (NLP),</p>
                <p>Azure Infrastructure,</p>
                <p>Fluid Framework</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="top-success-right-container">
        <p>CLIENT</p>
        <div className="top-success-right-title">Client Background</div>
        <div className="top-success-right-text">
          Our esteemed client, a prominent organization deeply immersed in the
          public policy landscape, sought to revolutionize the legislative
          process. With a profound understanding of the challenges faced by
          lawmakers, senators, institutions, and officials, they envisioned an
          innovative platform that would empower decision-makers to seamlessly
          search, collaborate, and work on bills, including the United States
          Code and the Code of Federal Regulations (e-CFR). By partnering with
          our organization, a trusted development partner renowned for
          delivering cutting-edge solutions, they embarked on a transformative
          journey to create a state-of-the-art SaaS solution that would redefine
          public policy collaboration, enhance workflow efficiency, and drive
          impactful legislative changes.
        </div>
      </div>
    </div>
  );
};

export default TopSuccessSection;
