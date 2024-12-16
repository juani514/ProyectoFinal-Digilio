import React from 'react';
import './Footer.css'; 
import logo from '../../img/logo-travel-devs.png'

const Footer = () => {
    return (
        <footer className="footer">
            
            <div className="footer-content">

                <img src={logo} alt="Logo" className="footer-logo" />

            </div>
            
        </footer>
    );
};

export default Footer;