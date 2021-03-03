import React from 'react'
import './PeriodicTable.css'
import { useDataLayerValue } from '../../DataLayer'

function PeriodicTable() {
	const [{periodicElements}] = useDataLayerValue()
	const [{colorMap}] = useDataLayerValue()
  const data = periodicElements
	
  return (
    <div className="periodic-table">
      {data.map((element) =>(
          <aside key={element.name} style={{
              gridColumn: element.xpos,
              gridRow: element.ypos,
              background: colorMap[element.category],
              borderBottom: `2px solid ${colorMap[element.category]}`
            }} className="element">
            <div className="element-atomic-no">{element.number}</div>
            <div className="element-symbol">{element.symbol}</div>
            <div className="element-name">{element.name}</div>
          </aside>
        ))}
    </div>
  )
}

export default PeriodicTable
