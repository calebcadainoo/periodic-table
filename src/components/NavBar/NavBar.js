import React, { useState } from 'react'
import '../../styles/NavBar.css'
import AboutIcon from '../../ico/about.svg'
import { useDataLayerValue } from '../../context-api/DataLayer'
import { actionTypes } from '../../context-api/reducer'
import NavBarSearch from './NavBarSearch'

function NavBar() {
  const[{periodicSearch}, dispatch] = useDataLayerValue()
  
  const [menuCloseClass, setMenuCloseClass] = useState('')
  const [openSearchModal, setOpenSearchModal] = useState(false)

  const handleMenuState = () => {
    if (periodicSearch === "hidebx") {
      setMenuCloseClass('menu-tapped')
      setOpenSearchModal(true) // open search modal
      dispatch({
				type: actionTypes.SEARCH_UI_TOGGLE,
				periodicSearch: "" 
			})
    } else {
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
          <a href="https://linkedin.com/in/calebcadainoo" target="_blank" rel="noreferrer">
            <img className={`navbar-item navbar-about`} src={AboutIcon} alt="about icon" title="About Developer"/>
          </a>
        </div>
      </nav>
      <NavBarSearch func={setMenuCloseClass} searchModalVal={openSearchModal} searchModalFunc={setOpenSearchModal} />
    </>
  )
}

export default NavBar
