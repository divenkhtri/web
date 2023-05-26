import React from "react";
import "../../styles/Industry/IndustrySection.css";
import bank from "../../assets/Images/IndustrySection/bank.jpg";
import pharma from "../../assets/Images/IndustrySection/pharma.jpg";
import travel from "../../assets/Images/IndustrySection/transportation.jpg";
import retail from "../../assets/Images/IndustrySection/retail.jpg";
import industrialGoods from '../../assets/Images/IndustrySection/manufacturing.jpg'
import telecom from '../../assets/Images/IndustrySection/telecom.jpg'
import { Link } from "react-router-dom";

const cardsData = [
  {
    id: 1,
    image: bank,
    title: "Banking, Insurance & Financial Institution",
    description: "Description for Card 1",
    link: "/industry/banking-insurance-and-financial-institution",
  },
  {
    id: 2,
    image: pharma,
    title: "Healthcare, Pharma & Life Science",
    description: "Description for Card 2",
    link: "/industry/healthcare-pharma-and-life-science",
  },
  {
    id: 3,
    image: travel,
    title: "Travel, Transportations & Hospitality",
    description: "Description for Card 2",
    link: "/industry/travel-transportation-and-hospitality",
  },
  {
    id: 4,
    image: retail,
    title: "Retail & Consumer Goods",
    description: "Description for Card 2",
    link: "/industry/retail-and-conumer-goods",
  },
  {
    id: 5,
    image: industrialGoods,
    title: "Industrial Goods & Manufacturing",
    description: "Description for Card 2",
    link: "/industry/industrial-goods-and-manufacturing",
  },
  {
    id: 6,
    image: telecom,
    title: "Telecom & Media",
    description: "telecommunication-and-media",
    link: "/industry/telecommunication-and-media",
  },
  // Add more card objects here
];

const IndustrySection = () => {
  return (
    <>
      <div className="industry-pg-heading">
        <h1>Industry We Serve</h1>
      </div>
      <div className="industry-pg-container">
        <div className="industry-pg-card-container">
          {cardsData.map((card) => (
            <Link to={card.link} key={card.id}>
              <div className="industry-pg-card">
                <div className="industry-pg-slide slide1">
                  <div className="industry-pg-content">
                    <div className="industry-pg-icon">
                      <h3 className="industry-pg-title">{card.title}</h3>
                      <img src={card.image} alt={card.title} />
                    </div>
                  </div>
                </div>
                <div className="industry-pg-slide slide2">
                  <div className="industry-pg-content">
                    <h3>{card.title}</h3>
                    <p>{card.description}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default IndustrySection;
