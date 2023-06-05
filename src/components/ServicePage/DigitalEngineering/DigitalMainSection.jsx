import React from "react";
import { MdArrowForwardIos } from "react-icons/md";
import DigitalSectorHeading from "./DigitalSectorHeading";
import "../../../styles/ServicePage/DigitalEngineering/DigitalMainSection.css";
const DigitalMainSection = () => {
  const cards = [
    {
      title: "Customer Experience Management",
      description:
        "Leverage Data Insights for Actionable Improvements: Data is a valuable asset when it comes to understanding your customers and improving their experience. Our customer experience management approach incorporates data analysis to gain insights into customer preferences, pain points, and behaviors. With these actionable insights, we help you make data-driven decisions that enhance your overall customer experience strategy.",
    },
    {
      title: "Product Design and Engineering",
      description:
        "Human-Centered Design for Enhanced User Experiences: User experience is at the forefront of our product design and engineering approach. We prioritize human-centered design principles to create products that not only look visually appealing but also provide intuitive and engaging user experiences. By understanding your target audience and their needs, we design products that resonate and deliver exceptional user satisfaction.",
    },
    {
      title: "App Development and Support",
      description:
        "Collaborative Partnership for App Success: We believe in building strong partnerships with our clients throughout the app development journey. Our team works closely with you, involving you in the decision-making process and incorporating your feedback to ensure the app aligns with your vision. Together, we can create powerful and user-friendly apps that meet your users' needs and surpass their expectations.",
    },
  ];
  return (
    <>
      <section className="digital-main-section">
        <div className="digital-main-section-container">
          <div className="digital-main-section-heading">
            <h1>What we Offer</h1>
          </div>
          <div className="digital-main-section-description">
            <p>
              At RGS, we offer comprehensive digital engineering and
              transformation services to empower businesses to thrive in the
              digital age. Our expertise lies in leveraging cutting-edge
              technologies and industry best practices to drive innovation,
              enhance efficiency, and achieve digital transformation goals.
              <br />
              <br />
              With our digital engineering services, we help businesses design,
              develop, and deploy robust software solutions tailored to their
              unique needs. Our skilled engineers utilize agile methodologies
              and modern development frameworks to create scalable and
              user-centric applications. From web and mobile applications to
              custom software development, we deliver high-quality solutions
              that align with your business objectives.
            </p>
          </div>
        </div>
      </section>
      <section>
        <main className="digital-main-section">
          <div className="digital-main-card-container">
            {cards.map((card, index) => (
              <div className="digital-mains-cards" key={index}>
                <div className="digital-main-card-border">
                  <div className="digital-main-card-title">{card.title}</div>
                  <div className="digital-main-card-icon--descp">
                    <div className="digital-main-card-icon">
                      <MdArrowForwardIos size={20} />
                    </div>
                    <div className="digital-main-card-description">
                      <p>{card.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </section>
      <DigitalSectorHeading />
    </>
  );
};

export default DigitalMainSection;
