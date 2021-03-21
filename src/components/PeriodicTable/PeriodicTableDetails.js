import React, { useState } from 'react'
import { useDataLayerValue } from '../../context-api/DataLayer'
import './PeriodicTableDetails.css'
import PTDetailHeader from '../PTDetailComponents/PTDetailHeader'
import OverviewImage from '../../ico/overview.svg'
import PropertiesImage from '../../ico/property.svg'
import AtomicPropertiesImage from '../../ico/property.svg'
import ReactivityImage from '../../ico/reactivity.svg'
import PTDetailLabel from '../PTDetailComponents/PTDetailLabel'
import PTDetailValue from '../PTDetailComponents/PTDetailValue'
import Modal from 'react-modal'
import { actionTypes } from '../../context-api/reducer'


function PeriodicTableModalDetails(props) {
  const[{ periodicDetails }, dispatch] = useDataLayerValue()
  // console.log(periodicTable)

	const [isModalOpen, setIsModalOpen] = useState(periodicDetails)
	const closeDetailsModal = (boolVal) => {
		setIsModalOpen(boolVal)
		dispatch({
			type: actionTypes.SET_DETAILS_MODAL,
			periodicDetails: boolVal
		})
	}

  return (
    <Modal overlayClassName="pt-detail-container"
					className="modal-content"
					isOpen={periodicDetails}
					contentLabel={"Calcium Details"}
					shouldCloseOnOverlayClick={true}
					onRequestClose={() => {
						closeDetailsModal(isModalOpen)
					}}
		>
      <aside>
				<section className="pt-det-holder">
					<PTDetailHeader atomicNo="20"
						category="Alkaline Earth Metals"
						categoryColor=""
						symbol="Ca"
						name="Calcium"
						atomicMass="40.078"
						picture="https://www.thoughtco.com/thmb/SuB85Nf5V3SIlFjQCq5Jnt4E-hM=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/Calcium-58efae5f5f9b582c4d2d340f.jpg"
						moreURL="https://en.wikipedia.org/wiki/Calcium"
						prevAtomicNo="19"
						prevName="Potassium"
						nextAtomicNo="21"
						nextName="Scandium"
						onBackClick={setIsModalOpen}
					/>

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
    </Modal>
  )
}

export default PeriodicTableModalDetails
