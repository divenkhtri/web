import React from "react";
import { MdArrowForwardIos } from "react-icons/md";
import "../../../styles/ServicePage/CloudEngineering/CloudMainSection.css";
import { CloudSectorHeading } from "./CloudSectorHeading";
const CloudMainSection = () => {
  const cards = [
    {
      title: "Cloud Engineering and Migration",
      description:
        "Ongoing Optimization and Support for Cloud Environments: Our commitment doesn't end with migration. We provide ongoing optimization and support for your cloud environments. Our engineers continuously monitor performance, analyze usage patterns, and recommend optimizations to ensure your cloud infrastructure operates at its best. Count on us for proactive maintenance, troubleshooting, and support.",
    },
    {
      title: "Cloud  Native  Development",
      description:
        "Seamlessly Integrate with Cloud Services: Cloud-native development enables seamless integration with a wide range of cloud services and APIs. Our developers leverage the extensive ecosystem of cloud services, such as storage, databases, AI/ML, and analytics, to enhance the functionality and capabilities of your applications. This integration opens up opportunities for innovation and provides you with a competitive edge.",
    },
    {
      title: "Managed Hosting and Support Services",
      description:
        "Expert Guidance and Consultation: Beyond hosting and support, we provide expert guidance and consultation to help you make informed decisions about your online presence. Our team offers recommendations on best practices, performance optimization, and technology updates. We stay up to date with the latest industry trends to ensure you have the right tools and strategies to succeed.",
    },
  ];
  return (
    <>
      <section className="cloud-main-section">
        <div className="cloud-main-section-container">
          <div className="cloud-main-section-heading">
            <h1>What we Offer</h1>
          </div>
          <div className="cloud-main-section-description">
            <p>
              Our Cloud Engineering and Platforms services provide customized
              solutions to optimize your business operations in the cloud. With
              expertise in cloud strategy, application development, migration,
              platform deployment, and ongoing management, we help you harness
              the full potential of leading cloud platforms like AWS, Azure, and
              GCP. From designing cloud-native architectures to ensuring
              seamless integration and scalability, we handle the complexities
              of cloud computing while you focus on your core business.
              Experience the transformative power of cloud technologies with our
              comprehensive services, tailored to meet your unique business
              needs and goals.
              <br />
              <br />
              We understand the importance of a robust and efficient cloud
              infrastructure for your business success. That's why we offer a
              wide range of cloud engineering and platform services to help you
              navigate the complexities of cloud computing. With our expertise
              in cloud strategy, application development, migration, and
              platform deployment, we ensure seamless integration, enhanced
              performance, and scalability. Our team of skilled professionals is
              dedicated to providing ongoing support and management, enabling
              you to focus on your core business while we handle the technical
              aspects of your cloud environment. With our services, you can
              harness the power of cloud technologies to drive growth, improve
              agility, and achieve digital transformation.
            </p>
          </div>
        </div>
      </section>
      <section>
        <main className="cloud-main-section">
          <div className="cloud-main-card-container">
            {cards.map((card, index) => (
              <div className="cloud-mains-cards" key={index}>
                <div className="cloud-main-card-border">
                  <div className="cloud-main-card-title">{card.title}</div>
                  <div className="cloud-main-card-icon--descp">
                    <div className="cloud-main-card-icon">
                      <MdArrowForwardIos size={20} />
                    </div>
                    <div className="cloud-main-card-description">
                      <p>{card.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </section>
      <CloudSectorHeading />
    </>
  );
};

export default CloudMainSection;
