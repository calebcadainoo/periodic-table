/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import { useDataLayerValue } from '../../DataLayer'
import '../../styles/PeriodicTableModalDetails.css'

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
          {/* top */}
          <div className="ptmb-top">
            {/* right */}
            <div className="ptmb-top-left">
              <div className="ptmb-top-atomic-no">20</div>
              <div className="ptmb-top-symbol">Ca</div>
            </div>
            {/* right */}
            <div className="ptmb-top-right">
              <div className="ptmb-top-name">Calcium</div>
              <div className="ptmb-top-info">
                Atomic Mass: 40.0784 g/mol
              </div>
              <div className="ptmb-top-info">
                Electron Shells: 2, 8, 8, 2
              </div>
            </div>
          </div>
          <div className="ptmb-body-info">Group: 2</div>
            <div className="ptmb-body-info">Period: 4</div>
          <div className="ptmb-body-info">Discovered by: Humphry Davy</div>
          <div className="ptmb-body-info">Category: alkaline earth metal</div>
          <div className="ptmb-body-info">Named by: Humphry Davy</div>
          <div className="ptmb-body-info">
              Calcium is a chemical element with symbol Ca and 
              atomic number 20. Calcium is a soft gray 
              alkaline earth metal, fifth-most-abundant 
              element by mass in the Earth's crust. 
              The ion Ca2+ is also the fifth-most-abundant 
              dissolved ion in seawater by both molarity and mass, 
              after sodium, chloride, magnesium, and sulfate.
            </div>
          {/* pic */}
          <div className="ptmb-image">
            <img src="https://sciencenotes.org/wp-content/uploads/2015/05/Calcium.jpg" alt="Image of Calcium"/>
          </div>
          <div className="ptmb-image">
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/21/Calcium_Spectrum.png" alt="Image of Calcium"/>
          </div>
          <div className="ptmb-body">
            <div className="ptmb-body-info">Color: null</div>
            <div className="ptmb-body-info">Appearance: shinny</div>
            <div className="ptmb-body-info">Density: 1.55 g/cm<sup>3</sup></div>
            <div className="ptmb-body-info">Boiling Point: 1757 K</div>
            <div className="ptmb-body-info">Melting Point: 1115 K</div>
            <div className="ptmb-body-info">Electron Configuration: 1s2 2s2 2p6 3s2 3p6 4s2</div>
            <div className="ptmb-body-info">Electron Affinity: 2.37</div>
            <div className="ptmb-body-info">Room temperature phase: Solid</div>
            <div className="ptmb-body-info">Electronegativity Pauling: 1.00</div>
            <div className="ptmb-body-info">Molar Heat: 25.929 J/(mol·K)</div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default PeriodicTableModalDetails
