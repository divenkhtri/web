import React from "react";
import "../../../styles/SuccessStory/SuccessStoryPage/TopSuccessSection.css"; // Import the CSS file
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faIndustry,
  faLocationDot,
  faMicrochip,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";

const CloudPlatformTopSection = () => {
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
              <p>Car Rental Business</p>
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
                <p>Cloud Platform Implementation ,</p>
                <p>Data Management and Integration,</p>
                <p>Reporting and Analytics</p>
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
                <p>Cloud Infrastructure (AWS, Azure),</p>
                <p>Big Data and Analytics (Hadoop, Spark),</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="top-success-right-container">
        <p>CLIENT</p>
        <div className="top-success-right-title">Client Background</div>
        <div className="top-success-right-text">
          The client is a multi-brand car rental licensee association operating
          in the automotive industry. As a collective body representing multiple
          car rental brands, their primary objective is to ensure efficient
          operations, financial management, and profitability for their member
          companies. The association works closely with car rental companies,
          providing support, resources, and guidance to enhance their business
          performance. They strive to streamline processes, optimize operations,
          and leverage technology solutions to meet the evolving needs of the
          car rental industry. With a focus on data management, reporting, and
          financial analysis, the client seeks innovative solutions to overcome
          challenges and drive growth for their member companies.
        </div>
      </div>
    </div>
  );
};

export default CloudPlatformTopSection;
