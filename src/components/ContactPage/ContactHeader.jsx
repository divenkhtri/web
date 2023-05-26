import React from "react";
import "../../styles/Contact/ContactHeader.css";
import heroBackground from "../../assets/Images/Contact/contact.jpg";

const ContactHeader = () => {
  return (
    <>
      <div className="contact-header-banner">
        <img
          src={heroBackground}
          alt="Hero Background"
          className="contact-header-background"
        />
        <div className="contact-header-content">
          <h1 className="contact-header-title">
            Collaboration- the corner stone
            <br />
            of the 21st century!
          </h1>
          <div className="contact-header-bottom-tag">
            <p>
              We are at the cross-roads of Innovation, <br />
              and it's time we join hands to propel into the future.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactHeader;
