import React from "react";
import "../../../styles/Industry/BankingInsurance/BankingSuccesStory.css";
import { Link } from "react-router-dom";
const PharmaSuccesStory = () => {
  return (
    <>
     <div className="banking-story-container">
        <div className="banking-story-row">
          <div className="banking-story-col">
            <h1 className="banking-story-h1">Work Examples</h1>
            <p className="banking-story-desc">
              We have partnered with some of the world’s most prominent brands.
              Here are just a few examples of the work that we’ve done with our
              amazing clients.
            </p>
            <Link to="/contact">
              <button className="banking-story-button">Contact Us</button>
            </Link>
          </div>
          <div className="banking-story-col">
            <Link to="/success-story/saas-provider  ">
              <div className="banking-story-card banking-story-card1">
                <h5 className="banking-story-h5">
                  Saas-Provider for Public Policy
                </h5>
              </div>
            </Link>
            <Link to={'/success-story/cloud-platform-for-car-rental'}>
              <div className="banking-story-card banking-story-card2">
                <h5 className="banking-story-h5">
                  Cloud Platform for Car Rental Business
                </h5>
              </div>
            </Link>
            <Link to={"/success-story/centralized-coaching-platform"}>
              <div className="banking-story-card banking-story-card3">
                <h5 className="banking-story-h5">
                  Centralized Coaching Platform
                </h5>
              </div>
            </Link>
            <Link to={"/success-story/big-data-platform"}>
              <div className="banking-story-card banking-story-card4">
                <h5 className="banking-story-h5">
                  Big Data Platform for Travel Agency
                </h5>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default PharmaSuccesStory;
