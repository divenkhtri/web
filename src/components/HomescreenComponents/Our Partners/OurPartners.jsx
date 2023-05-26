import React from "react";
import Marquee from "react-fast-marquee";
import aws from "../../../assets/Images/OurPatner/aws.png";
import azure from "../../../assets/Images/OurPatner/azure.png";
import precisely from "../../../assets/Images/OurPatner/precisely.svg";
import equinix from "../../../assets/Images/OurPatner/equinix.png";
import ors from "../../../assets/Images/OurPatner/ors.svg";
import tableau from "../../../assets/Images/OurPatner/tableau.png";
import salesforce from "../../../assets/Images/OurPatner/salesforce.png";
import "../../../styles/OurPartners.css";

const OurPartners = () => {
  return (
    <>
      <div className="our-partner-heading">
        <h2>Selected Partner, Technology & Platform We Support</h2>
      </div>
      <div className="marquee-container">
        <Marquee pauseOnHover>
          <div className="carousel-item">
            <img
              src={aws}
              alt="aws"
              className="carousel-image"
              height={150}
              width={150}
            />
          </div>
          <div className="carousel-item">
            <img
              src={azure}
              alt="azure"
              className="carousel-image"
              height={260}
              width={200}
            />
          </div>
          <div className="carousel-item">
            <img
              src={precisely}
              alt="precisely"
              className="carousel-image"
              height={200}
              width={200}
            />
          </div>
          <div className="carousel-item">
            <img
              src={equinix}
              alt="equinix"
              className="carousel-image"
              height={200}
              width={200}
            />
          </div>
          <div className="carousel-item">
            <img
              src={ors}
              alt="ors"
              className="carousel-image"
              height={200}
              width={200}
            />
          </div>
          <div className="carousel-item">
            <img
              src={tableau}
              alt="tableau"
              className="carousel-image"
              height={200}
              width={200}
            />
          </div>
          <div className="carousel-item">
            <img
              src={salesforce}
              alt="salesforce"
              className="carousel-image"
              height={200}
              width={200}
            />
          </div>
        </Marquee>
      </div>
    </>
  );
};
export default OurPartners;
