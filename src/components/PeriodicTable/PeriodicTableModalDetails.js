import React from 'react'
import { useDataLayerValue } from '../../DataLayer'
import './PeriodicTableModalDetails.css'

function PeriodicTableModalDetails(props) {
  const[{periodicTable}] = useDataLayerValue()

  const leftElement = {
    background: 'rgb(143, 45, 86)',
  }

  const midElement = {
    background: 'rgb(228, 81, 67)',
  }

  const rightElement = {
    background: 'rgb(86, 66, 62)',
  }

  return (
    <div className="pt-modal-container" style={props.detailsStyles}>
      <div className="pt-details-modal">
        <header className="pt-modal-header">
          <div className="pt-modal-header-inner">
            {/* left */}
            <aside className="pt-modal-top-nav pt-modal-left element" data-name="Potassium" data-category="alkali metal" style={leftElement}>
              <div className="element-atomic-no">19</div>
              <div className="element-symbol">K</div>
              <div className="element-name">Potassium</div>
            </aside>
            {/* mid */}
            <aside className="pt-modal-top-nav pt-modal-mid element" data-name="Calcium" data-category="alkaline earth metal" style={midElement}>
              <div className="element-atomic-no">20</div>
              <div className="element-symbol">C</div>
              <div className="element-name">Calcium</div>
            </aside>
            {/* right */}
            <aside className="pt-modal-top-nav pt-modal-right element" data-name="Scandium" data-category="transition metal" style={rightElement}>
              <div className="element-atomic-no">21</div>
              <div className="element-symbol">Sc</div>
              <div className="element-name">Scandium</div>
            </aside>
          </div>
        </header>

        <section className="pt-modal-body">
          <div className="ptmb-top">
           <div className="ptmb-atomic-no">
             20
           </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default PeriodicTableModalDetails
