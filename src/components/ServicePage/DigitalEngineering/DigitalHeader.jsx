import React from 'react'
import "../../../styles/ServicePage/DigitalEngineering/DigitalHeader.css";
import heroBackground from "../../../assets/Images/Services/bg.jpg";
import { Link } from "react-router-dom";

const DigitalHeader = () => {
  return (
    <div className="digital-engineering-banner">
    <div className="digital-engineering-overlay"></div>
    <img
      src={heroBackground}
      alt="Hero Background"
      className="digital-engineering-background"
    />
    <div className="digital-engineering-content">
      <div className="digital-engineering-heading-tag">
        <p>Digital Engineering and Transformation</p>
      </div>
      <h1 className="digital-engineering-title">
        A 360-degree approach to data <br />
        engineering solutions
      </h1>
      <div className="digital-engineering-bottom-tag">
        <p> 
          Pushing the limits of excellence with data-led <br />{" "}
          transformation
        </p>
      </div>
      
        <Link to="/contact" className="digital-engineering-bottom-button">
          <button>Talk to us</button>
        </Link>
      
    </div>
  </div>
  )
}

export default DigitalHeader