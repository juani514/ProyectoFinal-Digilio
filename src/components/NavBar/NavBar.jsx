import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css';
import logo from '../../assets/logo.ico'

const NavBar = () => {

  return (

    <div className="navbar">
      
      <div className="logo-container">

      <img className="logo" src={logo}></img>
      <h1 className="brand-name">Beer Market</h1>

      </div>

      <nav className="nav-container">

      <ul className="nav-links">

             <li><a id="rubias" href="#rubias">Cervezas Rubias</a></li>
             <li><a id="rojas" href="#rojas">Cervezas Rojas</a></li>
             <li><a id="negras" href="#negras">Cervezas Negras</a></li>
      </ul>

      <CartWidget/>

      </nav>
      
    </div>
  )
}

export default NavBar