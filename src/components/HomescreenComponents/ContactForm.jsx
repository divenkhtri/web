import React from "react";
import "../../styles/contact.css";

const Contact = () => {
  return (
    <div className="contact_body">
      <div className="contct_container">
        <h2 className="cont_h2">Contact Us</h2>
        <form>
          <div className="contct_wrapper">
            <div className="contct_box">
              <input type="text" name="fname" id="fname" required />
              <label for="fname">First Name*</label>
            </div>

            <div className="contct_box">
              <input type="text" name="lname" id="lname" required />
              <label for="lname">Last Name*</label>
            </div>
          </div>

          <div className="contct_wrapper">
            <div className="contct_box">
              <input type="email" name="email" id="email" required />
              <label for="email">Work Email*</label>
            </div>

            <div className="contct_box">
              <input type="number" name="mob" id="mob" required />
              <label for="mob">Phone number*</label>
            </div>
          </div>

          <div className="contct_wrapper">
            <div className="contct_box">
              <input type="text" name="mob" id="mob" required />
              <label for="mob">Company Name*</label>
            </div>

            <div className="contct_box">
              <input type="number" name="mob" id="mob" required />
              <label for="mob">Company Url*</label>
            </div>
          </div>

          <div className="contct_wrapper">
            <div className="contct_box">
              <textarea id="msg" required />
              <label className="label-text-msg" for="msg">
                How can we help you?
              </label>
            </div>
          </div>
        </form>

        <div className="contact-submit-btn">
          <button className="cont_submit" type="submit">
            Submit
          </button>
          <h1>OR</h1>
          <button className="contact-submit-btn contact_submit1">
            Book a Call
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
