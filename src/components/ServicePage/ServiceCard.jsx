import React from "react";
import "../../styles/ServicePage/Service.css";
import dot from "../../assets/Images/Services/dots.svg";
import dataEng from "../../assets/Images/Services/dataEng.svg";
import dataIcon from "../../assets/Images/Services/dataIcon.svg";
const ServiceCard = () => {
  return (
    <>
      <div className="service__section__card">
        <div className="service__section__card__image-container">
          <img
            src={dot}
            alt="Dot Pattern"
            className="service__section__card__dot-pattern"
          />
          <div className="service__section__card__div__image2">
            <img
              src={dataEng}
              alt="Imag2"
              className="service__section__card__image2"
            />
          </div>
          <div className="service__section__card__div__image1">
            <img
              src={dataIcon}
              alt="Image1"
              className="service__section__card__image1"
            />
          </div>
        </div>
        <div className="service__section__card__content">
          <h2 className="service__section__card__title">
            Data Engineering & Solution
          </h2>
          <p className="service__section__card__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            placerat arcu eu dui ullamcorper, vitae maximus odio consequat. Duis
            rhoncus cursus leo, sed ullamcorper ex mattis eu.
          </p>
          <a href="">App Development and Support</a>
          <a href="">App Development and Support</a>
          <a href="">App Development and Support</a>
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
