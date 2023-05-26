import React from "react";
import "../../styles/SuccessStory/StoryHeader.css";
import heroBackground from "../../assets/Images/SuccessStory/storyBg.jpg";
import { Link } from "react-router-dom";
const StoryHeader = () => {
  return (
    <>
      <div className="story-header-banner">
        <div className="story-header-overlay"></div>
        <img
          src={heroBackground}
          alt="Hero Background"
          className="story-header-background"
        />
        <div className="story-header-content">
          <div className="story-header-heading-tag">
            <p>Cloud Engineering and Platforms</p>
          </div>
          <h1 className="story-header-title">
            A core-tech approach for effective business <br /> transformation!
          </h1>
          <div className="story-header-bottom-tag">
            <p>Build your digital fortress with us!</p>
          </div>

          <Link to="/contact" className="story-header-bottom-button">
            <button>Contact Us</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default StoryHeader;
