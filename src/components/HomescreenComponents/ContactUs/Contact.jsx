import React, { useState } from "react";
import axios from "axios";
import "../../../styles/contact.css";

const Contact = () => {
  const [subscribeChecked, setSubscribeChecked] = useState(false);
  const [termsChecked, setTermsChecked] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubscribeCheckboxChange = (e) => {
    setSubscribeChecked(e.target.checked);
  };

  const handleTermsCheckboxChange = (e) => {
    setTermsChecked(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form validation here
    const firstName = e.target.fname.value.trim();
    const lastName = e.target.lname.value.trim();
    const email = e.target.email.value.trim();
    const phone = e.target.mob.value.trim();
    const company = e.target.company.value.trim();
    const website = e.target.website.value.trim();
    const message = e.target.msg.value.trim();

    if (
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      message === "" ||
      !termsChecked
    ) {
      // Display error or perform desired action when form fields are not valid
      return;
    }

    // Validate email format using regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      // Display error or perform desired action when email is not valid
      return;
    }

    // Validate phone number format using regular expression
    const phoneRegex = /^\d{10}$/;
    if (phone !== "" && !phoneRegex.test(phone)) {
      // Display error or perform desired action when phone number is not valid
      return;
    }

    // Create a data object with form field values
    const data = {
      firstName,
      lastName,
      email,
      phone,
      company,
      website,
      message,
    };

    // Send the data to the backend API using axios
    axios
      .post("https://dummy-api-endpoint.com", data, {
        headers: {
          "Content-Type": "application/json",
          "API-Key": "dummy-api-key",
        },
      })
      .then((response) => {
        // Handle the successful response
        console.log(response.data);
        setFormSubmitted(true);
      })
      .catch((error) => {
        // Handle the error
        console.error(error);
      });
  };

  return (
    <div className="contact_body">
      <div className="contct_container">
        <div className="contact_heading">
          <h2 className="cont_h2">Contact Us</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="contct_wrapper">
            <div className="contct_box">
              <input type="text" name="fname" id="fname" required />
              <label htmlFor="fname">First Name*</label>
            </div>

            <div className="contct_box">
              <input type="text" name="lname" id="lname" required />
              <label htmlFor="lname">Last Name*</label>
            </div>
          </div>

          <div className="contct_wrapper">
            <div className="contct_box">
              <input type="tel" name="mob" id="mob" />
              <label htmlFor="mob">Mobile Number</label>
            </div>

            <div className="contct_box">
              <input type="email" name="email" id="email" required />
              <label htmlFor="email">Company Email*</label>
            </div>
          </div>

          <div className="contct_wrapper">
            <div className="contct_box">
              <input type="url" name="website" id="website" required />
              <label htmlFor="website">Company Website*</label>
            </div>

            <div className="contct_box">
              <input type="text" name="company" id="company" required />
              <label htmlFor="company">Company Name*</label>
            </div>
          </div>

          <div className="contct_wrapper">
            <div className="contct_box contact_textarea" >
              <textarea id="msg" required  />
              <label className="label-text-msg" htmlFor="msg">
                How can we help you?
              </label>
            </div>
          </div>

          <div className="checkbox-container ">
            <label className="checkbox-label checkbox-rect">
              <input
                type="checkbox"
                name="subscribeCheckbox"
                id="subscribeCheckbox"
                checked={subscribeChecked}
                onChange={handleSubscribeCheckboxChange}
              />
              I consent to processing of my personal data entered above for RGS
              to contact me*
            </label>

            <label className="checkbox-label checkbox-rect">
              <input
                type="checkbox"
                name="termsCheckbox"
                id="termsCheckbox"
                required
                checked={termsChecked}
                onChange={handleTermsCheckboxChange}
              />
              I would like to receive details about latest services, events and
              newsletters from RGS.
            </label>
            <p>
              For further details on how your personal data will be processed
              and how your consent can be managed, refer to the RGS Privacy
              Policy.
            </p>
          </div>
          <div className="contact-submit-btn">
            <button className="cont_submit" type="submit">
              Submit
            </button>

           
          </div>
        </form>
        {formSubmitted && (
          <p className="success_message">Form submitted successfully!</p>
        )}
      </div>
    </div>
  );
};

export default Contact;
