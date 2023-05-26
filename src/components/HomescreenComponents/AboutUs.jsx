import React from "react";
import "../../styles/AboutUs.css"; // CSS file for styling
import about from '../../assets/Images/AboutUs/about.png'

const AboutUs = () => {
  return (
    <div className="about-us-main-container">
    <div className="abt-heading">
    <h1>About Us</h1>
      <p>
        Transforming your business with the latest data-driven insights and
        digital technologies
      </p>
    </div>
      
      <div className="about-us-container">
        <div className="about-us-text">
        <h2>
        Comprehensive Data & Digital Solutions for Your Business
        </h2>
          <p>
          We are a leading provider of comprehensive data and digital solutions, including Data & Analytics, Data Engineering & Solution, Digital Engineering & Solution, Cloud Engineering & Platform, and Consultant & Advisory services. Our experienced team tailors our solutions to meet the unique needs of our clients, helping them achieve sustainable growth. Partner with us to take your business to the next level with the power of data and digital solutions.
          </p>
          <div className="abt-btn">
            <button className="btn-1">Know About Us</button>
            <button className="btn-2">Explore More</button>
          </div>
        </div>
        <div className="about-us-image">
          <img src={about} alt="About Us"  />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
