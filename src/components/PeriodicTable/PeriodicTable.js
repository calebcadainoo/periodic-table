import React from 'react'
import '../../styles/PeriodicTable.css'
import { useDataLayerValue } from '../../context-api/DataLayer'
import { actionTypes } from '../../context-api/reducer'
import Reveal from 'react-reveal/Reveal'
// import PeriodicTableDetails from './PeriodicTableDetails'

function PeriodicTable() {
	const [{ periodicTable }, dispatch] = useDataLayerValue()
	const [{colorMap}] = useDataLayerValue()
	const [{periodicElOpacity}] = useDataLayerValue()
  const data = periodicTable

	// const [xpos, setXpos] = useState()
	// const [ypos, setYpos] = useState()
	// const [elWidth, setElWidth] = useState()
	// const [elHeight, setElHeight] = useState()
	// const [overlayPosType, setOverlayPosType] = useState('fixed')

	const handleElementClick = (atomicNo) => {
		const selectedElement = periodicTable.filter((element) => element.number === atomicNo)[0]
		
		dispatch({
			type: actionTypes.SET_DETAILS_MODAL,
			periodicDetails: true
		})

		dispatch({
			type: actionTypes.SET_SELECTED_ELEMENT,
			periodicSelectedElement: selectedElement 
		})
	}
	

  return (
		<Reveal effect="fadeInUp" >
		<div className="periodic-table">
      {data.map((element) =>(
          <aside onClick={() => handleElementClick(element.number)} 
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
		</Reveal>
  )
}

export default PeriodicTable
