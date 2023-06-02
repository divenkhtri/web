import React from "react";
import "../../../../styles/SuccessStory/SuccessStoryPage/ClientBackground.css";
const ClientBackground = ({ client }) => {
  return (
    <div className="client-background">
      <div className="client-info">
        <h2 className="client-name">Vinod Roa</h2>
        <p className="client-industry">Pharma</p>
        <p className="client-location">New_jersey</p>
      </div>
      <div className="client-description">
        <p>lorem</p>
      </div>
    </div>
  );
};

export default ClientBackground;
