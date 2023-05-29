import React from "react";
import "../../../styles/Industry/BankingInsurance/BankingSuccesStory.css";
const PharmaSuccesStory = () => {
  return (
    <>
       <div className="banking-story-container">
        <div className="banking-story-row">
          <div className="banking-story-col">
            <h1 className="banking-story-h1">Work Examples</h1>
            <p className="banking-story-desc">We have partnered with some of the world’s most prominent brands. Here are just a few examples of the work that we’ve done with our amazing clients.</p>
            <button className="banking-story-button">Contact Us</button>{" "}
          </div>
          <div className="banking-story-col">
            <div className="banking-story-card banking-story-card1">
              <h5 className="banking-story-h5">Success Story1</h5>
              <p className="banking-story-desc2">Success Story description</p>
            </div>
            <div className="banking-story-card banking-story-card2">
              <h5 className="banking-story-h5">Success Story2</h5>
              <p className="banking-story-desc2">Success Story description</p>
            </div>
            <div className="banking-story-card banking-story-card3">
              <h5 className="banking-story-h5">Success Story2</h5>
              <p className="banking-story-desc2">Success Story description</p>
            </div>
            <div className="banking-story-card banking-story-card4">
              <h5 className="banking-story-h5">Success Story3</h5>
              <p className="banking-story-desc2">Success Story description</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PharmaSuccesStory;
