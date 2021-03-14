import React from 'react'
import './AppWorkArea.css'
import PeriodicTable from '../PeriodicTable/PeriodicTable'
import PeriodicTableLegend from '../PeriodicTable/PeriodicTableLegend'
import PeriodicTableDetails from '../PeriodicTable/PeriodicTableDetails'

function AppWorkArea() {
  return (
    <div className="centroid workarea">
      <h1>Periodic Table</h1>
      <div className="workarea-periodic-table">
        <PeriodicTableLegend />
        <PeriodicTable />
        <PeriodicTableDetails />
      </div>
    </div>
  )
}

export default AppWorkArea
