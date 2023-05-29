import React, { useState, useEffect } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import slide1 from "../assets/Images/HeroBanner/hero1.jpg";
import slide2 from "../assets/Images/HeroBanner/hero2.jpg";
import slide3 from "../assets/Images/HeroBanner/hero3.jpg";
import slide4 from "../assets/Images/HeroBanner/hero4.jpg";
import "../styles/HeroSlider.css";

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      heading: "Empowering Our Customer for Future",
      subHeading:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu augue ut lectus arcu bibendum.",
      image: slide1,
    },
    {
      heading: "Eliminate Blind Spot",
      subHeading:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu augue ut lectus arcu bibendum.",
      image: slide2,
    },
    {
      heading: "Achieve Digital Transformation",
      subHeading:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu augue ut lectus arcu bibendum.",
      image: slide3,
    },
    {
      heading: "Drive Growth & ROI",
      subHeading:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu augue ut lectus arcu bibendum.",
      image: slide4,
    },
  ];

  // Auto slide change logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="hero-banner">
      <div className="hero-banner-carousel">
        {slides.map((slide, i) => (
          <div
            className={`hero-banner-slide ${
              i === currentSlide ? "hero-banner-active" : ""
            }`}
            key={i}
          >
            <div className="hero-banner-image">
              <img src={slide.image} alt="" />
            </div>
            <div className="hero-banner-content">
              <div className="hero-banner-text">
                <h3>{slide.heading}</h3>
                <p>{slide.subHeading}</p>
                <div className="hero-banner-btn">
                  <button className="hero-banner-btn1">
                    Services
                    <AiOutlineArrowRight className="hero-banner-icon" />
                  </button>
                  <button className="hero-banner-btn2">Learn More</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="hero-banner-pagination">
        {slides.map((slide, i) => (
          <span
            key={i}
            className={`hero-banner-dot ${
              i === currentSlide ? "hero-banner-active" : ""
            }`}
            onClick={() => setCurrentSlide(i)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
