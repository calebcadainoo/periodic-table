/* eslint-disable no-empty-pattern */
import React, { useRef } from 'react'
import { useDataLayerValue } from '../../context-api/DataLayer'
import { actionTypes } from '../../context-api/reducer'

function PeriodicTableLegend() {
  const [{colorMap}] = useDataLayerValue()
  const [{}, dispatch] = useDataLayerValue()
  const legendItem = useRef(null)

  const handleCategoryClick = function (e) {
		let targetEl = e.target
    if (targetEl.parentElement.className !== "pt-legend-item") {
      targetEl = targetEl.parentElement
      console.log('If Part', targetEl)
    } else {
      targetEl = targetEl.parentElement
      console.log('Else Part', targetEl)
    }

		const elcate = targetEl.dataset.category
    if (typeof elcate === "string") {
      dispatch({
        type: actionTypes.SET_PERIODIC_EL_OPACITY,
        periodicElOpacity: 0.5
      })
    }

		console.log(elcate)
	}

  return (
    <aside className="pt-legend">
      {Object.keys(colorMap).map((key) => (
        <div onClick={handleCategoryClick}
            key={key} 
            ref={legendItem}
            data-category={key} 
            className="pt-legend-item">
          <div className="pt-legend-color"style={{ background: colorMap[key] }}></div>
          <div className="pt-legend-name">{key}</div>
        </div>
      ))}
    </aside>
  )
}

export default PeriodicTableLegend
