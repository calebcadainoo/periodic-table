/* eslint-disable no-empty-pattern */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import '../../styles/NavBar.css'
import SearchIcon from '../../ico/search.svg'
import { useDataLayerValue } from '../../context-api/DataLayer'
import { actionTypes } from '../../context-api/reducer'
import NavBarSearch from './NavBarSearch'

function NavBar() {
  const[{periodicSearch}, dispatch] = useDataLayerValue()
  const [menuSearchIcon, setMenuSearchIcon] = useState('')

  const [menuOpen, setMenuOpen] = useState(false)
  const [menuCloseClass, setMenuCloseClass] = useState('')
  const [openSearchModal, setOpenSearchModal] = useState(false)

  const handleMenuState = () => {
    if (periodicSearch === "hidebx") {
      setMenuOpen(true)
      setMenuCloseClass('menu-tapped')
      setOpenSearchModal(true) // open search modal
      dispatch({
				type: actionTypes.SEARCH_UI_TOGGLE,
				periodicSearch: "" 
			})
    } else {
      setMenuOpen(false)
      setOpenSearchModal(false) // close search modal
      dispatch({
				type: actionTypes.SEARCH_UI_TOGGLE,
				periodicSearch: "hidebx" 
			})
    }
  }

  return (
    <>
      <nav className="navbar">
        <div onClick={handleMenuState} className={`navbar-item navbar-menu ${menuCloseClass}`}>
          <div className="middle"></div>
        </div>
        <div className="navbar-item navbar-name">
          Periodic Table
        </div>
        <div className="navbar-item navbar-search-holder">
          <img className={`navbar-item navbar-search ${menuSearchIcon}`} src={SearchIcon} alt="search icon"/>
        </div>
      </nav>
      <NavBarSearch func={setMenuCloseClass} searchModalVal={openSearchModal} searchModalFunc={setOpenSearchModal} />
    </>
  )
}

export default NavBar
