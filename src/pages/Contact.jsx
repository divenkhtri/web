import React from 'react'
import ContactHeader from '../components/ContactPage/ContactHeader'
import MapComponent from '../components/ContactPage/MapComponent'
import AppointmentForm from '../components/ContactPage/ScheduleMeeting'


const Contact = () => {
  return (
   <>
   <ContactHeader/>
   <AppointmentForm/>
   <MapComponent/>
   </>
  )
}

export default Contact