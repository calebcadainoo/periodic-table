import React from 'react'
import './AppWorkArea.css'
import pt from 'periodic-table'

function AppWorkArea() {
  let allElements = pt.all()
  console.log(allElements)

  let printElements = () => {
    allElements.map((element) => {
      return(<aside key={ element.atomicNumber } className="element">
      <div className="element-atomic-no">{ element.atomicNumber }</div>
      <div className="element-symbol">{ element.syombol }</div>
      <div className="element-name">{ element.name }</div>
    </aside>)
    })
  }

  return (
    <div className="centroid workarea">
      <h1>Periodic Table</h1>
      <div className="workarea-elements">
        {/* element */}
        {/* <aside className="element">
          <div className="element-atomic-no">1</div>
          <div className="element-symbol">H</div>
          <div className="element-name">Hydrogen</div>
        </aside> */}
        {printElements()}
      </div>
    </div>
  )
}

export default AppWorkArea
