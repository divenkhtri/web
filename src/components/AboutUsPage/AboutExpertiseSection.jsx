import React from "react";
import "../../styles/AboutUs/AboutExpertiseSection.css"; // Import the CSS file for styling
import hyChooseUs from "../../assets/Images/AboutUs/whyChooseUs.webp";

const AboutExpertiseSection = () => {
  return (
    <div className="main___bg">
      <div className="why__choose__us__section">
        <div className="why__choose__us__text__container">
          <div className="why__choose__us__heading">
            <h1>Why Choose Us</h1>
          </div>
          <div className="why__choose__us__description">
            <div className="why__choose__us__description__1">
              <span>Experience and Expertise:</span>
              <p>
                RGS Tech is a trusted technology solutions provider with years
                of experience and a team of skilled professionals. Our
                customer-centric approach ensures that we
                <div className="why__choose__us__description__1__span">
                  prioritize your unique requirements, working closely with you
                  to develop customized solutions aligned with your business
                  objectives. With a focus on innovation and cutting-edge
                  solutions, we give you a competitive edge in your industry.
                </div>
              </p>
            </div>
            <br />
            <div className="why__choose__us__description__2">
              <span>Innovation and Cutting-Edge Solutions</span>
              <p>
                At RGS Tech, we stay at the forefront of technological
                advancements, continuously exploring the latest innovations in
                the industry. We are passionate about leveraging cutting-edge
                solutions to provide our clients with a competitive edge. Our
                team of dedicated professionals strives to find unique
                approaches that address your technology challenges and enhance
                your business operations. By partnering with us, you gain access
                to innovative solutions that drive growth, efficiency, and
                success.
              </p>
            </div>
          </div>
        </div>

        <div className="why__choose__us__image__container">
          <div className="why__choose__us__image__wrapper">
            <img
              src={hyChooseUs}
              alt="Why Choose Use"
              className="why__choose__us__image__wrapper__img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutExpertiseSection;
