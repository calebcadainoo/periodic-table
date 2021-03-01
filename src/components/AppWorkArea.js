import React from 'react'
import './AppWorkArea.css'
import PeriodicTable from './PeriodicTable'

function AppWorkArea() {
  return (
    <div className="centroid workarea">
      <h1>Periodic Table</h1>
      <div>
        <PeriodicTable />
      </div>
    </div>
  )
}

export default AppWorkArea
