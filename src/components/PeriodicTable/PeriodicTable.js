import React from 'react'
import pt from '../../PeriodTableData.json'
import './PeriodicTable.css'
import { useDataLayerValue } from '../../DataLayer'

function PeriodicTable() {
  const data = pt.elements
  const [{colorMap}, dispatch] = useDataLayerValue()

  // const colorMap = {
  //   "noble gas": "#4d42b8",
  //   "alkaline earth metal":"#e45143",
  //   "diatomic nonmetal":"#D81159",
  //   "alkali metal":"#8F2D56",
  //   "transition metal":"#56423e",
  //   "post-transition metal":"#7f4800",
  //   "polyatomic nonmetal": "#00A300",
  //   actinide: "#7f69e7",
  //   lanthanide:"#008f7a",
  //   metalloid:"#1e445d",
  // }
  
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
