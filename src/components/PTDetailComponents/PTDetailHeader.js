/* eslint-disable no-empty-pattern */
import React from 'react'
import { useDataLayerValue } from '../../context-api/DataLayer'
import { actionTypes } from '../../context-api/reducer'
import Fade from 'react-reveal/Fade'
import history from 'element-histories'

function PTDetailHeader() {
  const[{ periodicTable, colorMap, periodicSelectedElement }, dispatch] = useDataLayerValue()
  const element = periodicSelectedElement

  // CLOSE MODAL
  const handleClose = () => {
    dispatch({
			type: actionTypes.SET_DETAILS_MODAL,
			periodicDetails: false
		})
  }
  
  let prevAtomicNo, prevName, nextName, nextAtomicNo

	function elementType(number) {
		return  periodicTable.filter((element) => element.number === number)[0]
	}

  // SET PREV ELEMENT
  if (element?.number - 1 > 0 && element?.number - 1 < 120) {
		prevAtomicNo = parseInt(element?.number - 1)
  	prevName = elementType(prevAtomicNo)?.name
	}

  // SET NEXT ELEMENT
  if (element?.number + 1 > 0 && element?.number + 1 < 120) {
		nextAtomicNo = parseInt(element?.number + 1)
  	nextName = elementType(nextAtomicNo)?.name
	}

	// ELEMENT NAVIGATION LOGIC
  const setNavElement = (atomNum) => {
		if (atomNum > 0 && atomNum < 120) {
			const selected = elementType(atomNum)

			dispatch({
				type: actionTypes.SET_SELECTED_ELEMENT,
				periodicSelectedElement: selected 
			})
		}
	}

  let imageName = element?.name
  if (imageName === 'Aluminium') imageName = 'Aluminum'
  if (imageName === 'Nihonium') imageName = 'Ununtrium'
  if (imageName === 'Moscovium') imageName = 'Ununpentium'
  if (imageName === 'Tennessine') imageName = 'Ununseptium'
  if (imageName === 'Oganesson') imageName = 'Ununoctium'
  if (imageName === 'Ununennium') imageName = 'Ununoctium'

  return (
    <div>
      <Fade bottom cascade>
    <header className="pt-det-header">
      <img className="pt-det-header-img" 
        src={history?.image(imageName)}
        alt={element?.name}
      />
      {/* top */}
      <div className="pt-det-header-inner">
        <header className="pt-det-header-top-box">
          {/* top controls */}
          <div className="pt-det-header-controls">
            <div className="pt-det-ctrl-top pt-det-back-btn"
              onClick={handleClose}
            ></div>
            <a href={element?.source} rel="noreferrer" target="_blank">
              <div className="pt-det-ctrl-top pt-det-wiki-btn"></div>
            </a>
          </div>

          {/* other info */}
          <div className="pt-det-header-top">
            {/* element tag */}
            <div className="pt-det-header-element-tag" style={{ background: colorMap[element?.category] }}>
              <div className="flex-row">
                <div className="pt-det-header-atomic-no">
                  {element?.number}
                </div>
                <div className="pt-det-header-categoy-name">
                  {element?.category}
                </div>
              </div>
            </div>
            
            {/* element name */}
            <div className="pt-det-header-element flex-row">
              <div className="pt-det-header-symbol">
                {element?.symbol}
              </div>
              <div className="pt-det-header-element-name-box">
                <div className="pt-det-header-name">
                {element?.name}
                </div>
                <div className="pt-det-header-weight">
                  {element?.atomic_mass}(g/mol)
                </div>
              </div>
              <div className="pt-det-header-expand"></div>
            </div>
          </div>
        </header>

        {/* footer */}
        <footer className="pt-det-header-footer flex-row">
          {/* prev */}
          <div onClick={() => setNavElement(prevAtomicNo)} className="pt-det-nav-btn pt-prev-btn">
            <div>{prevAtomicNo} &bull; {prevName}</div>
          </div>

          {/* next */}
          <div onClick={() => setNavElement(nextAtomicNo)} className="pt-det-nav-btn pt-next-btn">
            <div>{nextName} &bull; {nextAtomicNo}</div>
          </div>
        </footer>
      </div>
    </header>
    </Fade>
    </div>
  )
}

export default PTDetailHeader
