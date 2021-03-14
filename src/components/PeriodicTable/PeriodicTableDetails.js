import React from 'react'
// import { useDataLayerValue } from '../../DataLayer'
import './PeriodicTableDetails.css'
import PTDetailHeader from '../PTDetailComponents/PTDetailHeader'
import OverviewImage from '../../ico/overview.svg'
import PropertiesImage from '../../ico/property.svg'
import AtomicPropertiesImage from '../../ico/property.svg'
import ReactivityImage from '../../ico/reactivity.svg'
import PTDetailLabel from '../PTDetailComponents/PTDetailLabel'
import PTDetailValue from '../PTDetailComponents/PTDetailValue'

function PeriodicTableModalDetails(props) {
  // const[{periodicTable}] = useDataLayerValue()
  // console.log(periodicTable)

  return (
    <div className="pt-detail-container">
      <aside>
				<section className="pt-det-holder">
					<PTDetailHeader />

					<footer className="pt-det-footer-box">
						{/* label */}
						<PTDetailLabel image={OverviewImage} label="Overview" />
						<PTDetailValue label="Name: " value="Calcium" />
						<PTDetailValue label="Summary: " value="
							Calcium is a chemical element with symbol Ca and 
							atomic number 20. Calcium is a soft gray 
							alkaline earth metal, fifth-most-abundant element by 
							mass in the Earth's crust. The ion Ca2+ is also the 
							fifth-most-abundant dissolved ion in seawater by both 
							molarity and mass, after sodium, chloride, magnesium, and sulfate.
						" />
						<PTDetailValue label="Discovered by: " value="Humphry Davy" />
						<PTDetailValue label="Named by: " value="--" />
						<PTDetailValue label="Appearance: " value="--" />
						<PTDetailValue label="Electron Shells: " value="K2, L8, M8, N2" />
						<PTDetailValue label="Color: " value="--" />
						{/* label */}
						<PTDetailLabel image={PropertiesImage} label="Properties" />
						<PTDetailValue label="Atomic Number: " value="20" />
						<PTDetailValue label="Atomic Weight: " value="40.078(g/mol)" />
						<PTDetailValue label="Density: " value="1.55(g/cm <sup>3</sup>)" />
						<PTDetailValue label="Phase: " value="Solid" />
						<PTDetailValue label="Melting Point: " value="1115K" />
						<PTDetailValue label="Boiling Point: " value="1757K" />
						<PTDetailValue label="Molar Heat: " value="25.929 J/(mol·K)" />
						<PTDetailValue label="Group: " value="2" />
						<PTDetailValue label="Period: " value="4" />
						<PTDetailValue label="Emmision spectrum: " value="image here" />
						{/* label */}
						<PTDetailLabel image={AtomicPropertiesImage} label="Atomic Properties" />
						<PTDetailValue label="Electron Configuration: " value="1s2 2s2 2p6 3s2 3p6 4s2" />
						{/* label */}
						<PTDetailLabel image={ReactivityImage} label="Reactivity" />
						<PTDetailValue label="Electronegativity Pauling: " value="1.00" />
						<PTDetailValue label="Electron Affinity: " value="2.37 kJ/mol" />
					</footer>
				</section>
				<div className="minimal-space"></div>
			</aside>
    </div>
  )
}

export default PeriodicTableModalDetails
