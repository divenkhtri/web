import React, { useState, useEffect } from "react";
import slide1 from "../assets/Images/HeroBanner/hero1.jpg";
import slide2 from "../assets/Images/HeroBanner/hero2.jpg";
import slide3 from "../assets/Images/HeroBanner/hero3.jpg";
import slide4 from "../assets/Images/HeroBanner/hero4.jpg";
import "../styles/HeroSlider.scss";

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      heading: "Empowering Our Customer for Future",
      subHeading:
        "Dedicated to empowering our customers for the future by delivering innovative solutions and transformative technologies that drive their success.",
      image: slide1,
    },
    {
      heading: "Eliminate Blind Spot",
      subHeading:
        "We specialize in eliminating blind spots to empower businesses with comprehensive insights and strategic clarity.",
      image: slide2,
    },
    {
      heading: "Achieve Digital Transformation",
      subHeading:
        "Unlock the power of digital transformation and drive business success. Empowering organizations to embrace the digital era and thrive.",
      image: slide3,
    },
    {
      heading: "Drive Growth & ROI",
      subHeading:
        "With our innovative solutions and strategic expertise, we empower companies to thrive in today's dynamic market landscape.",
      image: slide4,
    },
  ];

  // Auto slide change logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
    }, 8000); // Change slide every 7 seconds

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
