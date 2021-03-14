import React from 'react'
import { useDataLayerValue } from '../../DataLayer'
import './PeriodicTableDetails.css'

function PeriodicTableModalDetails(props) {
  const[{periodicTable}] = useDataLayerValue()
  console.log(periodicTable)

  return (
    <div className="pt-detail-container" style={props.detailsStyles}>
      <section className="pt-det-holder">
        <header className="pt-det-header">
          <img className="pt-det-header-img" src="#" alt=" "/>
          {/* top */}
          <div className="pt-det-header-inner">
            <header className="pt-det-header-top-box">
              {/* top controls */}
              <div className="pt-det-header-controls flex-row">
                <div className="app-back-btn">b</div>
                <div className="app-ctrl-btn">w</div>
              </div>

              {/* other info */}
              <div className="pt-det-header-top">
                {/* element tag */}
                <div className="pt-det-header-element-tag flex-row">
                  <div className="pt-det-header-atomic-no">
                    20
                  </div>
                  <div className="pt-det-header-categoy-name">
                    Alkaline Earth Metals
                  </div>
                </div>
                
                {/* element name */}
                <div className="pt-det-header-element flex-row">
                  <div className="pt-det-header-symbol">
                    Ca
                  </div>
                  <div className="pt-det-header-element-name-box">
                    <div className="pt-det-header-name">
                      Calcium
                    </div>
                    <div className="pt-det-header-weight">
                      40.078(g/mol)
                    </div>
                  </div>
                </div>
              </div>
            </header>

            {/* footer */}
            <footer className="pt-det-header-footer flex-row">
              {/* prev */}
              <div className="pt-det-ctrl-btn pt-prev-btn">
                19 &bull; Potassium
              </div>

              {/* next */}
              <div className="pt-det-ctrl-btn pt-next-btn">
                Scandium &bull; 21
              </div>
            </footer>
          </div>
        </header>
      </section>
    </div>
  )
}

export default PeriodicTableModalDetails
