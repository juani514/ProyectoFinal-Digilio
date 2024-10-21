import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css';

const NavBar = () => {

  return (

    <div className="navbar">

      <h1 className="brand-name">Beer Market</h1>

      <nav>

      <ul className="nav-links">

             <li><a id="rubias" href="#rubias">Cervezas Rubias</a></li>
             <li><a id="rojas" href="#rojas">Cervezas Rojas</a></li>
             <li><a id="negras" href="#negras">Cervezas Negras</a></li>
      </ul>

      </nav>

      <CartWidget />
      
    </div>
  )
}

export default NavBar