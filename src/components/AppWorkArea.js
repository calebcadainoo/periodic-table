import React from 'react'
import './AppWorkArea.css'
import pt from '../PeriodTableData.json'

function AppWorkArea() {
  // let allElements = pt.all()
  // console.log(pt.elements)
  const data = pt.elements
  console.log(data)

  return (
    <div className="centroid workarea">
      <h1>Periodic Table</h1>
      <div className="workarea-elements">
        {/* <aside className="element">
          <div className="element-atomic-no">1</div>
          <div className="element-symbol">H</div>
          <div className="element-name">Hydrogen</div>
        </aside> */}

        {data.map((element) =>(
          <aside key={element.name} style={{
              gridColumn: element.xpos,
              gridRow: element.ypos
            }} className="element">
            <div className="element-atomic-no">{element.number}</div>
            <div className="element-symbol">{element.symbol}</div>
            <div className="element-name">{element.name}</div>
          </aside>
        ))}
      </div>
    </div>
  )
}

export default AppWorkArea
