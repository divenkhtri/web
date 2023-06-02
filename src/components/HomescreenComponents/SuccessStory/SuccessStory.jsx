/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useRef } from "react";
import "../../../styles/SuccessStory.scss"; // this is a  CSS import file
import saas from "../../../assets/Images/SuccessStory/saas.jpg";
import cloudPlatform from "../../../assets/Images/SuccessStory/cloud platform.jpg";
import success from "../../../assets/Images/SuccessStory/couching.jpg";
import bigData from "../../../assets/Images/SuccessStory/bigData.jpg";
import { Link } from "react-router-dom";
import {AiOutlineArrowRight} from 'react-icons/ai'

const SuccessStory = () => {
  return (
    <>
      <div className="succes__story__main">
        <div className="succes__story__-heading">
          <h1>Success Stories</h1>
          <p>The latest news to drive business strategy</p>
        </div>
        <section className="succes__story__section">
          <div className="book-slide-container">
            <div className="book-slide-body">
              <div className="book-store">
                <div className="book-slide">
                  <div className="book js-flickity">
                    <div className="book-cell">
                      <div className="book-img">
                        <img src={saas} alt="" className="book-photo" />
                      </div>
                      <div className="book-content">
                        <div className="book-title">
                          SaaS Providers of <br /> public policy collaborative{" "}
                          <br /> governing technology
                        </div>

                        <div className="book-sum">
                          To enrich the overall experience of law makers,
                          senators, Institutions and Officials to search,
                          collaborate, enhance and work on various Bills, US
                          Code and CFRs.​
                        </div>
                        <div className="book-see">Read More</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="book-slide-body">
              <div className="book-store">
                <div className="book-slide">
                  <div className="book js-flickity">
                    <div className="book-cell">
                      <div className="book-img">
                        <img
                          src={cloudPlatform}
                          alt=""
                          className="book-photo"
                        />
                      </div>
                      <div className="book-content">
                        <div className="book-title">
                          Cloud Platform for A <br /> Multi Brand Car Rental{" "}
                          <br /> License Association​
                        </div>

                        <div className="rate"></div>
                        <div className="book-sum">
                          The implementation of a cloud platform for a
                          multi-brand car rental licensee association addressed
                          data inconsistencies, automated processes.
                        </div>
                        <div className="book-see">Read More</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="succes__story__section">
          <div className="book-slide-container">
            <div className="book-slide-body">
              <div className="book-store">
                <div className="book-slide">
                  <div className="book js-flickity">
                    <div className="book-cell">
                      <div className="book-img">
                        <img src={success} alt="" className="book-photo" />
                      </div>
                      <div className="book-content">
                        <div className="book-title">
                          A Centralized Coaching <br /> Platform
                        </div>

                        <div className="book-sum">
                          The organization implemented a centralized Identity
                          Provider (IDP) solution to enable seamless Single
                          Sign-On (SSO) and streamline user management across
                          multiple applications.
                        </div>
                        <div className="book-see">Read More</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="book-slide-body">
              <div className="book-store">
                <div className="book-slide">
                  <div className="book js-flickity">
                    <div className="book-cell">
                      <div className="book-img">
                        <img src={bigData} alt="" className="book-photo" />
                      </div>
                      <div className="book-content">
                        <div className="book-title">
                          Big Data Platform for <br /> a Travel Company
                        </div>

                        <div className="rate"></div>
                        <div className="book-sum">
                          he implementation of a big data platform for a travel
                          company addressed challenges related to fragmented
                          customer data, unstructured data sources.
                        </div>
                        <div className="book-see">Read More</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Link to='/success-story' className="succes__story__-heading-button">
          <button>View More <AiOutlineArrowRight className="succes__story__-heading-icon" size={22}/> </button>
        </Link>
      </div>
    </>
  );
};

export default SuccessStory;
