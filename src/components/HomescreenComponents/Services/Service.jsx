import React from "react";
import "../../../styles/service.css";
import { Link } from "react-router-dom";
import img1 from "../../../assets/Images/Services/Data-analytics-block3.jpg";
import img from "../../../assets/Images/Services/cloud native development.png";
import img2 from "../../../assets/Images/Services/product-design-team-role-01.jpg";
import img4 from "../../../assets/Images/Services/consulting.jpg";

const ServiceCard = ({ backgroundUrl, name, index }) => {
  const renderServicesCategory = () => {
    switch (index) {
      case 0:
        return (
          <>
            <Link
              to="/services/data-engineering-and-solutions#data-integrity"
              className="service__fa"
            >
              Data Integrity Solutions
            </Link>
            <Link
              to="/services/data-engineering-and-solutions#dmaster-data-management"
              className="service__fa"
            >
              Master Data Management
            </Link>
            <Link
              to="/services/data-engineering-and-solutions#danalytics-ai"
              className="service__fa"
            >
              Analytics and AI
            </Link>
          </>
        );
      case 1:
        return (
          <>
            <Link
              to="/services/digital-engineering-and-transformation#customer-experience"
              className="service__fa"
            >
              Customer Experience Management
            </Link>
            <Link
              to="/services/digital-engineering-and-transformation#product-design-engineering"
              className="service__fa"
            >
              Product Design and Engineering
            </Link>
            <Link
              to="/services/digital-engineering-and-transformation#app-development-support"
              className="service__fa"
            >
              App Development and Support
            </Link>
          </>
        );
      case 2:
        return (
          <>
            <Link to="/cloud-engineering-migration" className="service__fa">
              Cloud Engineering and Migration
            </Link>
            <Link to="/cloud-native-development" className="service__fa">
              Cloud Native Development
            </Link>
            <Link to="/managed-hosting-support" className="service__fa">
              Managed Hosting and Support Services
            </Link>
          </>
        );
      case 3:
        return (
          <>
            <Link to="/business-consulting" className="service__fa">
              Business Consulting
            </Link>
            <Link to="/technology-consulting" className="service__fa">
              Technology Consulting
            </Link>
            <Link to="/cloud-network-consulting" className="service__fa">
              Cloud and Network Consulting
            </Link>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="service__card">
      <div className="service__border">
        <h2 className="service__card__h2">{name}</h2>
        <div className="service__icons">{renderServicesCategory()}</div>
      </div>
    </div>
  );
};

const ServiceCardContainer = () => {
  const serviceData = [
    {
      name: "Data Engineering & Solutions      ",
      backgroundUrl: "../../../assets/Images/Services/consulting.png",
    },
    {
      name: "Digital Engineering & Transformation",
      backgroundUrl:
        "../../../assets/Images/Services/product-design-team-role-01.jpg",
    },
    {
      name: "Cloud Engineering & Platforms",
      backgroundUrl:
        "../../../assets/Images/Services/cloud native development.png",
    },
    {
      name: "Advisory & Consulting",
      backgroundUrl: "../../../assets/Images/Services/consulting.jpg",
    },
  ];

  return (
    <>
      <div className="service__heading">
        <h2>Our Core Capabilities</h2>
        <p>
          Complete portfolio of services to empower our customers for the future
        </p>
      </div>
      <div className="service__container">
        {serviceData.map((service, index) => (
          <Link to={`/services/${index}`} key={index} className="service__link">
            <ServiceCard
              name={service.name}
              backgroundUrl={service.backgroundUrl}
              index={index}
            />
          </Link>
        ))}
      </div>
    </>
  );
};

export default ServiceCardContainer;
