/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import { useDataLayerValue } from '../../DataLayer'
import './PeriodicTableDetails.css'

function PeriodicTableModalDetails(props) {
  const[{periodicTable}] = useDataLayerValue()

  return (
    <div className="pt-detail-container" style={props.detailsStyles}>
      <section className="pt-det-holder">
        <header className="pt-det-header">
          <img className="pt-det-header-img" src="#" alt=" "/>
          {/* top */}
          <div className="pt-det-header-inner">
            <header className="pt-det-header-top-box">
              <div className="pt-det-header-top">
                {/* element tag */}
                <div className="pt-det-header-element-tag">
                  <div className="pt-det-header-atomic-no">
                    20
                  </div>
                  <div className="pt-det-header-categoy-name">
                    Alkaline Earth Metals
                  </div>
                </div>
                
                {/* element name */}
                <div className="pt-det-header-element">
                  <div className="pt-det-header-symbol">Ca</div>
                  <div className="pt-det-header-element-name-box">
                    <div className="pt-det-header-name">Calcium</div>
                    <div className="pt-det-header-weight">
                      40.078(g/mol)
                    </div>
                  </div>
                </div>
              </div>
            </header>

            {/* footer */}
            <footer className="det-header-footer">

            </footer>
          </div>
        </header>
      </section>
    </div>
  )
}

export default PeriodicTableModalDetails
