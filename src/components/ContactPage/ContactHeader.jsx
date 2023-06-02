import React, { useEffect } from "react";
import "../../styles/Contact/ContactHeader.css";
import contact from "../../assets/Videos/Contact/contact.mp4";
import ScheduleConsultation from "./ScheduleConsultation";

const ContactHeader = () => {

  return (
    <>
      <div className="contact-header-banner">
        <div className="contact-header-overlay"></div>
        <video
          src={contact}
          autoPlay
          muted
          loop
          className="contact-header-background"
        />

        <div className="contact-header-content">
          <div className="contact-header-heading-tag">
            <p>Book Free Consultation</p>
          </div>
          <h1 className="contact-header-title">
            Share your challenges with us <br /> and let us help you.
          </h1>
          <div className="contact-header-bottom-tag">
            <p>
              We are the cross-roads of Innovation <br />
              and it's time we join hands to propel into future
            </p>
          </div>
        </div>
      </div>
      <ScheduleConsultation/>
    </>
  );
};

export default ContactHeader;
