import React from "react";
import "../../styles/AboutUs.css"; // CSS file for styling
import about from '../../assets/Images/AboutUs/aboutHome.jpg'
import team from '../../assets/Images/AboutUs/teamABoutHome.jpg'
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <section className="about-section">
      <div className="abt-heading">
        <h1>About Us</h1>
      </div>
      <div className="container">
        <div className="flex-container">
          <div className="content-column">
            <div className="inner-column">
              <div className="abt-heading">
                <h2>Comprehensive Data & Digital Solutions for Your Business</h2>
              </div>
              <div className="sec-title"></div>
              <div className="text">
              At Rhombus Global Services, our focus is on delivering comprehensive data, digital, and cloud technology transformation services that cover the entire spectrum from strategy development to successful implementation. We understand the unique challenges faced by businesses in today's rapidly evolving digital landscape, and our goal is to provide innovative solutions that drive growth, efficiency, and success.
              <br/>
              <br/>
              Our expertise extends across a variety of industry segments, allowing us to cater to organizations of all sizes and diverse needs. Whether it's a small startup looking to establish a robust digital presence or a large enterprise aiming to optimize its operations through data-driven insights, we have the knowledge and experience to deliver tailored solutions.
              <br/>
              <br/>
              With a team of experts who are dedicated to staying at the forefront of emerging technologies and industry trends, we are able to deliver innovative solutions that drive digital transformation and unlock new opportunities for our clients. Our commitment to excellence, continuous improvement, and customer satisfaction is what sets us apart, making us the trusted partner for organizations seeking reliable, effective, and future-ready technology services.
              </div>

              <Link to="/about-us" className="theme-btn btn-style-three">
                Learn More
              </Link>
            </div>
          </div>

          <div className="image-column">
            <div className="inner-column" data-wow-delay="0ms" data-wow-duration="1500ms">
              <div className="image">
                <img src={team} alt="" />
              </div>
            </div>
        
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
