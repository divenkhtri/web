import React from "react";
import { MdArrowForwardIos } from "react-icons/md";

import "../../../styles/ServicePage/DigitalEngineering/DigitalMainSection.css";
import { ConsultSectorHeading } from "./ConsultSectorHeading";
const ConsultMainction = () => {
  const cards = [
    {
      title: "Business Consulting",
      description:
        "Collaborative Approach for Lasting Results: Collaboration is at the heart of our consulting philosophy. We believe in working closely with your team to create a collaborative partnership that fosters knowledge exchange and long-term success. Our consultants become an extension of your business, offering ongoing support and guidance to implement strategies, monitor progress, and achieve sustainable growth. ",
    },
    {
      title: "Technology Consulting",
      description:
        "Seamless Integration and Adoption of New Technologies: Implementing new technologies can be a complex process. Our technology consultants guide you through seamless technology integration, ensuring a smooth transition and minimal disruption to your business operations. We also provide training and change management support to ensure successful technology adoption across your organization.",
    },
    {
      title: "Cloud and Network Consulting",
      description:
        "Proactive Monitoring and Support for Network Performance: Ensuring the optimal performance of your network is crucial for uninterrupted business operations. Our network consulting services extend to proactive monitoring and support, where we leverage advanced tools to monitor network performance, identify potential bottlenecks, and address issues promptly. We provide ongoing maintenance and support to keep your network running smoothly.",
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
              At RGS, our consulting and advisory services are designed to
              empower businesses with the knowledge and expertise needed to
              achieve their goals and drive success. We offer a wide range of
              services tailored to meet the unique needs of each client.
              Strategic planning is a core component of our consulting
              offerings. We work closely with businesses to develop effective
              strategies that align with their vision and objectives. Through
              thorough market analysis, competitive landscape assessments, and
              collaborative discussions, we help define strategic priorities and
              action plans that set the foundation for future growth.
              <br/>
              <br/>
              Business process optimization is another key area where our expertise shines. We understand that streamlined and efficient processes are vital for success. Our consultants dive deep into your existing processes, identifying bottlenecks and areas for improvement. With a focus on enhancing operational performance and driving cost savings, we implement best practices and innovative solutions to optimize your business processes.
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
      <ConsultSectorHeading />
    </>
  );
};

export default ConsultMainction;
