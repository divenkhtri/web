import React from 'react'
import bg from "../../../assets/Images/Services/dots.svg";
import dataEng from "../../../assets/Images/Services/dataEng.svg";
import "../../../styles/ServicePage/CloudEngineering/CloudSectorCard.css";

const CloudSectorCard = () => {
  return (
    <section className="cloud-eng-bg">
    <div className="cloud-eng-main-section">
      <div className="cloud-eng-card">
        <div className="cloud-eng-card-image">
          <img className="cloud-eng-card-image1" src={bg} alt="" />
          <img className="cloud-eng-card-image2" src={dataEng} alt="" />
        </div>
        <div className="cloud-eng-card-content">
          <h2 className="cloud-eng-card-title">Cloud Engineering and Migration</h2>
          <p className="cloud-eng-card-text">
            Safeguard your data with our comprehensive Data Integrity
            Solutions. Ensure accuracy, consistency, and security across
            your valuable information assets. Trust us for reliable data
            integrity solutions.
          </p> 
        </div> 
      </div>
    </div>
    <div className="cloud-eng-main-section">
      <div className="cloud-eng-card">
        <div className="cloud-eng-card-image">
          <img className="cloud-eng-card-image1" src={bg} alt="" />
          <img className="cloud-eng-card-image2" src={dataEng} alt="" />
        </div>
        <div className="cloud-eng-card-content">
          <h2 className="cloud-eng-card-title">Cloud Native Development</h2>
          <p className="cloud-eng-card-text">
            Streamline your data with our Master Data Management solutions.
            Achieve a single, unified view of your critical data across
            systems and departments. Optimize data quality, consistency, and
            governance.
          </p>
        </div>
      </div>
    </div>
    <div className="cloud-eng-main-section">
      <div className="cloud-eng-card">
        <div className="cloud-eng-card-image">
          <img className="cloud-eng-card-image1" src={bg} alt="" />
          <img className="cloud-eng-card-image2" src={dataEng} alt="" />
        </div>
        <div className="cloud-eng-card-content">
          <h2 className="cloud-eng-card-title">Managed Hosting and Support Services</h2>
          <p className="cloud-eng-card-text">
            Harness analytics and AI to propel your business forward. Our
            expert team delivers customized solutions for data-driven
            insights and informed decision-making. Experience the
            transformative impact of advanced analytics.
          </p>
        </div>
      </div>
    </div>
  </section>
  )
}

export default CloudSectorCard 