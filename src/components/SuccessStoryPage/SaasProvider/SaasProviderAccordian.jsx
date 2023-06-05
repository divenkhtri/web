import React, { useState } from "react";
import "../../../styles/SuccessStory/Accordian.scss";

const SaasProviderAccordion = () => {
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
      question:
        "How did the research conducted contribute to the development of the SaaS solution?",
      answer:
        "The extensive research allowed us to gain deep insights into the challenges faced by lawmakers and officials in the legislative process. This knowledge guided the development of the SaaS solution, ensuring that it addressed the pain points and provided valuable functionalities to streamline their workflows.",
    },
    {
      id: "accordion-button-2",
      question:
        "What were the key technologies utilized in the SaaS solution?",
      answer:
        "The SaaS solution leveraged advanced technologies such as Natural Language Processing (NLP) and Artificial Intelligence (AI) to enhance search capabilities, contextual understanding, and automated bill version comparisons. Additionally, Microsoft Teams and Azure infrastructure were utilized for seamless integration and reliable hosting.",
    },
    {
      id: "accordion-button-3",
      question: "How did the integration with existing systems and platforms benefit the users?",
      answer:
        "The integration with systems like Microsoft Teams and SharePoint repositories provided lawmakers and officials with easy access to relevant documents, collaboration tools, and repository searching capabilities. This seamless integration facilitated efficient information exchange, streamlined workflows, and enhanced collaboration among stakeholders.",
    },
    {
      id: "accordion-button-4",
      question: "How did the SaaS solution empower lawmakers and officials to drive impactful legislative changes?",
      answer:
        "The SaaS solution enabled lawmakers and officials to navigate through vast amounts of legislative information, compare bill versions, and track amendments in a user-friendly and intuitive manner. By providing powerful search functionalities and facilitating collaboration, the solution empowered users to make informed decisions, driving impactful legislative changes and positively influencing the governance process.",
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

export default SaasProviderAccordion;
