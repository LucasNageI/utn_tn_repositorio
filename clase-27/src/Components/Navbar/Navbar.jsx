import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header>
        <h2>logo</h2>
        <nav>
            <NavLink to={"/Contact"}>Contact</NavLink>
            <NavLink to={"/Cart"}>Cart</NavLink>
        </nav>
    </header>
  )
}

export default Navbar