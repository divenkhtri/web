import React from 'react'
import bg from "../../../assets/Images/Services/dots.svg";
import dataEng from "../../../assets/Images/Services/dataEng.svg";
import "../../../styles/ServicePage/DigitalEngineering/DigitalSectorCard.css";
const DigitalSectorCard = () => {
  return (
    <>
    <section className="digital-eng-bg">
      <div className="digital-eng-main-section">
        <div className="digital-eng-card">
          <div className="digital-eng-card-image">
            <img className="digital-eng-card-image1" src={bg} alt="" />
            <img className="digital-eng-card-image2" src={dataEng} alt="" />
          </div>
          <div className="digital-eng-card-content">
            <h2 className="digital-eng-card-title">Customer Experience Management</h2>
            <p className="digital-eng-card-text">
              Safeguard your data with our comprehensive Data Integrity
              Solutions. Ensure accuracy, consistency, and security across
              your valuable information assets. Trust us for reliable data
              integrity solutions.
            </p> 
          </div> 
        </div>
      </div>
      <div className="digital-eng-main-section">
        <div className="digital-eng-card">
          <div className="digital-eng-card-image">
            <img className="digital-eng-card-image1" src={bg} alt="" />
            <img className="digital-eng-card-image2" src={dataEng} alt="" />
          </div>
          <div className="digital-eng-card-content">
            <h2 className="digital-eng-card-title">Product Design and Engineering</h2>
            <p className="digital-eng-card-text">
              Streamline your data with our Master Data Management solutions.
              Achieve a single, unified view of your critical data across
              systems and departments. Optimize data quality, consistency, and
              governance.
            </p>
          </div>
        </div>
      </div>
      <div className="digital-eng-main-section">
        <div className="digital-eng-card">
          <div className="digital-eng-card-image">
            <img className="digital-eng-card-image1" src={bg} alt="" />
            <img className="digital-eng-card-image2" src={dataEng} alt="" />
          </div>
          <div className="digital-eng-card-content">
            <h2 className="digital-eng-card-title">App Development and Support</h2>
            <p className="digital-eng-card-text">
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
  )
}

export default DigitalSectorCard