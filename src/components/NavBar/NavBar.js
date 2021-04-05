/* eslint-disable no-empty-pattern */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import '../../styles/NavBar.css'
import SearchIcon from '../../ico/search.svg'
import { useDataLayerValue } from '../../context-api/DataLayer'
import { actionTypes } from '../../context-api/reducer'
import NavBarSearch from './NavBarSearch'

function NavBar() {
  const[{}, dispatch] = useDataLayerValue()
  const [menuSearchIcon, setMenuSearchIcon] = useState('')
  // const handleMenuSearchText = () => {

  // }

  const [menuOpen, setMenuOpen] = useState(false)
  const [menuCloseClass, setMenuCloseClass] = useState('')

  const handleMenuState = () => {
    if (menuOpen === false) {
      setMenuOpen(true)
      setMenuCloseClass('menu-tapped')
      dispatch({
				type: actionTypes.SEARCH_UI_TOGGLE,
				periodicSearch: "" 
			})
    } else {
      setMenuOpen(false)
      // setMenuCloseClass('')
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
      <NavBarSearch func={setMenuCloseClass} />
    </>
  )
}

export default NavBar
