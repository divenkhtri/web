import React, { useState } from 'react';
import '../../../styles/SuccessStory/Accordian.scss';

const BigDataAccordion = () => {
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
        id: 'accordion-button-1',
        question: 'What were the main business challenges that prompted the implementation of the Big Data Platform?',
        answer: 'The main business challenges were the lack of a unified customer view, multiple unstructured data sources, fragmented ownership and touch points, the need for data insights for decision-making, and a manual reporting process.',
      },
      {
        id: 'accordion-button-2',
        question: 'What were the solutions provided by the Big Data Platform?',
        answer: 'The Big Data Platform offered a scalable architecture, common connectors for integrating disparate data sources, configurable data transformation processes, intelligent dashboards, and visualization tools. It also provided increased revenue and profitability, a real-time unified view of the customer, and intelligent reporting and analytics.',
      },
      {
        id: 'accordion-button-3',
        question: 'What were the end results achieved through the implementation of the Big Data Platform?',
        answer: 'The end results included increased revenue and profitability, a 100% scalable architecture, a real-time unified view of the customer, and intelligent reporting and analytics. The platform enabled the client to gain actionable insights, enhance decision-making, and improve operational efficiency.',
      },
      {
        id: 'accordion-button-4',
        question: 'What were the main challenges faced during the implementation of the Big Data Platform?',
        answer: 'The main challenges included building dynamic attributes to cater to the needs of different SaaS apps, handling single sign-on (SSO) from a single IDP for third-party integrations, accommodating diverse requirements and data structures, and ensuring data security and privacy throughout the integration process. However, these challenges were successfully overcome through careful planning, strategic decision-making, and collaboration with the client.',
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
  

export default BigDataAccordion;
