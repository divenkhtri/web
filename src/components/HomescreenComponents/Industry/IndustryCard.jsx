import React from "react";
import "../../../styles/Industry.css";

import bank from "../../../assets/Images/IndustrySection/bank.webp";
import transportation from "../../../assets/Images/IndustrySection/transportation.webp";
import pharma from "../../../assets/Images/IndustrySection/pharma.webp";
import manufacturing from "../../../assets/Images/IndustrySection/manufacturing.webp";
import retail from "../../../assets/Images/IndustrySection/retail.webp";
import telecom from "../../../assets/Images/IndustrySection/telecom.webp";
import { Link } from "react-router-dom";

const IndustryCard = () => {
  const cards = [
    {
      image: bank,
      title: "Banking, Insurance & Financial Services",
      description:
        "RGS-Tech offers innovative technological solutions for banking, insurance, and financial services. With deep industry expertise, we empower clients to enhance efficiency.",
      link: "/industry/banking-insurance-and-financial-institution",
    },
    {
      image: pharma,
      title: "Healthcare, Pharma & Life Science",
      description:
        "Revolutionizing travel, transportation, and hospitality industries with innovative solutions, seamless experiences, and unparalleled customer service.",
      link: "/industry/healthcare-pharma-and-life-science",
    },
    {
      image: transportation,
      title: "Travel, Transportation & Hospitality",
      description:
        "Transforming healthcare, pharma & life sciences with innovative solutions for better patient care and accelerated medical advancements.",
      link: "/industry/travel-transportation-and-hospitality",
    },
    {
      image: retail,
      title: "Retail, Consumer Products & Goods",
      description:
        "Empowering retail, consumer products, and goods industries with digital innovation, personalized experiences, and sustainable solutions",
      link: "/industry/retail-and-conumer-goods",
    },
    {
      image: manufacturing,
      title: "Industrial Goods & Manufacturing",
      description:
        "Driving industrial goods and manufacturing sectors forward with advanced technologies, efficient processes, and sustainable solutions.",
      link: "/industry/industrial-goods-and-manufacturing",
    },
    {
      image: telecom,
      title: "Telecommunication & Media",
      description:
        "Revolutionizing the telecommunication and media industries with cutting-edge technology, seamless connectivity, and engaging content.",
      link: "/industry/telecommunication-and-media",
    },
  ];

  return (
    <>
      <div className="abt-heading">
        <h1 className="abt-heading-indus">Key Industries and Verticals</h1>
      </div>
      <div className="home-indus-card-layout">
        <div className="home-indus-card-row">
          {cards.slice(0, 3).map((card, index) => (
            <Link to={card.link}>
              <div className="home-indus-card" key={index}>
                <img
                  src={card.image}
                  alt="Card"
                  className="home-indus-card-image"
                />
                <h3 className="home-indus-card-title">{card.title}</h3>
                <p className="home-indus-card-description">
                  {card.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
        <div className="home-indus-card-row">
          {cards.slice(3, 6).map((card, index) => (
            <Link to={card.link}>
            <div className="home-indus-card" key={index}>
              <img
                src={card.image}
                alt="Card"
                className="home-indus-card-image"
              />
              <h3 className="home-indus-card-title">{card.title}</h3>
              <p className="home-indus-card-description">{card.description}</p>
            </div></Link>
          ))}
        </div>
      </div>
      <div className="abt-heading">
        <p className="lower_desc-paddding">
          Solutions Customized for each Industry
        </p>
      </div>
    </>
  );
};

export default IndustryCard;
