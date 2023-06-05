import React from 'react'
import '../../../styles/ServicePage/Consulting/ConsultHeader.css'
import consultBg from "../../../assets/Videos/Services/Consulting/consultBg.mp4";
import { Link } from "react-router-dom";
const ConsultHeader = () => {
  return (
    <>
    <div className="consult-header-banner">
      <div className="consult-header-overlay"></div>
      <video
          src={consultBg}
          autoPlay
          muted
          loop
          className="consult-header-background"
        />
      <div className="consult-header-content">
        <div className="consult-header-heading-tag">
          <p>Consulting And Advisory</p>
        </div>
        <h1 className="consult-header-title">
        Strategic Consulting for <br/>Sustainable Growth
        </h1>
        <div className="consult-header-bottom-tag">
          <p>
          Navigating the Future Together
          </p>
        </div>
        
          <Link to="/contact" className="consult-header-bottom-button">
            <button>Talk to us</button>
          </Link>
        
      </div>
    </div>
  </>
  )
}

export default ConsultHeader