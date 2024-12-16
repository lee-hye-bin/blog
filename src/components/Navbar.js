import React from 'react'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <NavLink to='/' className="logo">BLOG</NavLink>
      <ul>
        <li>
          <NavLink to="/" className="navLink">Home</NavLink>
        </li>
        <li>
          <NavLink to="/pages" className="navLink">Pages</NavLink>
        </li>
        <li>
          <NavLink to="/profile" className="navLink">Profile</NavLink>
        </li>
      </ul>
    </nav>
    
  )
}

export default Navbar