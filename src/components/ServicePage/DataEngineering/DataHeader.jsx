import React from "react";
import "../../../styles/ServicePage/DataEngineering.css";
import heroBackground from "../../../assets/Images/Services/bg.jpg";
import { Link } from "react-router-dom";

const DataHeader = () => {
  return (
    <>
      <div className="data-engineering-banner">
        <div className="data-engineering-overlay"></div>
        <img
          src={heroBackground}
          alt="Hero Background"
          className="data-engineering-background"
        />
        <div className="data-engineering-content">
          <div className="data-engineering-heading-tag">
            <p>Data Engineering and solution</p>
          </div>
          <h1 className="data-engineering-title">
            A 360-degree approach to data <br />
            engineering solutions
          </h1>
          <div className="data-engineering-bottom-tag">
            <p> 
              Pushing the limits of excellence with data-led <br />{" "}
              transformation
            </p>
          </div>
          
            <Link to="/contact" className="data-engineering-bottom-button">
              <button>Talk to us</button>
            </Link>
          
        </div>
      </div>
    </>
  );
};

export default DataHeader;
