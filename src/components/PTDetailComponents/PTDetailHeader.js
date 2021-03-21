import React, { useCallback } from 'react'

function PTDetailHeader({onBackClick, atomicNo, category, categoryColor, symbol, name, atomicMass, picture, moreURL, prevAtomicNo, prevName, nextAtomicNo, nextName}) {
  // close modal
  const handleClose = useCallback((e) => {
    onBackClick(false)
  }, [onBackClick])

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
            <a href={moreURL} rel="noreferrer" target="_blank">
              <div className="pt-det-ctrl-top pt-det-wiki-btn"></div>
            </a>
          </div>

          {/* other info */}
          <div className="pt-det-header-top">
            {/* element tag */}
            <div className="pt-det-header-element-tag">
              <div className="flex-row">
                <div className="pt-det-header-atomic-no">
                  {atomicNo}
                </div>
                <div className="pt-det-header-categoy-name">
                  {category}
                </div>
              </div>
            </div>
            
            {/* element name */}
            <div className="pt-det-header-element flex-row">
              <div className="pt-det-header-symbol">
                {symbol}
              </div>
              <div className="pt-det-header-element-name-box">
                <div className="pt-det-header-name">
                {name}
                </div>
                <div className="pt-det-header-weight">
                  {atomicMass}(g/mol)
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
