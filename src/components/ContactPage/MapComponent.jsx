import React, { useState } from "react";
import "../../styles/MapComponents.css";

const MapComponent = () => {
  const [mapIndex, setMapIndex] = useState(1);

  const handleButtonClick = (index) => {
    setMapIndex(index);
  };

  return (
    <div className="map-container">
      <div className="map-button-container">
        <button
          className={`map-button ${mapIndex === 1 ? "active" : ""}`}
          onClick={() => handleButtonClick(1)}
        >
          Map 1
        </button>
        <button
          className={`map-button ${mapIndex === 2 ? "active" : ""}`}
          onClick={() => handleButtonClick(2)}
        >
          Map 2
        </button>
        <button
          className={`map-button ${mapIndex === 3 ? "active" : ""}`}
          onClick={() => handleButtonClick(3)}
        >
          Map 3
        </button>
      </div>
      <div className="map-frame-container">
        {mapIndex === 1 && (
          <iframe
            className="map-frame"
            title="Map 1"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3769.918155377036!2d72.9184341430664!3d19.11124610900879!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c7ea348f1cd3%3A0x9f0d02f9fba7f991!2sKAILASH%20BUSINESS%20PARK%2C%20Park%20Site%20Rd%2C%20HMPL%20Surya%20Nagar%2C%20Vikhroli%20West%2C%20Mumbai%2C%20Maharashtra%20400076!5e0!3m2!1sen!2sin!4v1685301428217!5m2!1sen!2sin"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        )}
        {mapIndex === 2 && (
          <iframe
            className="map-frame"
            title="Map 2"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3769.918155377036!2d72.9184341430664!3d19.11124610900879!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c7ea348f1cd3%3A0x9f0d02f9fba7f991!2sKAILASH%20BUSINESS%20PARK%2C%20Park%20Site%20Rd%2C%20HMPL%20Surya%20Nagar%2C%20Vikhroli%20West%2C%20Mumbai%2C%20Maharashtra%20400076!5e0!3m2!1sen!2sin!4v1685301428217!5m2!1sen!2sin"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        )}
        {mapIndex === 3 && (
          <iframe
            className="map-frame"
            title="Map 3"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3769.918155377036!2d72.9184341430664!3d19.11124610900879!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c7ea348f1cd3%3A0x9f0d02f9fba7f991!2sKAILASH%20BUSINESS%20PARK%2C%20Park%20Site%20Rd%2C%20HMPL%20Surya%20Nagar%2C%20Vikhroli%20West%2C%20Mumbai%2C%20Maharashtra%20400076!5e0!3m2!1sen!2sin!4v1685301428217!5m2!1sen!2sin"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        )}
      </div>
    </div>
  );
};

export default MapComponent;
