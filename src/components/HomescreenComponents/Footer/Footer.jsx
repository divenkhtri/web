import React from "react";
import "../../../styles/Footer.css";
import logo from "../../../assets/Images/logo.png";
import { Link } from "react-router-dom";
import { BsFacebook, BsLinkedin, BsTwitter } from "react-icons/bs";
const Footer = () => {
  return (
    <>
      <div className="footer-body">
        <footer class="footer">
          <div class="start-learning">
            <div class="footer-start">
              <div class="footer-texts">
                <h2 class="footer-section-title">
                  Book A Free Consultation Now!
                </h2>
                <h3 class="footer-section-sub-heading">
                  <span>Our Tech Team is always ready to help</span>
                </h3>
              </div>
              <Link to="/contact" class="footer-button">
                <span class="label">Book A Call</span>
              </Link>
            </div>
          </div>

          <div className="footer-container">
            <div className="footer__links inner-footer-container">
              <div className="sb-footer__links">
                <div className="footer__links-div">
                  <h3 className="footer__links-div-h3">
                    <img
                      src={logo}
                      alt="Rhombus Global Service"
                      className="footer__links-div-img"
                    />
                  </h3>

                  <div className="footer-social-media">
                    <p className="footer__links-div-desc">
                      <BsFacebook
                        size={25}
                        className="footer-social-media-icon"
                      />
                    </p>
                    <p className="footer__links-div-desc">
                      <BsLinkedin
                        size={25}
                        className="footer-social-media-icon"
                      />
                    </p>
                    <p className="footer__links-div-desc">
                      <BsTwitter
                        size={25}
                        className="footer-social-media-icon"
                      />
                    </p>
                    <p className="footer__links-div-desc"></p>
                    <p className="footer__links-div-desc"></p>
                    <p className="footer__links-div-desc"></p>
                  </div>
                </div>
                <div className="footer__links-div">
                  <h3 className="footer__links-div-h3">Industry</h3>
                  <Link
                    to="/industry/banking-insurance-and-financial-institution"
                    className="footer__a"
                  >
                    <p className="footer__links-div-desc">
                      Banking, Financial Service & Insurance
                    </p>
                  </Link>
                  <Link
                    to="/industry/healthcare-pharma-and-life-science"
                    className="footer__a"
                  >
                    <p className="footer__links-div-desc">
                      Healthcare, Pharma & Life Science
                    </p>
                  </Link>
                  <Link
                    to="/industry/travel-transportation-and-hospitality"
                    className="footer__a"
                  >
                    <p className="footer__links-div-desc">
                      Transportation, Travel & Hospitality
                    </p>
                  </Link>
                  <Link
                    to="/industry/industrial-goods-and-manufacturing"
                    className="footer__a"
                  >
                    <p className="footer__links-div-desc">
                      Industrial Goods & Manufacturing
                    </p>
                  </Link>
                  <Link
                    to="/industry/retail-and-conumer-goods"
                    className="footer__a"
                  >
                    <p className="footer__links-div-desc">
                      Retail & Consumer Goods
                    </p>
                  </Link>

                  <Link
                    to="/industry/telecommunication-and-media"
                    className="footer__a"
                  >
                    <p className="footer__links-div-desc">Telecom & Media</p>
                  </Link>
                </div>
                <div className="footer__links-div">
                  <h3 className="footer__links-div-h3">Services</h3>
                  <Link
                    to="/services/data-engineering-and-solutions"
                    className="footer__a"
                  >
                    <p className="footer__links-div-desc">
                      Data Engineering & Solution
                    </p>
                  </Link>
                  <Link
                    to="/services/digital-engineering-and-transformation"
                    className="footer__a"
                  >
                    <p className="footer__links-div-desc">
                      Digital Engineering & Transformation
                    </p>
                  </Link>
                  <Link
                    to="/services/cloud-engineering-and-platforms"
                    className="footer__a"
                  >
                    <p className="footer__links-div-desc">
                      Cloud Engineering & Platform
                    </p>
                  </Link>
                  <Link
                    to="/services/consulting-and-advisory"
                    className="footer__a"
                  >
                    <p className="footer__links-div-desc">
                      Consultant & Advisory
                    </p>
                  </Link>
                </div>
                <div className="footer__links-div">
                  <h3 className="footer__links-div-h3">Company</h3>
                  <Link to="/about-us" className="footer__a">
                    <p className="footer__links-div-desc">About</p>
                  </Link>
                  <Link to="/service" className="footer__a">
                    <p className="footer__links-div-desc">Service</p>
                  </Link>
                  <Link to="/industry" className="footer__a">
                    <p className="footer__links-div-desc">Industry</p>
                  </Link>
                  <Link to="/success-story" className="footer__a">
                    <p className="footer__links-div-desc">Success Story</p>
                  </Link>
                  <Link to="/blog" className="footer__a">
                    <p className="footer__links-div-desc">News & Blog</p>
                  </Link>
                  <Link to="/contact" className="footer__a">
                    <p className="footer__links-div-desc">Contact</p>
                  </Link>
                  <Link to="/career" className="footer__a">
                    <p className="footer__links-div-desc">Career</p>
                  </Link>
                </div>
              </div>
              <hr className="footer-hr" />
              <div className="footer-lower-bottom">
                <div className="footer-lower-copyright">
                  <p className="footer-lower-bottom-links-date">
                    @{new Date().getFullYear()} Rhombus Global Service. All
                    rights reserved.
                  </p>
                </div>
                <div className="footer-lower-bottom-links">
                  <Link to="/terms-and-condition" className="footer__a">
                    <div>
                      <p className="footer__links-div-desc1">
                        Terms & Condition
                      </p>
                    </div>
                  </Link>
                  <Link to="/privacy-policy" className="footer__a">
                    <div>
                      <p className="footer__links-div-desc1">Privacy Policy</p>
                    </div>
                  </Link>
                  <Link to="/cookie-policy" className="footer__a">
                    <div>
                      <p className="footer__links-div-desc1">Cookie Policy</p>
                    </div>
                  </Link>
                  <Link to="/general-info" className="footer__a">
                    <div>
                      <p className="footer__links-div-desc1">General Info</p>
                    </div>
                  </Link>
                  <Link to="/faq" className="footer__a">
                    <div>
                      <p className="footer__links-div-desc1">FAQ</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};
export default Footer;
