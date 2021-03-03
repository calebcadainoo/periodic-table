import React from 'react'
import './NavBar.css'

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-item navbar-menu">ham menu</div>
      <div className="navbar-item navbar-name">
        Periodic Table
      </div>
      <div className="navbar-item navbar-search">search</div>
    </nav>
  )
}

export default NavBar
