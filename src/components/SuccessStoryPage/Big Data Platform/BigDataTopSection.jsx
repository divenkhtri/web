import React from "react";
import "../../../styles/SuccessStory/SuccessStoryPage/TopSuccessSection.css"; // Import the CSS file
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faIndustry,
  faLocationDot,
  faMicrochip,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";

const BigDataTopSection = () => {
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
              <p>Travel Agency</p>
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
                <p>Big Data Architecture Design and Development,</p>
                <p>Data Integration and Consolidation,</p>
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
                <p>Hadoop,</p>
                <p>Apache Spark,</p>
                <p>Apache Kafka,</p>
                <p>Apache Hive</p>
              
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="top-success-right-container">
        <p>CLIENT</p>
        <div className="top-success-right-title">Client Background</div>
        <div className="top-success-right-text">
        The client is a leading travel company operating globally, providing a wide range of travel services and experiences to customers. With a strong presence in the industry, the client has established itself as a trusted brand, offering diverse travel options, including flights, accommodations, packages, and more. The company serves a large customer base, handling substantial volumes of data related to bookings, customer preferences, destinations, and market trends. Recognizing the importance of leveraging data for business growth and customer satisfaction, the client sought to implement a Big Data Platform to consolidate their data sources, gain actionable insights, and enhance their decision-making capabilities.
        </div>
      </div>
    </div>
  );
};

export default BigDataTopSection;
