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
            <aside key={ element[1].atomicNumber } className="element">
              <div className="element-atomic-no">{ element[1].atomicNumber }</div>
              <div className="element-symbol">{ element[1].symbol }</div>
              <div className="element-name">{ element[1].name }</div>
            </aside>)
        )}
      </div>
    </div>
  )
}

export default AppWorkArea
