import React, { useState } from "react";
import "../../../styles/SuccessStory/Accordian.scss";

const CoachingPlatformAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  const questions = [
    {
      id: "accordion-button-1",
      question: "What was the main objective of the project?",
      answer:
        "The main objective of the project was to implement a centralized coaching platform, known as the Individual Development Plan (IDP), that seamlessly integrated various application personas and provided individuals with a comprehensive suite of tools, coaching services, and resources for personal and professional development.",
    },
    {
      id: "accordion-button-2",
      question:
        "How was the challenge of integrating multiple SaaS platforms addressed?",
      answer:
        "The challenge of integrating multiple SaaS platforms was addressed through custom API integration. By leveraging APIs, we established seamless communication and data transfer between the IDP and platforms like HubSpot, Higher Logic, and Elevate, ensuring a cohesive user experience and data exchange.",
    },
    {
      id: "accordion-button-3",
      question:
        "How was user authentication and security ensured within the platform?",
      answer:
        "User authentication and security were ensured through the implementation of a secure Single Sign-On (SSO) mechanism. This mechanism allowed users to have a unified login experience across different applications and provided robust authentication protocols to protect user data and ensure secure access to the platform.",
    },
    {
      id: "accordion-button-4",
      question: `How was ongoing support and improvement handled after the platform's development?`,
      answer:
        "After the platform's development, ongoing support and improvement were provided through regular bi-weekly development updates. These updates allowed for iterative improvements based on user feedback, ensuring that the platform remained dynamic, responsive, and aligned with the evolving needs of its users. Additionally, production support was offered, including infrastructure management and troubleshooting, to ensure the platform's smooth operation.",
    },
  ];

  return (
    <div className="accordion-body">
      <div className="accordion-container">
        <h2>Frequently Asked Questions</h2>
        <div className="accordion">
          {questions.map((item, index) => (
            <div className="accordion-item" key={item.id}>
              <button
                id={item.id}
                aria-expanded={activeIndex === index ? "true" : "false"}
                onClick={() => toggleAccordion(index)}
              >
                <span className="accordion-title">{item.question}</span>
                <span className="accordion-icon" aria-hidden="true"></span>
              </button>
              <div className="accordion-content">
                {activeIndex === index && <p>{item.answer}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoachingPlatformAccordion;
