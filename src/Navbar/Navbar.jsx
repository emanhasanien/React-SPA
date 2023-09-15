import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <>

    
<nav className="navbar navbar-expand-lg ">
  <div className="container">
    <NavLink className="navbar-brand text-white fs-2 fw-bolder" to="/home">START FRAMEWORK </NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

        <li className="nav-item">
          <NavLink className="nav-link text-white fw-bold " to="/about">ABOUT</NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link text-white  fw-bold " to="/portfolio">PORTFOLIO</NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link text-white  fw-bold" to="/contact">CONTACT</NavLink>
        </li>
       
      </ul>
    
    </div>
  </div>
</nav>


    </>
  )
}
