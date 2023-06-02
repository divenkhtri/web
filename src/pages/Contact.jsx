import React from "react";
import ContactHeader from "../components/ContactPage/ContactHeader";
import MapComponent from "../components/ContactPage/MapComponent";
import AppointmentForm from "../components/ContactPage/ScheduleMeeting";
import ScheduleConsultation from "../components/ContactPage/ScheduleConsultation";

const Contact = () => {
  return (
    <>
      <ContactHeader />

      <MapComponent />
    </>
  );
};

export default Contact;
