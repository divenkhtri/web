import React from 'react'
import '../../../styles/ServicePage/DataEngineering/DataSectorHeading.css'

import ConsultSectorCard from './ConsultSectorCard'
export const ConsultSectorHeading = () => {
  return (
    <>
    <section className="digital-main-offering">
        <div className="digital-sector-main-section ">
          <div className="digital-main-offering-heading">
            <h2>Where We Can Help You</h2>
          </div>

          <div className="digital-main-offering-descrpt">
            <p>
              Rhombus can help you build a business intelligence system that
              delivers quick, easy-to-digest insights about your organization
              and customers. We enable our customers to accelerate the pace of
              innovation and reduce time to value realization.
            </p>
          </div>
        </div> 
        <ConsultSectorCard/>
      </section>
   </>
  )
}
