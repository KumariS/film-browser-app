import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="header">
      <nav className="header__nav">
        <Link to="/" className="header__link">Home</Link>
        <Link to="/wishlist" className="header__link">Wish List</Link>
      </nav>
    </header>
  )
}

export default Header    