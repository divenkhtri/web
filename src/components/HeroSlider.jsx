import React, { useState, useEffect } from "react";
import { AiOutlineArrowRight } from 'react-icons/ai';
import slide1 from "../assets/lotties/empower.webp";
import slide2 from "../assets/lotties/blindSpot.webp";
import slide3 from "../assets/lotties/digital.webp";
import slide4 from "../assets/lotties/131537-business-animation.json";
import "../styles/HeroSlider.css";

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0); // State to track the current slide

  // Array of slide data containing heading, sub-heading, and corresponding images
  const slides = [
    {
      heading: "Empowering Our Customer for Future",
      subHeading:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu augue ut lectus arcu bibendum.",
      image: slide1,
    },
    {
      heading: "Eliminate Blind Spot",
      subHeading: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu augue ut lectus arcu bibendum.",
      image: slide2,
    },
    {
      heading: "Achieve Digital Transformation",
      subHeading: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu augue ut lectus arcu bibendum.",
      image: slide3,
    },
    {
      heading: "Drive Growth & ROI",
      subHeading: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu augue ut lectus arcu bibendum.",
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
      <div className="carousel">
        {slides.map((slide, i) => (
          <div
            className={`slide ${i === currentSlide ? "active" : ""}`}
            key={i}
          >
            <div className="content">
              <div className="text">
                <h3>{slide.heading}</h3>
                <p>{slide.subHeading}</p>
                <div className="hero-banner-btn">
                  <button className="hero-banner-btn1">Services <AiOutlineArrowRight className="hero-banner-icon"/></button>
                  <button className="hero-banner-btn2">Learn More</button>
                </div>
              </div>

              <div className="image">
                <img src={slide.image} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination">
        {slides.map((slide, i) => (
          <span
            key={i}
            className={`dot ${i === currentSlide ? "active" : ""}`}
            onClick={() => setCurrentSlide(i)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
