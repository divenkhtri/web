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
          <p>Data Engineering and solution</p>
        </div>
        <h1 className="consult-header-title">
          A 360-degree approach to data <br />
          engineering solutions
        </h1>
        <div className="consult-header-bottom-tag">
          <p>
            Pushing the limits of excellence with data-led <br />{" "}
            transformation
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