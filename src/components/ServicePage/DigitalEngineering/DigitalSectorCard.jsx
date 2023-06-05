import React from "react";
import bg from "../../../assets/Images/Services/dots.svg";
import customer from "../../../assets/Images/Services/sectors/Customer.jpg";
import ProductDesign from "../../../assets/Images/Services/sectors/ProductDesign.jpg";
import AppDevelopment from "../../../assets/Images/Services/sectors/AppDevelopment.jpg";
import "../../../styles/ServicePage/DigitalEngineering/DigitalSectorCard.css";
const DigitalSectorCard = () => {
  return (
    <>
      <section className="digital-eng-bg">
        <div className="digital-eng-main-section">
          <div className="digital-eng-card">
            <div className="digital-eng-card-image">
              <img className="digital-eng-card-image1" src={bg} alt="" />
              <img className="digital-eng-card-image2" src={customer} alt="" />
            </div>
            <div className="digital-eng-card-content">
              <h2 className="digital-eng-card-title">
                Customer Experience Management
              </h2>
              <p className="digital-eng-card-text">
                Elevate Customer Satisfaction with Expert Customer Experience
                Management: At RGS Tech Consulting, we specialize in customer
                experience management, helping businesses create exceptional
                experiences that drive customer loyalty and satisfaction. Our
                dedicated team analyzes customer touchpoints, designs
                personalized strategies, and implements innovative solutions to
                enhance your customers' journey and elevate your brand
                reputation.
                <br />
                <br />
                Optimize Customer Interactions for Lasting Relationships:
                Building strong relationships with your customers is the key to
                long-term success. Our customer experience management services
                focus on optimizing every interaction, from initial contact to
                post-purchase support. With our expertise, you can deliver
                consistent, seamless experiences across channels, fostering
                trust, loyalty, and positive word-of-mouth.
              </p>
            </div>
          </div>
        </div>
        <div className="digital-eng-main-section">
          <div className="digital-eng-card">
            <div className="digital-eng-card-image">
              <img className="digital-eng-card-image1" src={bg} alt="" />
              <img
                className="digital-eng-card-image2"
                src={ProductDesign}
                alt=""
              />
            </div>
            <div className="digital-eng-card-content">
              <h2 className="digital-eng-card-title">
                Product Design and Engineering
              </h2>
              <p className="digital-eng-card-text">
                Unleash Innovation with Expert Product Design and Engineering:
                At RGS Tech Consulting, we specialize in product design and
                engineering services that help businesses bring their ideas to
                life. Our experienced team of designers and engineers
                collaborate closely with you to develop innovative, functional,
                and visually appealing products that meet your specific
                requirements.
                <br />
                <br />
                Customized Solutions Tailored to Your Needs: We understand that
                every product is unique, and our product design and engineering
                services are tailored to your specific needs. From concept
                development to prototyping and manufacturing, we combine
                creativity and technical expertise to deliver customized
                solutions that align with your vision and business goals.
              </p>
            </div>
          </div>
        </div>
        <div className="digital-eng-main-section">
          <div className="digital-eng-card">
            <div className="digital-eng-card-image">
              <img className="digital-eng-card-image1" src={bg} alt="" />
              <img
                className="digital-eng-card-image2"
                src={AppDevelopment}
                alt=""
              />
            </div>
            <div className="digital-eng-card-content">
              <h2 className="digital-eng-card-title">
                App Development and Support
              </h2>
              <p className="digital-eng-card-text">
                Turn Your Ideas into Reality with Expert App Development and
                Support: At RGS Tech Consulting, we specialize in app
                development and support services that bring your ideas to life.
                Our experienced team of developers works closely with you to
                understand your requirements, design intuitive user interfaces,
                and develop robust and scalable applications for various
                platforms.
                <br />
                <br />
                Customized Solutions for Your Unique Needs: We recognize that
                every app is unique, and our app development services are
                tailored to your specific needs. Whether you need a native iOS
                or Android app, a cross-platform solution, or a web application,
                we leverage the latest technologies and best practices to
                deliver customized solutions that align with your business
                goals.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DigitalSectorCard;
