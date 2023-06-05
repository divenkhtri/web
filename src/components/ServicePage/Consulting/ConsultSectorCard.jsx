import React from "react";
import bg from "../../../assets/Images/Services/dots.svg";
import bussinessConsult from "../../../assets/Images/Services/sectors/bussinessConsult.jpg";
import technoConsult from "../../../assets/Images/Services/sectors/technoConsult.jpg";
import cloudConsult from "../../../assets/Images/Services/sectors/cloudConsult.jpg";
import "../../../styles/ServicePage/DigitalEngineering/DigitalSectorCard.css";
const ConsultSectorCard = () => {
  return (
    <>
      <section className="digital-eng-bg">
        <div className="digital-eng-main-section">
          <div className="digital-eng-card">
            <div className="digital-eng-card-image">
              <img className="digital-eng-card-image1" src={bg} alt="" />
              <img
                className="digital-eng-card-image2"
                src={bussinessConsult}
                alt=""
              />
            </div>
            <div className="digital-eng-card-content">
              <h2 className="digital-eng-card-title">Business Consulting</h2>
              <p className="digital-eng-card-text">
                Unlock Your Business Potential with Expert Guidance: At RGS Tech
                Consulting, we specialize in helping businesses unleash their
                full potential. Our team of experienced consultants offers
                tailored solutions to drive growth, optimize operations, and
                maximize profitability. Trust us to provide the expertise you
                need to take your business to new heights.Solve Complex Business
                Challenges with Confidence: No matter the obstacle you face, our
                business consulting services are designed to help you navigate
                the complexities of today's competitive landscape. From
                strategic planning to process improvement, we analyze your
                unique situation and provide actionable strategies that deliver
                tangible results. With RGS Tech Consulting by your side, you can
                tackle any challenge with confidence.
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
                src={technoConsult}
                alt=""
              />
            </div>
            <div className="digital-eng-card-content">
              <h2 className="digital-eng-card-title">Technology Consulting</h2>
              <p className="digital-eng-card-text">
                Streamline Your Business Operations with Expert Technology
                Consulting: At RGS, we offer technology consulting services to
                help businesses optimize their operations and achieve greater
                efficiency. Our experienced consultants analyze your current
                technology infrastructure, identify areas for improvement, and
                provide tailored solutions to drive your business forward.
                Embrace Digital Transformation for Sustainable Growth: In
                today's fast-paced digital landscape, staying ahead of the curve
                is essential. Our technology consulting experts guide you
                through the process of digital transformation, leveraging
                emerging technologies to enhance your competitive advantage,
                improve customer experiences, and unlock new opportunities for
                growth.
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
                src={cloudConsult}
                alt=""
              />
            </div>
            <div className="digital-eng-card-content">
              <h2 className="digital-eng-card-title">
                Cloud and Network Consulting
              </h2>
              <p className="digital-eng-card-text">
                Optimize Your IT Infrastructure with Expert Cloud and Network
                Consulting: At RGS, we offer comprehensive cloud and network
                consulting services to help businesses optimize their IT
                infrastructure. Our experienced consultants analyze your current
                setup, design scalable solutions, and provide strategic guidance
                to enhance performance, security, and reliability. Embrace the
                Power of Cloud Computing for Business Agility: Cloud computing
                has revolutionized the way businesses operate. Our cloud
                consulting experts assist you in harnessing the full potential
                of cloud technologies, enabling greater flexibility,
                scalability, and cost-efficiency. We help you migrate to the
                cloud, design hybrid solutions, and leverage cloud-based
                services tailored to your unique requirements.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ConsultSectorCard;
