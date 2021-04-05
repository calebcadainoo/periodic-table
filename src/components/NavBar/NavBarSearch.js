/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react'
import NavBarElementTab from './NavBarElementTab'
import { useDataLayerValue } from '../../context-api/DataLayer'
import { actionTypes } from '../../context-api/reducer'
import Modal from 'react-modal'

function NavBarSearch(props) {
	const[{ periodicTable, periodicSearchList, periodicSearch }, dispatch] = useDataLayerValue()
	// sort elements in alphabetical order
	const elementToAlphabets = periodicSearchList
	elementToAlphabets.sort((a, b) => a.name.localeCompare(b.name))

	// search logic
	const searchList = periodicSearchList
	const handleMenuSearchText = (value) => {
		const searchResults = periodicTable.filter((element) => element?.name?.toLowerCase().includes(value.toLowerCase()))
		
		dispatch({
			type: actionTypes.SEARCH_LIST,
			periodicSearchList: searchResults
		})

		console.log(value.toLowerCase())
		console.log(value, searchResults)
	}

	const handleNavBarElementTab = (atomicNo) => {
		closeDetailsModal(periodicSearch) // close search modal
		// set selected element
		const selectedElement = periodicSearchList.filter((element) => element.number === atomicNo)[0]
		
		dispatch({
			type: actionTypes.SET_DETAILS_MODAL,
			periodicDetails: true
		})

		dispatch({
			type: actionTypes.SET_SELECTED_ELEMENT,
			periodicSelectedElement: selectedElement 
		})
	}

	const searchModalState = (value) => {
		switch (value) {
			case "hidebx":
				setIsModalOpen(false)
				props.func('menu-tapped')
				break;
				
			default:
				setIsModalOpen(true)
				props.func('')
			break;
		}
	}

	const [isModalOpen, setIsModalOpen] = useState(true)
	const closeDetailsModal = (value) => {
		searchModalState(value)
		dispatch({
			type: actionTypes.SEARCH_UI_TOGGLE,
			periodicSearch: "hidebx"
		})
	}

	return (
		<Modal overlayClassName={`navbar-search-container ${periodicSearch}`}
		className="navbar-search-inner flex-row"
		isOpen={isModalOpen}
		shouldCloseOnOverlayClick={true}
		onRequestClose={() => {
			closeDetailsModal(periodicSearch)
		}}
		>
			{/* <div className="navbar-search-inner flex-row"> */}
				<input type="text" 
					onChange={(e) => handleMenuSearchText(e.target.value)}
					onKeyPress={(e) => handleMenuSearchText(e.target.value)}
					className={`navbar-search-txtbox navbar-item`} 
					placeholder="Search element..."
				/>
				<aside className="navbar-search-tab-container">
					<section className="navbar-search-tab-box flex-row">
						{elementToAlphabets.map((element, keyId) => {
							return <NavBarElementTab key={keyId} bomb={element.number} func={handleNavBarElementTab} element={element} />
						})}
					</section>
				</aside>
			{/* </div> */}
		</Modal>
	)
}

export default NavBarSearch
