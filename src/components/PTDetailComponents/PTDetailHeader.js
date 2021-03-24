/* eslint-disable no-empty-pattern */
import React from 'react'
import { useDataLayerValue } from '../../context-api/DataLayer'
import { actionTypes } from '../../context-api/reducer'
import Fade from 'react-reveal/Fade'

function PTDetailHeader() {
  const[{ periodicTable, colorMap, periodicSelectedElement }, dispatch] = useDataLayerValue()
  const element = periodicSelectedElement
  // close modal
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

  // set prev element 
  if (element?.number - 1 > 0 && element?.number - 1 < 120) {
		prevAtomicNo = parseInt(element?.number - 1)
  	prevName = elementType(prevAtomicNo)?.name
	}

  // set next element
  if (element?.number + 1 > 0 && element?.number + 1 < 120) {
		nextAtomicNo = parseInt(element?.number + 1)
  	nextName = elementType(nextAtomicNo)?.name
	}

	// element navigation logic
  const setNavElement = (atomNum) => {
		if (atomNum > 0 && atomNum < 120) {
			const selected = elementType(atomNum)

			dispatch({
				type: actionTypes.SET_SELECTED_ELEMENT,
				periodicSelectedElement: selected 
			})
		}
	}



  return (
    <div>
      <Fade bottom cascade>
    <header className="pt-det-header">
      <img className="pt-det-header-img" 
        src="https://www.thoughtco.com/thmb/SuB85Nf5V3SIlFjQCq5Jnt4E-hM=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/Calcium-58efae5f5f9b582c4d2d340f.jpg" 
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
