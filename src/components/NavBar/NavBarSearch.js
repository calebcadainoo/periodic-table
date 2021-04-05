import React, { useState } from 'react'
import NavBarSearchElementTab from './NavBarSearchElementTab'
import { useDataLayerValue } from '../../context-api/DataLayer'
import { actionTypes } from '../../context-api/reducer'
import Modal from 'react-modal'
import Fade from 'react-reveal/Fade'
import Zoom from 'react-reveal/Zoom'

function NavBarSearch(props) {
	const[{ periodicTable }] = useDataLayerValue()
	const[{ periodicSearchList, periodicSearch }, dispatch] = useDataLayerValue()
	// sort elements in alphabetical order
	let elementToAlphabets = periodicSearchList

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
				props.searchModalFunc(false)
				props.func('menu-tapped')
				break
				
			default:
				props.searchModalFunc(true)
				props.func('')
			break
		}
	}

	// CLOSE MODAL
	const closeDetailsModal = (value) => {
		props.searchModalFunc(false)
		searchModalState(value)
		dispatch({
			type: actionTypes.SEARCH_UI_TOGGLE,
			periodicSearch: "hidebx"
		})
	}

	return (
		<Fade left cascade>
		<Modal overlayClassName={`navbar-search-container ${periodicSearch}`}
			className="navbar-search-inner flex-row"
			isOpen={props.searchModalVal}
			shouldCloseOnOverlayClick={true}
			onRequestClose={() => {
				closeDetailsModal(periodicSearch)
			}}
		>
			<Zoom delay={50}>
				<input type="text" 
					onChange={(e) => handleMenuSearchText(e.target.value)}
					onKeyPress={(e) => handleMenuSearchText(e.target.value)}
					className={`navbar-search-txtbox navbar-item`} 
					placeholder="Search by element name..."
				/>
			</Zoom>
			<Fade bottom cascade delay={100}>
				<div className="navbar-search-sort-box flex-row">
					<div onClick={() => sortByValue('atomic-number')} className={byAtomicNumber}>Atomic Number</div>
					<div onClick={() => sortByValue('name')} className={byName}>Name</div>
					<div onClick={() => sortByValue('symbol')} className={bySymbol}>Symbol</div>
				</div>
			</Fade>
			<aside className="navbar-search-tab-container">
				<section className="navbar-search-tab-box flex-row">
					{elementToAlphabets.map((element, keyId) => {
						return <NavBarSearchElementTab key={keyId} bomb={element.number} func={handleNavBarElementTab} element={element} />
					})}
				</section>
			</aside>
		</Modal>
		</Fade>
	)
}

export default NavBarSearch
