import React from 'react'
import '../../../styles/ServicePage/DataEngineering/DataSectorHeading.css'
import DataSectorCards from './DataSectorCards'

const DataSectorHeading = () => {
  return (
   <>
    <section className="data-main-offering">
        <div className="data-sector-main-section ">
          <div className="data-main-offering-heading">
            <h2>Where We Can Help You</h2>
          </div>

          <div className="data-main-offering-descrpt">
            <p>
              Rhombus can help you build a business intelligence system that
              delivers quick, easy-to-digest insights about your organization
              and customers. We enable our customers to accelerate the pace of
              innovation and reduce time to value realization.
            </p>
          </div>
        </div>
        <DataSectorCards/>
      </section>
   </>
  )
}

export default DataSectorHeading