import React from 'react'

function PTDetailHeader() {
  return (
    <header className="pt-det-header">
      <img className="pt-det-header-img" src="https://www.thoughtco.com/thmb/SuB85Nf5V3SIlFjQCq5Jnt4E-hM=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/Calcium-58efae5f5f9b582c4d2d340f.jpg" alt=" "/>
      {/* top */}
      <div className="pt-det-header-inner">
        <header className="pt-det-header-top-box">
          {/* top controls */}
          <div className="pt-det-header-controls">
            <div className="pt-det-ctrl-top pt-det-back-btn"></div>
            <a href="https://en.wikipedia.org/wiki/Calcium" rel="noreferrer" target="_blank">
              <div className="pt-det-ctrl-top pt-det-wiki-btn"></div>
            </a>
          </div>

          {/* other info */}
          <div className="pt-det-header-top">
            {/* element tag */}
            <div className="pt-det-header-element-tag">
              <div className="flex-row">
                <div className="pt-det-header-atomic-no">
                  20
                </div>
                <div className="pt-det-header-categoy-name">
                  Alkaline Earth Metals
                </div>
              </div>
            </div>
            
            {/* element name */}
            <div className="pt-det-header-element flex-row">
              <div className="pt-det-header-symbol">
                Ca
              </div>
              <div className="pt-det-header-element-name-box">
                <div className="pt-det-header-name">
                Praseodymium
                </div>
                <div className="pt-det-header-weight">
                  40.078(g/mol)
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
            <div>19 &bull; Potassium</div>
          </div>

          {/* next */}
          <div className="pt-det-nav-btn pt-next-btn">
            <div>Scandium &bull; 21</div>
          </div>
        </footer>
      </div>
    </header>
  )
}

export default PTDetailHeader
