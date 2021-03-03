import React from 'react'
import { useDataLayerValue } from '../../DataLayer'

function PeriodicTableLegend() {
  const [{colorMap}] = useDataLayerValue()

  return (
    <aside className="pt-legend">
      {Object.keys(colorMap).map((key) => (
        <div key={key} className="pt-legend-item">
          <div className="pt-legend-color"style={{ background: colorMap[key] }}></div>
          <div className="pt-legend-name">{key}</div>
        </div>
      ))}
    </aside>
  )
}

export default PeriodicTableLegend
