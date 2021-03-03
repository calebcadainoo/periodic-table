import React from 'react'
import './PeriodicTable.css'
import { useDataLayerValue } from '../../DataLayer'

function PeriodicTable() {
	const [{periodicTable}] = useDataLayerValue()
	const [{colorMap}] = useDataLayerValue()
  const data = periodicTable

	const handleElementClick = function (e) {
		const targetEl = e.target.offsetParent
		const elcate = targetEl.dataset.category
		const name = targetEl.dataset.name

		console.log(e.target.offsetParent)
		console.log(elcate)
		console.log(name)
	}

  return (
    <div className="periodic-table">
      {data.map((element) =>(
          <aside onClick={handleElementClick} 
						key={element.name} 
						data-name={element.name} 
						data-category={element.category} style={{
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
