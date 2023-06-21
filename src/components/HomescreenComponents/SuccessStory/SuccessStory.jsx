import React from "react";
import "../../../styles/SuccessStory.scss";
import saas from "../../../assets/Images/SuccessStory/saas.jpg";
import cloudPlatform from "../../../assets/Images/SuccessStory/cloudPlatform/cloud.jpg";
import success from "../../../assets/Images/SuccessStory/saas/saas.jpg";
import bigData from "../../../assets/Images/SuccessStory/bigData/bigData (2).jpg";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";

const SuccessStory = () => {
  const stories = [
    {
      image: saas,
      title:
        "SaaS Providers of public policy collaborative governing technology",
      description:
        "To enrich the overall experience of law makers, senators, Institutions and Officials to search, collaborate, enhance and work on various Bills, US Code and CFRs.​",
      link: "/success-story/saas-provider",
    },
    {
      image: cloudPlatform,
      title: "Cloud Platform for A Multi Brand Car Rental License Association",
      description:
        "The implementation of a cloud platform for a multi-brand car rental licensee association addressed data inconsistencies, automated processes.",
      link: "/success-story/cloud-platform-for-car-rental",
    },
    {
      image: success,
      title: "A Centralized Coaching Platform",
      description:
        "The organization implemented a centralized Identity Provider (IDP) solution to enable seamless Single Sign-On (SSO) and streamline user management across multiple applications.",
      link: "/success-story/centralized-coaching-platform",
    },
    {
      image: bigData,
      title: "Big Data Platform for a Travel Company",
      description:
        "The implementation of a big data platform for a travel company addressed challenges related to fragmented customer data, unstructured data sources.",
      link: "/success-story/big-data-platform",
    },
  ];

  return (
    <div className="succes__story__main">
      <div className="abt-heading">
        <h1>Success Stories</h1>
        <p>The latest news to drive business strategy</p>
      </div>
      <section className="succes__story__section">
        <div className="book-slide-container">
          {stories.map((story, index) => (
            <div className="book-slide-body" key={index}>
              <div className="book-store">
                <div className="book-slide">
                  <div className="book js-flickity">
                    <div className="book-cell">
                      <Link to={story.link}>
                        <div className="book-img">
                          <img
                            src={story.image}
                            alt=""
                            className="book-photo"
                          />
                        </div>
                      </Link>
                      <div className="book-content">
                        <Link to={story.link}>
                          <div className="book-title">{story.title}</div>
                        </Link>
                        <div className="book-sum">{story.description}</div>
                        <Link to={story.link}>
                          <div className="book-see">Read More</div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Link to="/success-story" className="succes__story__-heading-button">
        <button className="succes__story__view__more__button">
          View More
          <AiOutlineArrowRight
            className="succes__story__-heading-icon"
            size={22}
          />
        </button>
      </Link>
    </div>
  );
};

export default SuccessStory;
