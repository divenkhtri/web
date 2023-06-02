import React from "react";
import "../../styles/Contact/SchedulMeeting.css";

import ReactDatePicker from "react-datepicker";
const ScheduleConsultation = () => {
  return (
    <>
    <div className="schedul-meeting-bg">
      <div class="schedul-meeting-container">
        <div class="schedul-meeting-left-col"></div>
        <div class="schedul-meeting-right-col">
          <h1 className="schedul-meeting-h1">Book A Call</h1>
          <p className="schedul-meeting-p"></p>
          <form
            id="contact-form"
            method="post"
            className="schedul-meeting-form"
          >
            <label for="name" className="schedul-meeting-label">
              Full name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Full Name"
              required
              className="schedul-meeting-input"
            />
            <label for="email" className="schedul-meeting-label">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email Address"
              required
              className="schedul-meeting-input"
            />
            <label for="email" className="schedul-meeting-label">
              Phone
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Phone Number"
              required
              className="schedul-meeting-input"
            />
            <label for="companyName" className="schedul-meeting-label">
              Company Name
            </label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              placeholder="Company Name"
              required
              className="schedul-meeting-input"
            />
            <label for="websiteURL" className="schedul-meeting-label">
              Website URL
            </label>
            <input
              type="url"
              id="websiteURL"
              name="websiteURL"
              placeholder="Your Company Website URL"
              required
              className="schedul-meeting-input"
            />
            <label htmlFor="selectedDate" className="schedul-meeting-label">
              Preferred Time Slot
            </label>
            <ReactDatePicker
              className="schedul-meeting-textarea"
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={15}
              timeCaption="Time"
              dateFormat="MMMM d, yyyy h:mm aa"
              id="selectedDate"
              name="selectedDate"
              required
            />
            <label for="message" className="schedul-meeting-label">
              Message
            </label>
            <textarea
              rows="6"
              placeholder="Your Message"
              id="message"
              name="message"
              required
              className="schedul-meeting-textarea"
            ></textarea>

            <button
              type="submit"
              id="submit"
              name="submit"
              className="schedul-meeting-button"
            >
              Send
            </button>
          </form>
          <div id="error" className="schedul-meeting-error-message"></div>
          <div
            id="success-msg"
            className="schedul-meeting-success-message"
          ></div>
        </div>
      </div></div>
    </>
  );
};

export default ScheduleConsultation;
