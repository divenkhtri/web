import React from "react";
import "../../styles/Industry/IndustryCard.css";

const IndustryCard = ({ imageUrl, title, description }) => {
  return (
    <div className="industry-pg-card">
      <div className="industry-pg-card-image">
        <img src={imageUrl} alt="Card mage" />
        <div className="industry-pg-overlay"></div>
      </div>
      <div className="industry-pg-card-content">
        <h2 className="industry-pg-card-title">{title}</h2>
        <p className="industry-pg-card-description">{description}</p>
      </div>
    </div>
  );
};

export default IndustryCard;
