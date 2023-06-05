import React from 'react'
import "../../../styles/ServicePage/DigitalEngineering/DigitalHeader.css";
import digitalBg from "../../../assets/Videos/Services/DigitalEngineering/digitalbg.mp4";
import { Link } from "react-router-dom";

const DigitalHeader = () => {
  return (
    <div className="digital-engineering-banner">
    <div className="digital-engineering-overlay"></div>
    <video
          src={digitalBg}
          autoPlay
          muted
          loop
          className="digital-engineering-background"
        />
    <div className="digital-engineering-content">
      <div className="digital-engineering-heading-tag">
        <p>Digital Engineering and Transformation</p>
      </div>
      <h1 className="digital-engineering-title">
      Embrace innovation, achieve <br/> transformation
      </h1>
      <div className="digital-engineering-bottom-tag">
        <p> 
        Ignite Your Digital Future
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