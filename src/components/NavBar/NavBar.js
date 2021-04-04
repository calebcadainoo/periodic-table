import React, { useState } from 'react'
import '../../styles/NavBar.css'
import SearchIcon from '../../ico/search.svg'

function NavBar() {
  const [menuSearchText, setMenuSearchText] = useState('')
  const [menuSearchBarOpen, setMenuSearchBarOpen] = useState('hidebx')
  const [menuSearchIcon, setMenuSearchIcon] = useState('')
  const handleMenuSearchText = () => {

  }

  const handleSearchBarOpen = () => {
    (menuSearchBarOpen === 'hidebx') ? setMenuSearchBarOpen('') : setMenuSearchBarOpen('hidebx')

  }

  const [menuOpen, setMenuOpen] = useState(false)
  const [menuCloseClass, setMenuCloseClass] = useState('')
  const handleMenuState = () => {
    if (menuOpen === false) {
      setMenuOpen(true)
      setMenuCloseClass('menu-tapped')
    } else {
      setMenuOpen(false)
      setMenuCloseClass('')
    }
    handleSearchBarOpen()
  }

  return (
    <nav className="navbar">
      <div onClick={handleMenuState} className={`navbar-item navbar-menu ${menuCloseClass}`}>
        <div className="middle"></div>
      </div>
      <div className="navbar-item navbar-name">
        Periodic Table
      </div>
      <div className="navbar-item navbar-search-holder">
        <img onClick={handleSearchBarOpen} className={`navbar-item navbar-search ${menuSearchIcon}`} src={SearchIcon} alt="search icon"/>
      </div>
    </nav>
  )
}

export default NavBar
