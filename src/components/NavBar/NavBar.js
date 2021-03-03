import React, { useState } from 'react'
import './NavBar.css'
import SearchIcon from '../../ico/search.svg'

function NavBar() {
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
  }

  return (
    <nav className="navbar">
      <div onClick={handleMenuState} className={`navbar-item navbar-menu ${menuCloseClass}`}>
      <div className="middle"></div>
      </div>
      <div className="navbar-item navbar-name">
        Periodic Table
      </div>
      <div className="navbar-item navbar-search">
        <img src={SearchIcon} alt="search icon"/>
      </div>
    </nav>
  )
}

export default NavBar
