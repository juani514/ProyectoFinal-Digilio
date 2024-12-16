import React, { useState } from "react";
import '../Navbar/Navbar.css';
import logoNavbar from '../../img/logo-travel-devs.png';
import CartWidget from '../CartWidget/CartWidget.jsx';
import { NavLink, Link } from "react-router-dom";



function Navbar() {
    return (

        <nav className="navbar navbar-expand-lg navbar-contenedor">
            <div className="navbar-content">
                <div className="navbar-logo">
                    <Link to="/" className="navbar-brand">
                        <img
                            className="logo-navbar"
                            src={logoNavbar}
                            alt="logo e-commerce"
                        />
                    </Link>
                </div>

                <div className="navbar-links">
                    <NavLink to={`/categoria/mochilas`} className={({ isActive }) => isActive ? 'ActiveOption' : 'PosibleOption'}>
                        Mochilas
                    </NavLink>
                    <NavLink to={`/categoria/tecnologia`} className={({ isActive }) => isActive ? 'ActiveOption' : 'PosibleOption'}>
                        Tecnología
                    </NavLink>
                    <NavLink to={`/categoria/accesorios`} className={({ isActive }) => isActive ? 'ActiveOption' : 'PosibleOption'}>
                        Accesorios
                    </NavLink>
                </div>

                <div className="navbar-cart">
                    <Link to="/cart/Cart" className="anchoCart">
                        <CartWidget />
                    </Link>
                </div>
            </div>
        </nav>


    )
}

export default Navbar;