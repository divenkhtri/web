import React, { useState } from "react";
import "../../../styles/SuccessStory/Accordian.scss";

const CloudPlatformAccordion = () => {
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
        "What were the main challenges faced by the multi-brand car rental licensee association before implementing the Cloud Platform?",
      answer:
        "The challenges included inconsistent and insufficient data, lack of standard formatting and reporting, a manual and labor-intensive process, and the need for automation and validation logic.",
    },
    {
      id: "accordion-button-2",
      question: "How did the Cloud Platform solution address these challenges?",
      answer:
        "The Cloud Platform provided an online process for efficient and consistent reconciliation of charges, enabled analysis of revenue and expenses, facilitated accurate tracking of operating costs and profitability, streamlined the billing process for miscellaneous charges, and integrated an ACH gateway for faster payments.",
    },
    {
      id: "accordion-button-3",
      question:
        "What were the key benefits delivered through the implementation of the Cloud Platform?",
      answer:
        "The benefits included business process optimization, reduced labor costs, increased productivity, accurate reconciliation and validation, and integration of an ACH gateway for faster payments.",
    },
    {
      id: "accordion-button-4",
      question:
        "How did the Cloud Platform contribute to the overall success of the multi-brand car rental licensee association?",
      answer:
        "The Cloud Platform enabled the association to achieve operational efficiency, standardized reporting, improved financial management, and data-driven decision-making. It empowered the association to streamline processes, gain valuable insights, and drive profitability for their member companies, ultimately providing a competitive edge in the car rental industry. ",
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

export default CloudPlatformAccordion;
