/* eslint-disable no-empty-pattern */
import React, { useState, useRef } from 'react'
import { useDataLayerValue } from '../../context-api/DataLayer'
import { actionTypes } from '../../context-api/reducer'

function PeriodicTableLegend() {
  const [{colorMap}] = useDataLayerValue()
  const [{}, dispatch] = useDataLayerValue()
  const legendItem = useRef(null)

  // const [cateHighlight, setCateHighlight] = useState('pt-legend-selected')
  const [cateStyles, setCateStyles] = useState('')
  const handleCategoryClick = function (e, value) {
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
        periodicElOpacity: 0.1
      })
    // }
    
    const pop = `.pt-legend-item[data-category="${value}"]`
    const remover = document.querySelectorAll('.pt-legend-item')
    Object.entries(remover).map((ptItem) => {
      return ptItem[1].classList.remove('pt-legend-item-selected')
      // return console.log(ptItem[1])
    })
    document.querySelector(pop).classList.add('pt-legend-item-selected')
		console.log(typeof remover, remover)
    setCateStyles(value)
	}

  return (
    <aside className="pt-legend">
      <style dangerouslySetInnerHTML={{__html: `
        aside[data-category="${cateStyles}"]{
          opacity: 1 !important;
        }
      `}} />
      {Object.keys(colorMap).map((category, keyId) => (
        <div onClick={(e) => handleCategoryClick(e, category)}
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
