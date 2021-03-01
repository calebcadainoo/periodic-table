import React from 'react'
import pt from '../PeriodTableData.json'

function PeriodicTable() {
  const data = pt.elements
  console.log(data)

  const colorMap = {
    // "noble gas": "#FFBC42",
    "noble gas": "#4d42b8",
    "alkaline earth metal":"#EC67AE",
    "diatomic nonmetal":"#D81159",
    "alkali metal":"#8F2D56",
    // "transition metal":"#58586B",
    "transition metal":"#eb852d",
    "post-transition metal":"#218380",
    "polyatomic nonmetal": "#00A300",
    actinide: "#7f69e7",
    lanthanide:"#4AABAF",
    metalloid:"#73D2DE",
  }
  
  return (
    <div className="workarea-elements">
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
