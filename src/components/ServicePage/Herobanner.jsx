import React from "react";
import "../../styles/ServicePage/Herobanner.css";
import heroBackground from "../../assets/Images/Services/bg.jpg";

import { useTypewriter } from "react-simple-typewriter";
const HeroBanner = () => {
  const [text] = useTypewriter({
    words: ["orgainization", "nation", "business"],
    loop: {},
  });
  return (
    <div className="service-hero-banner">
      <div className="service-hero-overlay"></div>
      <img
        src={heroBackground}
        alt="Hero Background"
        className="service-hero-background"
      />
      <div className="service-hero-content">
        <div className="service-hero-heading-tag">
          <p>SERVICES</p>
        </div>
        <h1 className="service-hero-title">
          Re(de)fining your <span>{text}</span>
        </h1>
        <div className="service-hero-bottom-tag">
          <p>Our services help you go full-throttle!</p>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
