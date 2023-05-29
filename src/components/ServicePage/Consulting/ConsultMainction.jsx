import React from 'react'
import { MdArrowForwardIos } from 'react-icons/md';

import '../../../styles/ServicePage/DigitalEngineering/DigitalMainSection.css'
import { ConsultSectorHeading } from './ConsultSectorHeading';
const ConsultMainction = () => {
    const cards = [
        {
          title: "Business Consulting",
          description:
            "Safeguard your data with our comprehensive Data Integrity Solutions. Ensure accuracy, consistency, and security across your valuable information assets. Trust us for reliable data integrity solutions.",
        },
        {
          title: "Technology Consulting",
          description:
            "Streamline your data with our Master Data Management solutions. Achieve a single, unified view of your critical data across systems and departments. Optimize data quality, consistency, and governance.",
        },
        {
          title: "Cloud and Network Consulting",
          description:
            "Harness analytics and AI to propel your business forward. Our expert team delivers customized solutions for data-driven insights and informed decision-making. Experience the transformative impact of advanced analytics.",
        },
      ];
      return (
        <>
          <section className="digital-main-section">
            <div className="digital-main-section-container">
              <div className="digital-main-section-heading">
                <h1>What we Offer</h1>
              </div>
              <div className="digital-main-section-description">
                <p>
                  At Rhombus Global we build end-to-end solutions that help
                  businesses accelerate product innovation, optimize operations,
                  and increase customer engagement. Our uniquely experienced team
                  of data scientists, engineers, and architects are SMEs in change
                  enablement, and we tailor each solution to your business
                  environment to help you get more customer-focused products to
                  market, faster. We can also help you accelerate your data and
                  analytics solutions through our proprietary IPs, data platform
                  accelerator, and consulting partnerships with AWS, Google Cloud,
                  Microsoft, and Splunk®.
                </p>
              </div>
            </div>
          </section>
          <section>
            <main className="digital-main-section">
              <div className="digital-main-card-container">
                {cards.map((card, index) => (
                  <div className="digital-mains-cards" key={index}>
                    <div className="digital-main-card-border">
                      <div className="digital-main-card-title">{card.title}</div>
                      <div className="digital-main-card-icon--descp">
                        <div className="digital-main-card-icon">
                          <MdArrowForwardIos size={20} />
                        </div>
                        <div className="digital-main-card-description">
                          <p>{card.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </main>
          </section>
          <ConsultSectorHeading />
        </>
  )
}

export default ConsultMainction