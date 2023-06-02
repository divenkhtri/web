import React, { useEffect } from "react";
import Swiper from "swiper";

import "swiper/scss/pagination";
import "swiper/scss";
import "swiper/scss/navigation";
import { useRef } from "react";

const AboutNewsBlogAndSuccess = () => {
  const swiperContainerRef = useRef(null);

  useEffect(() => {
    if (swiperContainerRef.current) {
      const swiper = new Swiper(".swiper-container", {
        slidesPerView: 1,
        spaceBetween: 20,
        effect: "fade",
        loop: true,
        speed: 300,
        mousewheel: {
          invert: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          dynamicBullets: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });

      return () => {
        swiper.destroy();
      };
    }
  }, []);

  return (
    <>
      <div className="body__news">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="slider-item swiper-slide">
              <div class="slider-image-wrapper">
                <img
                  class="slider-image"
                  src="https://images.unsplash.com/photo-1498307833015-e7b400441eb8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2600&q=80"
                  alt="SliderImg"
                />
              </div>
              <div class="slider-item-content">
                <h1>Postcards From Italy</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore
                </p>
              </div>
            </div>
            <div class="slider-item swiper-slide">
              <div class="slider-image-wrapper">
                <img
                  class="slider-image"
                  src="https://images.unsplash.com/photo-1491900177661-4e1cd2d7cce2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80"
                  alt="SliderImg"
                />
              </div>
              <div class="slider-item-content">
                <h1>Bunker</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore
                </p>
              </div>
            </div>
            <div class="slider-item swiper-slide">
              <div class="slider-image-wrapper">
                <img
                  class="slider-image"
                  src="https://images.unsplash.com/photo-1482192505345-5655af888cc4?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2600&q=80"
                  alt="SliderImg"
                />
              </div>
              <div class="slider-item-content">
                <h1>Small Mountain</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore
                </p>
              </div>
            </div>
            <div class="slider-item swiper-slide">
              <div class="slider-image-wrapper">
                <img
                  class="slider-image"
                  src="https://images.unsplash.com/photo-1564604761388-83eafc96f668?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=801.2.1&auto=format&fit=crop&w=2167&q=80"
                  alt="SliderImg"
                />
              </div>
              <div class="slider-item-content">
                <h1>Walking On a Dream</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore
                </p>
              </div>
            </div>
          </div>
          <div class="slider-buttons">
            <button class="swiper-button-prev">Prev</button>
            <button class="swiper-button-next">Next</button>
          </div>

          <div class="swiper-pagination"></div>
        </div>
      </div>
    </>
  );
};

export default AboutNewsBlogAndSuccess;
