import React from 'react'
// import { useDataLayerValue } from '../../DataLayer'
import './PeriodicTableDetails.css'
import PTDetailHeader from '../PTDetailComponents/PTDetailHeader'
import OverviewImage from '../../ico/overview.svg'
import PTDetailLabel from '../PTDetailComponents/PTDetailLabel'
import PTDetailValue from '../PTDetailComponents/PTDetailValue'

function PeriodicTableModalDetails(props) {
  // const[{periodicTable}] = useDataLayerValue()
  // console.log(periodicTable)

  return (
    <div className="pt-detail-container">
      <section className="pt-det-holder">
        <PTDetailHeader />

        <footer className="pt-det-footer-box">
          {/* label */}
          <PTDetailLabel image={OverviewImage} label="Overview" />
          <PTDetailValue label="Latin name: " value="Calcium" />
        </footer>
      </section>
    </div>
  )
}

export default PeriodicTableModalDetails
