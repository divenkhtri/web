import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../../styles/Contact/ScheduleMeeting.css";
import appointmentImage from "../../assets/Images/Contact/img1.jpg";
import axios from "axios";

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    companyName: "",
    websiteURL: "",
    message: "",
    consent: false,
    newsletter: false,
    selectedDate: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: checked,
    }));
  };

  const handleDateChange = (date) => {
    setFormData((prevData) => ({
      ...prevData,
      selectedDate: date,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Perform form validation
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.phone ||
      !formData.email ||
      !formData.companyName ||
      !formData.websiteURL ||
      !formData.message ||
      !formData.selectedDate ||
      !formData.consent
    ) {
      // Handle validation error
      console.log("Please fill in all the mandatory fields.");
      return;
    }

    // Create the data payload for the backend request
    const dataPayload = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      phone: formData.phone,
      email: formData.email,
      companyName: formData.companyName,
      websiteURL: formData.websiteURL,
      message: formData.message,
      selectedDate: formData.selectedDate,
      consent: formData.consent,
    };

    try {
      // Make the backend request using Axios
      const response = await axios.post("<YOUR_API_URL>", dataPayload);

      // Handle the response from the backend
      console.log("Backend response:", response.data);
    } catch (error) {
      // Handle error in making the request
      console.error("Error:", error);
    }
  };

  return (
    <div className="appointment-form-container">
      <div className="appointment-image-container">
        <img
          src={appointmentImage}
          alt="Appointment"
          className="appointment-image"
        />
      </div>
      <div className="appointment-form-content">
        <h2>Schedule an Appointment</h2>
        <form className="appointment-form" onSubmit={handleSubmit}>
          <div className="appointment-form-row">
            <div className="appointment-form-group">
              <label className="appointment-label" htmlFor="firstName">
                First Name
              </label>
              <input
                className="appointment-input"
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="appointment-form-group">
              <label className="appointment-label" htmlFor="lastName">
                Last Name
              </label>
              <input
                className="appointment-input"
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="form-row">
            <div className="appointment-form-group">
              <label className="appointment-label" htmlFor="phone">
                Phone
              </label>
              <input
                className="appointment-input"
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="appointment-form-group">
              <label className="appointment-label" htmlFor="email">
                Work Email
              </label>
              <input
                className="appointment-input"
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="form-row">
            <div className="appointment-form-group">
              <label className="appointment-label" htmlFor="companyName">
                Company Name
              </label>
              <input
                className="appointment-input"
                type="text"
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="appointment-form-group">
              <label className="appointment-label" htmlFor="websiteURL">
                Website URL
              </label>
              <input
                className="appointment-input"
                type="url"
                id="websiteURL"
                name="websiteURL"
                value={formData.websiteURL}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="appointment-form-group">
            <label className="appointment-label" htmlFor="message">
              How can we help you?
            </label>
            <textarea
              className="appointment-textarea"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className="appointment-form-group">
            <label className="appointment-label" htmlFor="selectedDate">
              Preferred Time Slot
            </label>
            <DatePicker
              className="appointment-input"
              selected={formData.selectedDate}
              onChange={handleDateChange}
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={15}
              timeCaption="Time"
              dateFormat="MMMM d, yyyy h:mm aa"
              id="selectedDate"
              name="selectedDate"
              required
            />
          </div>
          <div className="appointment-form-group">
            <div className="appointment-checkbox-group">
              <input
                className="appointment-input-checkbox"
                type="checkbox"
                id="consent"
                name="consent"
                checked={formData.consent}
                onChange={handleCheckboxChange}
                required
              />
              <label className="appointment-label" htmlFor="consent">
                I consent to processing of my personal data entered above for
                RGS to contact me*
              </label>
            </div>
            <div className="appointment-checkbox-group">
              <input
                className="appointment-input-checkbox"
                type="checkbox"
                id="newsletter"
                name="newsletter"
                checked={formData.newsletter}
                onChange={handleCheckboxChange}
              />
              <label className="appointment-label" htmlFor="newsletter">
                I would like to receive details about latest services, events
                and newsletters from RGS.
              </label>
             
            </div>
            <p className="appointment-label">
                For further details on how your personal data will be processed
                and how your consent can be managed, refer to the RGS Privacy
                Policy.
              </p>
          </div>
          <button className="appointment-button" type="submit">
            Schedule Appointment
          </button>
        </form>
      </div>
    </div>
  );
};

export default AppointmentForm;
