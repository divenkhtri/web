import React from "react";
import bg from "../../../assets/Images/Services/dots.svg";
import DataIntergrity from "../../../assets/Images/Services/sectors/DataIntergrity.jpg";
import DataManagement from "../../../assets/Images/Services/sectors/DataManagement.jpg";
import DataandAi from "../../../assets/Images/Services/sectors/DataandAI.jpg";
import "../../../styles/ServicePage/DataEngineering/DataSectorCard.css";

const DataSectorCards = () => {
  return (
    <>
      <section className="data-eng-bg">
        <div className="data-eng-main-section">
          <div className="data-eng-card">
            <div className="data-eng-card-image">
              <img className="data-eng-card-image1" src={bg} alt="" />
              <img
                className="data-eng-card-image2"
                src={DataIntergrity}
                alt=""
              />
            </div>
            <div className="data-eng-card-content">
              <h2 className="data-eng-card-title">Data Integrity Solutions</h2>
              <p className="data-eng-card-text">
                Safeguard Your Data with Cutting-Edge Data Integrity Solutions:
                At RGS Tech Consulting, we provide comprehensive data integrity
                solutions to help businesses protect and maintain the accuracy,
                consistency, and reliability of their critical data assets. Our
                expert team utilizes advanced technologies and industry best
                practices to implement robust data integrity measures that
                ensure data security and integrity throughout its lifecycle.
                <br />
                <br />
                Maintain Trust and Compliance with Data Integrity Assurance:
                Data integrity is vital for maintaining trust with your
                customers and complying with industry regulations. Our data
                integrity solutions focus on implementing stringent data
                validation, encryption, and access control mechanisms to prevent
                unauthorized modifications, tampering, or data corruption. Rest
                assured that your data remains intact and protected.
              </p>
            </div>
          </div>
        </div>
        <div className="data-eng-main-section">
          <div className="data-eng-card">
            <div className="data-eng-card-image">
              <img className="data-eng-card-image1" src={bg} alt="" />
              <img
                className="data-eng-card-image2"
                src={DataManagement}
                alt=""
              />
            </div>
            <div className="data-eng-card-content">
              <h2 className="data-eng-card-title">Master Data Management</h2>
              <p className="data-eng-card-text">
                Unlock the Power of Data with Master Data Management: At RGS
                Tech Consulting, we specialize in master data management (MDM)
                services, helping businesses harness the full potential of their
                data. Our MDM solutions provide a centralized and reliable view
                of your critical data, enabling better decision-making, improved
                operational efficiency, and enhanced data quality.
                <br />
                <br />
                Consolidate and Harmonize Your Data for Seamless Integration:
                Our MDM services focus on consolidating and harmonizing data
                from disparate sources, ensuring consistency and accuracy across
                your organization. We employ industry-leading tools and
                methodologies to standardize data, eliminate redundancies, and
                enable seamless integration with various applications and
                systems.
              </p>
            </div>
          </div>
        </div>
        <div className="data-eng-main-section">
          <div className="data-eng-card">
            <div className="data-eng-card-image">
              <img className="data-eng-card-image1" src={bg} alt="" />
              <img className="data-eng-card-image2" src={DataandAi} alt="" />
            </div>
            <div className="data-eng-card-content">
              <h2 className="data-eng-card-title">Analytics and AI</h2>
              <p className="data-eng-card-text">
                Harness the Power of Data with Advanced Analytics and AI: At RGS
                Tech Consulting, we offer cutting-edge analytics and AI services
                that enable businesses to unlock valuable insights from their
                data. Our team of data scientists and AI experts leverages
                advanced algorithms and machine learning techniques to help you
                make data-driven decisions, optimize operations, and drive
                business growth.
                <br />
                <br />
                Transform Data into Actionable Insights: Our analytics and AI
                services go beyond just collecting and analyzing data. We help
                you transform raw data into actionable insights that drive
                meaningful outcomes. Whether it's predictive modeling, sentiment
                analysis, or customer segmentation, our solutions empower you to
                uncover hidden patterns and make proactive decisions that propel
                your business forward.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DataSectorCards;
