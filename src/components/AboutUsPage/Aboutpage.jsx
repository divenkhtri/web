import React from "react";

import "./Aboutpage.css";


import OurTeam from "./OurTeam";

const Aboutpage = () => {
  return (
    
      <div className="aboutus_vision_body">
        <h1 className="our_focs_page">Our Focus</h1>
        <p className="aboutus_p_data">
          At Rhombus Global Services, we deliver data, digital and cloud
          technology transformation and services from strategy to
          implementation. We enable innovative solutions across variety of
          industry segments and cater to organizations of various sizes. We
          believe in long-term partnerships, and our services are designed for
          value and the specific needs of our clients
        </p>
      

      <br />
      <br />
      <br />

      {/* Our Approach Section */}

      <div className="aboutUs_story-banner_ourapproach">
        <img
          className="image_aboutus_ourapproach"
          src=''
          alt=""
        />
        <div className="aboutUs_story-overlay_ourapproach"></div>

        <div className="aboutUs_story-content_ourapproach">
          <h1 className="aboutUs_story-title_ourapproach">Our Approach</h1>
          <br />

          <div className="aboutus_desc_body">
            <p className="aboutUs_story-description_ourapproach">
              At Rhombus Global Services, we prioritize clients, deliver
              tailored solutions. Data-driven insights inform decisions, uncover
              opportunities. We guide digital transformation, fuel innovation,
              optimize processes. Automation and optimization streamline
              workflows, drive growth..
            </p>
          </div>

          <br />
          <br />
        </div>

        <div className="ourapp_card-row">
          <div className="ourapp_card">
            <p className="ourapprch_p">Agile and Iterative Approach</p>
          </div>
          <div className="ourapp_card">
            <p className="ourapprch_p">Quality that Delights</p>
          </div>

          <div className="ourapp_card">
            <p className="ourapprch_p">Inclusion,Diversity and Respect</p>
          </div>
        </div>

        <div className="ourapp_card-row">
          <div className="ourapp_card">
            <p className="ourapprch_p">Customer Centricity and Empathy</p>
          </div>

          <div className="ourapp_card">
            <p className="ourapprch_p">Sustained Innovation and Value</p>
          </div>

          <div className="ourapp_card">
            <p className="ourapprch_p">Ownership,Agility and Flexibility</p>
          </div>
        </div>
      </div>

      {/* Our Vision */}

      <h1 className="aboutUs_story-title_ourvision">Our Vision</h1>
      <p className="aboutus_p_data">
        {" "}
        To be unique in every part of the business we operate and provide
        exceptional value. We specialize in helping organize eliminate blind
        spots by uncovering data and business insights, accelerating digital
        transformation, leveraging automation for optimization and ROI and
        taking a quantum leap in growth.
      </p>
      <br />
      <br />
      <br />

      <OurTeam />

     
    </div>
  );
};

export default Aboutpage;
