import React, { useState } from 'react'
import NavBarElementTab from './NavBarElementTab'
import { useDataLayerValue } from '../../context-api/DataLayer'
import { actionTypes } from '../../context-api/reducer'

function NavBarSearch() {
	const[{ periodicTable }, dispatch] = useDataLayerValue()
	// sort elements in alphabetical order
	const elementToAlphabets = periodicTable
	elementToAlphabets.sort((a, b) => a.name.localeCompare(b.name))

	const [menuSearchText, setMenuSearchText] = useState('')
	const handleMenuSearchText = () => {

	}

	const handleNavBarElementTab = (atomicNo) => {
		console.log(atomicNo)
		// const selectedElement = periodicTable.filter((element) => element.number === atomicNo)[0]
		
		// dispatch({
		// 	type: actionTypes.SET_DETAILS_MODAL,
		// 	periodicDetails: true
		// })

		// dispatch({
		// 	type: actionTypes.SET_SELECTED_ELEMENT,
		// 	periodicSelectedElement: selectedElement 
		// })
	}

	return (
		<section className={`navbar-search-container`}>
			<div className="navbar-search-inner flex-row">
				<input type="text" 
					onChange={handleMenuSearchText}
					className={`navbar-search-txtbox navbar-item`} 
					placeholder="Search element..."
				/>
				<aside className="navbar-search-tab-container">
					<section className="navbar-search-tab-box flex-row">
						{elementToAlphabets.map((element, keyId) => {
							return <NavBarElementTab key={keyId} onClick={handleNavBarElementTab(element.number)} element={element} />
						})}
					</section>
				</aside>
			</div>
		</section>
	)
}

export default NavBarSearch
