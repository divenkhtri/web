import React from "react";
import "../../styles/AboutUs/AboutServiceSection.css";
import mission from "../../assets/Images/AboutUs/our mission.svg";
import focus from "../../assets/Images/AboutUs/our focus.webp";
import vision from "../../assets/Images/AboutUs/our vision.webp";

const AboutServicesSection = () => {
  return (
    <>
      <div className="our-values-body">
        <div className="our-values-container-stack">
          <div className="our-values-container">
            <div className="our-values-image">
              <img src={vision} alt="Our Vision" />
            </div>
            <div className="our-values-text">
              <h3>Our Vision</h3>
              <span>Empowering Your Success through Technology</span>
              <p>
                To be unique in every part of the business we operate and
                provide exceptional value. We specialize in helping organize
                eliminate blind spots by uncovering data and business insights,
                accelerating digital transformation, leveraging automation for
                optimization and ROI and taking a quantum leap in growth .
              </p>
            </div>
          </div>
          <div className="our-values-container">
            <div className="our-values-text">
              <h3>Our Focus</h3>
              <span>Empowering Your Success through Technology</span>
              <p>
                At Rhombus Global Services, we deliver data, digital and cloud
                technology transformation and services from strategy to
                implementation. We enable innovative solutions across variety of
                industry segments and cater to organizations of various sizes.
                We believe in long-term partnerships, and our services are
                designed for value and the specific needs of our clients
              </p>
            </div>
            <div className="our-values-image">
              <img src={focus} alt="Our Mission" />
            </div>
          </div>
          <div className="our-values-container">
            <div className="our-values-image">
              <img src={mission} alt="Our Values" />
            </div>
            <div className="our-values-text">
              <h3>Our Mission</h3>
              <span>Delivering Excellence in Technology Solutions</span>
              <p>
                Our mission is to deliver excellence in technology solutions.
                Through innovative and customized services, we empower
                businesses and individuals to achieve their goals. With a
                commitment to exceptional service and continuous improvement, we
                strive to be the trusted partner that helps our clients thrive
                in the digital world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutServicesSection;
