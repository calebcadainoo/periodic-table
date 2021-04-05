/* eslint-disable default-case */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import NavBarElementTab from './NavBarElementTab'
import { useDataLayerValue } from '../../context-api/DataLayer'
import { actionTypes } from '../../context-api/reducer'
import Modal from 'react-modal'
import Fade from 'react-reveal/Fade'

function NavBarSearch(props) {
	const[{ periodicTable }] = useDataLayerValue()
	const[{ periodicSearchList, periodicSearch }, dispatch] = useDataLayerValue()
	// sort elements in alphabetical order
	let elementToAlphabets = periodicSearchList
	// elementToAlphabets.sort((a, b) => a.name.localeCompare(b.name))

	// SORT LOGIC
	const [byAtomicNumber, setByAtomicNumber] = useState('navbar-sort-type navbar-sort-selected')
	const [byName, setByName] = useState('navbar-sort-type')
	const [bySymbol, setBySymbol] = useState('navbar-sort-type')
	const sortByValue = (value) => {
		// By Atomic Number
		if (value === 'atomic-number') {
			let sortByAtomicNumber = periodicTable
			sortByAtomicNumber = sortByAtomicNumber.sort((a, b) => a.number - b.number)
			dispatch({
				type: actionTypes.SEARCH_LIST,
				periodicSearchList: sortByAtomicNumber
			})
			setByName('navbar-sort-type')
			setBySymbol('navbar-sort-type')
			setByAtomicNumber('navbar-sort-type navbar-sort-selected')
		}

		// By Name
		if (value === 'name'){
			const sortByName = elementToAlphabets.sort((a, b) => a.name.localeCompare(b.name))
			dispatch({
				type: actionTypes.SEARCH_LIST,
				periodicSearchList: sortByName
			})
			setByAtomicNumber('navbar-sort-type')
			setBySymbol('navbar-sort-type')
			setByName('navbar-sort-type navbar-sort-selected')
		}

		// By Symbol
		if (value === 'symbol'){
			const sortBySymbol = periodicTable
			sortBySymbol.sort((a, b) => a.symbol.localeCompare(b.symbol))
			dispatch({
				type: actionTypes.SEARCH_LIST,
				periodicSearchList: sortBySymbol
			})
			setByAtomicNumber('navbar-sort-type')
			setByName('navbar-sort-type')
			setBySymbol('navbar-sort-type navbar-sort-selected')
		}
	}

	// SEARCH LOGIC
	const handleMenuSearchText = (value) => {
		const searchResults = periodicTable.filter((element) => element?.name?.toLowerCase().includes(value.toLowerCase()))
		
		dispatch({
			type: actionTypes.SEARCH_LIST,
			periodicSearchList: searchResults
		})
	}

	// NAV BAR TABS
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

	// OPEN CLOSE MENU ANIMATION
	const searchModalState = (value) => {
		switch (value) {
			case "hidebx":
				setIsModalOpen(false)
				props.func('menu-tapped')
				break
				
			default:
				setIsModalOpen(true)
				props.func('')
			break
		}
	}

	// CLOSE MODAL
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
			<input type="text" 
				onChange={(e) => handleMenuSearchText(e.target.value)}
				onKeyPress={(e) => handleMenuSearchText(e.target.value)}
				className={`navbar-search-txtbox navbar-item`} 
				placeholder="Search element..."
			/>
			<div className="navbar-search-sort-box flex-row">
				<div onClick={() => sortByValue('atomic-number')} className={byAtomicNumber}>Atomic Number</div>
				<div onClick={() => sortByValue('name')} className={byName}>Name</div>
				<div onClick={() => sortByValue('symbol')} className={bySymbol}>Symbol</div>
			</div>
			<aside className="navbar-search-tab-container">
			<Fade bottom cascade delay={500}>
				<section className="navbar-search-tab-box flex-row">
					{elementToAlphabets.map((element, keyId) => {
						return <NavBarElementTab key={keyId} bomb={element.number} func={handleNavBarElementTab} element={element} />
					})}
				</section>
			</Fade>
			</aside>
		</Modal>
	)
}

export default NavBarSearch
