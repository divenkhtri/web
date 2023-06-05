import React from "react";
import "../../../styles/ServicePage/DataEngineering/DataMainSection.css";
import { MdArrowForwardIos } from "react-icons/md";
import DataSectorHeading from "./DataSectorHeading";

const DataMainSection = () => {
  const cards = [
    {
      title: "Data Integrity Solutions",
      description:
        "Tailored Solutions for Your Data Integrity Needs: We understand that every business has unique data integrity requirements. Our team works closely with you to assess your specific needs and develop customized data integrity solutions that align with your business goals. Whether you require on-premises solutions, cloud-based implementations, or a hybrid approach, we have the expertise to meet your data integrity needs.        ",
    },
    {
      title: "Master Data Management",
      description:
        "Enable a 360-Degree View of Your Data: Achieving a complete and holistic view of your data is essential for informed decision-making. Our MDM services enable a 360-degree view of your data, breaking down data silos and providing a comprehensive understanding of your business. With integrated data, you can gain valuable insights, identify trends, and uncover new opportunities for growth.        ",
    },
    {
      title: "Analytics and AI",
      description:
        "Stay Ahead of the Competition with Predictive Analytics: Predictive analytics empowers businesses to forecast trends, anticipate customer behavior, and gain a competitive edge. Our team excels in predictive analytics, utilizing advanced modeling techniques to uncover valuable insights about future outcomes. By leveraging predictive analytics, you can make informed decisions, mitigate risks, and stay one step ahead in the market.        ",
    },
  ];
  return (
    <>
      <section className="data-main-section">
        <div className="data-main-section-container">
          <div className="data-main-section-heading">
            <h1>What we Offer</h1>
          </div>
          <div className="data-main-section-description">
            <p>
              At RGS, we offer comprehensive data engineering and solution
              services to help businesses harness the power of data for informed
              decision-making and business growth. Our expertise lies in
              designing, developing, and implementing robust data infrastructure
              and analytics solutions tailored to your specific needs. Our data
              engineering services encompass the end-to-end process of
              collecting, storing, and processing data. We work with diverse
              data sources and employ advanced techniques to cleanse, transform,
              and integrate data into a unified and reliable format. Our data
              engineers utilize leading technologies and frameworks to build
              scalable data pipelines, ensuring efficient data flow and storage.
              <br/>
              <br/>
              With our data engineering and solution services, we enable businesses to unlock the full potential of their data. We empower you to drive innovation, optimize operations, and uncover hidden opportunities. Trust us to be your strategic partner in building a robust data infrastructure and implementing effective data solutions to fuel your business growth.
            </p>
          </div>
        </div>
      </section>
      <section>
        <main className="data-main-section">
          <div className="data-main-card-container">
            {cards.map((card, index) => (
              <div className="data-mains-cards" key={index}>
                <div className="data-main-card-border">
                  <div className="data-main-card-title">{card.title}</div>
                  <div className="data-main-card-icon--descp">
                    <div className="data-main-card-icon">
                      <MdArrowForwardIos size={20} />
                    </div>
                    <div className="data-main-card-description">
                      <p>{card.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </section>

      <DataSectorHeading />
    </>
  );
};

export default DataMainSection;
