import React from 'react'
import './AppWorkArea.css'
import pt from 'periodic-table'

function AppWorkArea() {
  // let allElements = pt.all()
  // console.log(pt.elements)
  const data = pt.elements
  // console.log(pt.elements)

  return (
    <div className="centroid workarea">
      <h1>Periodic Table</h1>
      <div className="workarea-elements">
        {Object.entries(data).map(
          (element) => (
            console.log(element[1])
          ))}
      </div>
    </div>
  )
}

export default AppWorkArea
