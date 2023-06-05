import React from "react";
import "../../styles/AboutUs/AboutTestimonial.css"; // Import the CSS file for styling
import img1 from "../../assets/Images/Contact/img1.jpg";

const AboutTestimonial = () => {
  return (
    <>
    <section className="testimonial__main__bg">
      <main className="testimonial__main">
        <div className="testimonial__card-heading">
          <h1>Our Team</h1>
          <p>The Dream Team: Assembling Unparalleled Excellence</p>
        </div>
        <div className="testimonial__body">
          <div>
            <div className="testimonial__card">
              <img src={img1} alt="" /> 
              <div className="team__name">Vinod Rao</div>
              <p className="team__position">Position</p>
            </div>
          </div>
          <div>
            <div className="testimonial__card">
              <img src={img1} alt="" />
              <div className="team__name">Manish</div>
              <p className="team__position">Position</p>
            </div>
          </div>
          <div>
            <div className="testimonial__card">
              <img src={img1} alt="" />
              <div className="team__name">Roshani Andotra</div>
              <p className="team__position">Position</p>
            </div>
          </div>
        </div>
      </main></section>
    </>
  );
};

export default AboutTestimonial;
