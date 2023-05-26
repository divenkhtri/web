/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "../../../styles/SuccessStory.css"; // this is a  CSS import file
import bank from "../../../assets/Images/IndustrySection/bank.jpg";

const SuccessStory = () => {
  const cardsData = [
    {
      id: 1,
      title: "Data Analytics for Transportation Firm ",
      description:
        " Our scalable architecture enabled a significant increase in revenue and profitability. With a real-time unified view of the customer, we gained valuable insights and leveraged intelligent reporting and analytics for informed decision-making.",
      image: bank,
      Category: "Data Analytics",
    },
    {
      id: 2,
      title: "Data Analytics for Transportation Firm",
      description:
        "Our scalable architecture enabled a significant increase in revenue and profitability. With a real-time unified view of the customer, we gained valuable insights and leveraged intelligent reporting and analytics for informed decision-making.",
      image: bank,
      Category: "Data Analytics",
    },
    {
      id: 3,
      title: "Data Analytics for Transportation Firm",
      description:
        "Our scalable architecture enabled a significant increase in revenue and profitability. With a real-time unified view of the customer, we gained valuable insights and leveraged intelligent reporting and analytics for informed decision-making.",
      image: bank,
      Category: "Cloud Platform",
    },
  ];

  return (
    <>
      <div className="testimonials-container">
        <h2 className="success_h1">Success Stories</h2>
        <br />
        <p className="testimonials-container-p">
          Hear from our satisfied client and discover how we help them achieve
          success
        </p>
        <br />
        <div className="success-story-card-body">
          <section className="success-story-cards">
            {cardsData.map((card) => (
              <article
                className={"success-story-card .success-story-card--1"}
                key={card.id}
              >
                <div className="success-story-card-image">
                  <img src={card.image} alt={card.title} />
                </div>
                <a className="success-story-card-link">
                  <div className="success-story-card-img--hover"></div>
                </a>
                <div className="success-story-card-info">
                  <span className="success-story-card-category">
                    {card.category}
                  </span>
                  <h3 className="success-story-card-title">{card.title}</h3>
                  <span className="success-story-card--by"></span>
                </div>
              </article>
            ))}
          </section>
        </div>
      </div>
    </>
  );
};

export default SuccessStory;
