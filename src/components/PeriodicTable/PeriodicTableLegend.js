import React, { useState, useRef } from 'react'
import { useDataLayerValue } from '../../context-api/DataLayer'
import { actionTypes } from '../../context-api/reducer'

function PeriodicTableLegend() {
  const [{colorMap}] = useDataLayerValue()
  const [{}, dispatch] = useDataLayerValue()
  const legendItem = useRef(null)

  // const [cateHighlight, setCateHighlight] = useState('pt-legend-selected')
  const [cateStyles, setCateStyles] = useState('')
  const handleCategoryClick = function (value) {
		// let targetEl = e.target
    // if (targetEl.parentElement.className !== "pt-legend-item") {
    //   targetEl = targetEl.parentElement
    //   console.log('If Part', targetEl)
    // } else {
    //   targetEl = targetEl.parentElement
    //   console.log('Else Part', targetEl)
    // }

		// const elcate = targetEl.dataset.category
    // if (typeof elcate === "string") {
      dispatch({
        type: actionTypes.SET_PERIODIC_EL_OPACITY,
        periodicElOpacity: 0.2
      })
    // }

		// console.log(elcate)
    setCateStyles(value)
		console.log(cateStyles)

	}

  return (
    <aside className="pt-legend">
      <style dangerouslySetInnerHTML={{__html: `aside[data-category="${cateStyles}"]{
        opacity: 1 !important;
        background: grey;
      }`}} />
      <style dangerouslySetInnerHTML={{__html: `
        div[data-category="${cateStyles}"]{
          opacity: 1 !important;
          background: grey;
        }
      `}} />
      {Object.keys(colorMap).map((category, keyId) => (
        <div onClick={() => handleCategoryClick(category)}
            key={keyId} 
            ref={legendItem}
            data-category={category} 
            className="pt-legend-item">
          <div className="pt-legend-color"style={{ background: colorMap[category] }}></div>
          <div className="pt-legend-name">{category}</div>
        </div>
      ))}
    </aside>
  )
}

export default PeriodicTableLegend
