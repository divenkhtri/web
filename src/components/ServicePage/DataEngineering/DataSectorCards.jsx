import React from "react";
import bg from "../../../assets/Images/Services/dots.svg";
import dataEng from "../../../assets/Images/Services/dataEng.svg";
import "../../../styles/ServicePage/DataEngineering/DataSectorCard.css";

const DataSectorCards = () => {
  return (
    <>
      <section className="data-eng-bg">
        <div className="data-eng-main-section">
          <div className="data-eng-card">
            <div className="data-eng-card-image">
              <img className="data-eng-card-image1" src={bg} alt="" />
              <img className="data-eng-card-image2" src={dataEng} alt="" />
            </div>
            <div className="data-eng-card-content">
              <h2 className="data-eng-card-title">Data Integrity Solutions</h2>
              <p className="data-eng-card-text">
                Safeguard your data with our comprehensive Data Integrity
                Solutions. Ensure accuracy, consistency, and security across
                your valuable information assets. Trust us for reliable data
                integrity solutions.
              </p> 
            </div>
          </div>
        </div>
        <div className="data-eng-main-section">
          <div className="data-eng-card">
            <div className="data-eng-card-image">
              <img className="data-eng-card-image1" src={bg} alt="" />
              <img className="data-eng-card-image2" src={dataEng} alt="" />
            </div>
            <div className="data-eng-card-content">
              <h2 className="data-eng-card-title">Master Data Management</h2>
              <p className="data-eng-card-text">
                Streamline your data with our Master Data Management solutions.
                Achieve a single, unified view of your critical data across
                systems and departments. Optimize data quality, consistency, and
                governance.
              </p>
            </div>
          </div>
        </div>
        <div className="data-eng-main-section">
          <div className="data-eng-card">
            <div className="data-eng-card-image">
              <img className="data-eng-card-image1" src={bg} alt="" />
              <img className="data-eng-card-image2" src={dataEng} alt="" />
            </div>
            <div className="data-eng-card-content">
              <h2 className="data-eng-card-title">Analytics and AI</h2>
              <p className="data-eng-card-text">
                Harness analytics and AI to propel your business forward. Our
                expert team delivers customized solutions for data-driven
                insights and informed decision-making. Experience the
                transformative impact of advanced analytics.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DataSectorCards;
