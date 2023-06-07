import React from "react";
import "../styles/service.css";
import { Link } from "react-router-dom";
import data from "../assets/Images/Services/data.jpg";
import digital from "../assets/Images/Services/digitalEngineering.jpg";
import consulting from "../assets/Images/Services/consulting.jpg";
import cloud from "../assets/Images/Services/cloudService.jpg";

const ServiceCard = ({ backgroundUrl, name, index }) => {
  const renderServicesCategory = () => {
    switch (index) {
      case 0:
        return (
          <>
            <Link
              to="/services/data-engineering-and-solutions#data-integrity"
              className="homescreen__service__fa"
            >
              Data Integrity Solutions
            </Link>
            <Link
              to="/services/data-engineering-and-solutions#dmaster-data-management"
              className="homescreen__service__fa"
            >
              Master Data Management
            </Link>
            <Link
              to="/services/data-engineering-and-solutions#danalytics-ai"
              className="homescreen__service__fa"
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
              className="homescreen__service__fa"
            >
              Customer Experience Management
            </Link>
            <Link
              to="/services/digital-engineering-and-transformation#product-design-engineering"
              className="homescreen__service__fa"
            >
              Product Design and Engineering
            </Link>
            <Link
              to="/services/digital-engineering-and-transformation#app-development-support"
              className="homescreen__service__fa"
            >
              App Development and Support
            </Link>
          </>
        );
      case 2:
        return (
          <>
            <Link
              to="/services/cloud-engineering-and-platforms#cloud-engineering-migration"
              className="homescreen__service__fa"
            >
              Cloud Engineering and Migration
            </Link>
            <Link
              to="/services/cloud-engineering-and-platforms#cloud-native-development"
              className="homescreen__service__fa"
            >
              Cloud Native Development
            </Link>
            <Link
              to="/services/cloud-engineering-and-platforms#managed-hosting-support"
              className="homescreen__service__fa"
            >
              Managed Hosting and Support Services
            </Link>
          </>
        );
      case 3:
        return (
          <>
            <Link
              to="/services/consulting-and-advisory#business-consulting"
              className="homescreen__service__fa"
            >
              Business Consulting
            </Link>
            <Link
              to="/services/consulting-and-advisory#technology-consulting"
              className="homescreen__service__fa"
            >
              Technology Consulting
            </Link>
            <Link
              to="/services/consulting-and-advisory#cloud-network-consulting"
              className="homescreen__service__fa"
            >
              Cloud and Network Consulting
            </Link>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div
      className="homescreen__service__card"
      style={{ backgroundImage: `url(${backgroundUrl})` }}
    >
      <div className="homescreen__service__border">
        <h2 className="homescreen__service__card__h2">{name}</h2>
        <div className="homescreen__service__icons">
          {renderServicesCategory()}
        </div>
      </div>
    </div>
  );
};

const ServiceCardContainer = () => {
  const serviceData = [
    {
      name: "Data Engineering & Solutions",
      backgroundUrl: data,
    },
    {
      name: "Digital Engineering & Transformation",
      backgroundUrl: digital,
    },
    {
      name: "Cloud Engineering & Platforms",
      backgroundUrl: cloud,
    },
    {
      name: "Advisory & Consulting",
      backgroundUrl: consulting,
    },
  ];

  return (
    <>
      <div className="homescreen__service__heading">
        <h2>Our Core Capabilities</h2>
        <p>
          Complete portfolio of services to empower our customers for the future
        </p>
      </div>
      <div className="homescreen__service__container">
        {serviceData.map((service, index) => (
          <Link
            to={`/services/${index}`}
            key={index}
            className="homescreen__service__link"
          >
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
