/* eslint-disable no-empty-pattern */
import React from 'react'
import { useDataLayerValue } from '../../context-api/DataLayer'
import { actionTypes } from '../../context-api/reducer'

function PTDetailHeader({onBackClick, atomicNo, category, categoryColor, symbol, name, atomicMass, picture, moreURL, prevAtomicNo, prevName, nextAtomicNo, nextName}) {
  const[{ colorMap, periodicSelectedElement }, dispatch] = useDataLayerValue()
  const element = periodicSelectedElement
  // close modal
  const handleClose = () => {
    dispatch({
			type: actionTypes.SET_DETAILS_MODAL,
			periodicDetails: false
		})
  }
  

  return (
    <header className="pt-det-header">
      <img className="pt-det-header-img" src={picture} alt={name}/>
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
          <div className="pt-det-nav-btn pt-prev-btn">
            <div>{prevAtomicNo} &bull; {prevName}</div>
          </div>

          {/* next */}
          <div className="pt-det-nav-btn pt-next-btn">
            <div>{nextName} &bull; {nextAtomicNo}</div>
          </div>
        </footer>
      </div>
    </header>
  )
}

export default PTDetailHeader
