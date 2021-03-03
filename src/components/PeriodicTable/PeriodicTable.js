import React, { useState } from 'react'
import './PeriodicTable.css'
import { useDataLayerValue } from '../../DataLayer'

function PeriodicTable() {
	const [{periodicTable}] = useDataLayerValue()
	const [{colorMap}] = useDataLayerValue()
	const [{periodicElOpacity}] = useDataLayerValue()
  const data = periodicTable

	const [xpos, setXpos] = useState()
	const [ypos, setYpos] = useState()
	const [elWidth, setElWidth] = useState()
	const [elHeight, setElHeight] = useState()

	const handleElementClick = function (e) {
		const targetEl = e.target.offsetParent
		const elcate = targetEl.dataset.category
		const name = targetEl.dataset.name

		const newWidth = targetEl.offsetWidth
		const newHeight = targetEl.offsetHeight

		const newXpos = (targetEl.offsetLeft - (18 + newWidth))
		const newYpos = targetEl.offsetTop

		console.log('Normal X: ', newXpos)
		console.log('Minus X 16: ', newXpos - 16)
		console.log('Minus X: ', newXpos - (16 + newWidth))

		setXpos(newXpos)
		setYpos(newYpos)
		setElWidth(newWidth)
		setElHeight(newHeight)

		// console.log(e.target.offsetParent)
		// console.log(elcate)
		// console.log(name)
	}

  return (
    <div className="periodic-table">
			<div className="cover"
				style={{
					top: ypos,
					left: xpos,
					width: elWidth,
					height: elHeight,
				}}
				></div>
      {data.map((element) =>(
          <aside onClick={handleElementClick} 
						key={element.name} 
						data-name={element.name} 
						data-category={element.category} style={{
							opacity: periodicElOpacity,
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
