/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useRef } from "react";
import "../../../styles/SuccessStory.css"; // this is a  CSS import file
import bank from "../../../assets/Images/IndustrySection/bank.jpg";

const SuccessStory = () => {
  const [start, setStart] = useState(true);
  const [end, setEnd] = useState(false);
  const sliderRef = useRef(null);

  const handleScroll = () => {
    const { scrollLeft, scrollWidth, offsetWidth } = sliderRef.current;
    if (scrollLeft === 0) {
      setStart(true);
    } else {
      setStart(false);
    }

    if (Math.abs(scrollWidth - offsetWidth - scrollLeft) < 5) {
      setEnd(true);
    } else {
      setEnd(false);
    }
  };

  const handlePrevious = () => {
    sliderRef.current.scrollBy({
      left: sliderRef.current.offsetWidth * -1,
      behavior: "smooth",
    });
  };

  const handleNext = () => {
    sliderRef.current.scrollBy({
      left: sliderRef.current.offsetWidth,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="abt-heading">
        <h1>Success Story</h1>
        <p>
          Hear from our satisfied clients and discover how we helped them
          achieve successs
        </p>
      </div>
      <div className="success-slider" x-data="{start: true, end: false}">
        <div
          className="success-slider__content"
          ref={sliderRef}
          onScroll={handleScroll}
        >
          <div className="success-slider__item">
            <img
              className="success-slider__image"
              src="https://images.unsplash.com/photo-1599422314077-f4dfdaa4cd09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODR8fGFic3RyYWN0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
              alt=""
            />
            <div className="success-slider__info">
              <h2>
                A CENTRALIZED LEARNING AND COACHING PLATFORM FOR RISING
                PROFESSIONALS
              </h2>
            </div>
          </div>
          <div class="success-slider__item">
            <img class="success-slider__image" src={bank} alt="" />
            <div class="success-slider__info">
              <h2>
                CLOUD PLATFORM FOR A MULTI-BRAND CAR RENTAL LICENSEE ASSOCIATION
              </h2>
            </div>
          </div>
          <div class="success-slider__item">
            <img class="success-slider__image" src={bank} alt="" />
            <div class="success-slider__info">
              <h2>DIGITAL MARKETPLACE FOR A FINANCIAL SERVICES COMPANY</h2>
            </div>
          </div>
          <div class="success-slider__item">
            <img class="success-slider__image" src={bank} alt="" />
            <div class="success-slider__info">
              <h2>PUBLIC POLICY GOVERNING TECHNOLOGY SAS PLATFORM FOR GOVERNMENT AGENCIES</h2>
            </div>
          </div>
          <div class="success-slider__item">
            <img class="success-slider__image" src={bank} alt="" />
            <div class="success-slider__info">
              <h2>This is a card</h2>
            </div>
          </div>
        </div>
        <div className="success-slider__nav">
          <button
            className={`success-slider__nav__button ${
              start ? "" : "success-slider__nav__button--active"
            }`}
            onClick={handlePrevious}
          >
            Previous
          </button>
          <button
            className={`success-slider__nav__button ${
              end ? "" : "success-slider__nav__button--active"
            }`}
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default SuccessStory;
