import React from "react";
import "../../../styles/ServicePage/CloudEngineering/CloudHeader.css";
import heroVideo from "../../../assets/Videos/Services/CloudEngineering/cloudbg.mp4";
import { Link } from "react-router-dom";

const CloudHeader = () => {
  return (
    <>
      <div className="cloud-engineering-banner">
        <div className="cloud-engineering-overlay"></div>
        <video
          src={heroVideo}
          autoPlay
          muted
          loop
          className="cloud-engineering-background"
        />
        <div className="cloud-engineering-content">
        <div className="cloud-engineering-heading-tag">
            <p>Cloud Engineering and Platforms</p>
          </div>
          <h1 className="cloud-engineering-title">
            Get future-ready with a premier <br /> cloud computing company!
          </h1>
          <div className="cloud-engineering-bottom-tag">
            <p>Stay as light as a cloud</p>
          </div>

          <Link to="/contact" className="cloud-engineering-bottom-button">
            <button>Unlock</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default CloudHeader;
