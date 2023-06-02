import React from "react";
import "../../styles/SuccessStory/StoryFeaturedBlogs.css";
import saas from "../../assets/Images/SuccessStory/saas.jpg";
import cloudPlatform from "../../assets/Images/SuccessStory/cloud platform.jpg";
import success from "../../assets/Images/SuccessStory/couching.jpg";
import bigData from "../../assets/Images/SuccessStory/bigData.jpg";
import image2 from "../../assets/Images/Services/dots.svg";
import { Link } from "react-router-dom";

const StoryFeaturedBlogs = () => {
  return (
    <>
      <div className="success__story__main_body">
        {/* 1stcard */}
        <div className="success__story__main_container">
          <div className="success__story__main_image-container">
            <img
              src={image2}
              alt="White Background"
              className="success__story__main_white-image"
            />
          </div>
          <div className="success__story__main_overlay-container">
            <div className="success__story__main_image-text-container">
              <img
                src={saas}
                alt="Left Imag"
                className="success__story__main_left-image"
              />
              <div className="success__story__main_text-container">
                <h2>
                  SaaS Providers of public policy collaborative governing
                  technology
                </h2>
                <p>
                  SaaS providers of public policy collaborative governing
                  technology offer software solutions that facilitate
                  collaborative decision-making and governance processes in the
                  public sector. These platforms enable efficient and
                  transparent policymaking.
                </p>
                <button>Read More</button>
              </div>
            </div>
          </div>
        </div>
        {/* 2ndcard */}
        <div className="success__story__main_container2">
          <div className="success__story__main_container">
            <div className="success__story__main_overlay-container2">
              <div className="success__story__main_image-text-container2">
                <div className="success__story__main_text-container2">
                  <h2>
                    Cloud Platform for A Multi Brand Car Rental License
                    Association​
                  </h2>
                  <p>
                    The implementation of a cloud platform for a multi-brand car
                    rental licensee association addressed data inconsistencies,
                    automated processes, and improved financial management for
                    enhanced operational efficiency and profitability.
                  </p>
                  <Link to="/success-story-post">
                    <button className="success__story__main_button">
                      Read More
                    </button>
                  </Link>
                </div>
                <img
                  src={cloudPlatform}
                  alt="Left Imag"
                  className="success__story__main_left-image2"
                />
              </div>
            </div>
            <div className="success__story__main_image-container">
              <img
                src={image2}
                alt="White Background"
                className="success__story__main_white-image"
              />
            </div>
          </div>
        </div>
        {/* 3rdcard */}
        <div className="success__story__main_container">
          <div className="success__story__main_image-container">
            <img
              src={image2}
              alt="White Background"
              className="success__story__main_white-image"
            />
          </div>
          <div className="success__story__main_overlay-container">
            <div className="success__story__main_image-text-container">
              <img
                src={success}
                alt="Left Imag"
                className="success__story__main_left-image"
              />
              <div className="success__story__main_text-container">
                <h2>A Centralized Coaching Platform</h2>
                <p>
                  We implemented a centralized IDP solution, enabling seamless
                  Single Sign-On (SSO) and streamlined user management across
                  multiple applications, overcoming challenges related to
                  dynamic attributes, SSO integration, and data formats. The
                  solution resulted in improved user experience, data
                  synchronization, and scalability.
                </p>
                <button className="success__story__main_button">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* 4thcard */}
        <div className="success__story__main_container2">
          <div className="success__story__main_container">
            <div className="success__story__main_overlay-container2">
              <div className="success__story__main_image-text-container2">
                <div className="success__story__main_text-container2">
                  <h2>Big Data Platform for a Travel Company</h2>
                  <p>
                    The implementation of a big data platform for a travel
                    company addressed challenges related to fragmented customer
                    data, unstructured data sources, and manual reporting
                    processes, delivering unified customer insights and enabling
                    data-driven decision-making.
                  </p>
                  <button className="success__story__main_button">
                    Read More
                  </button>
                </div>
                <img
                  src={bigData}
                  alt="Left Imag"
                  className="success__story__main_left-image2"
                />
              </div>
            </div>
            <div className="success__story__main_image-container">
              <img
                src={image2}
                alt="White Background"
                className="success__story__main_white-image"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StoryFeaturedBlogs;
