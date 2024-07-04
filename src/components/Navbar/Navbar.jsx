import React, { useState } from 'react';
import './Navbar.css';
import '../Responsive/Responsive.css';
import logo from '../Assets/logo.png';
// import mobileLogo from '../Assets/mobileLogo.png'; // Add a mobile logo if needed

const Navbar = () => {
    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    return (
        <div className='navbar-main'>
            <div className='navbar'>
                <ul className={`nav-menu-left ${menuVisible ? 'show' : ''}`}>
                    <li className="nav-item">Home</li>
                    <li className="nav-item">About</li>
                    <li className="nav-item">Service</li>
                </ul>
                <div className={`nav-item nav-logo ${menuVisible ? 'column' : 'row'}`}>
                    <img src={logo} alt="logo" />
                    <div>
                        <p className='nav-name-prev'>DR</p>
                        <p className='nav-name-full'>Made by <br /><span>Deepanraj</span></p>
                    </div>
                </div>
                <ul className={`nav-menu-right ${menuVisible ? 'show' : ''}`}>
                    <li className="nav-item">Resume</li>
                    <li className="nav-item">Project</li>
                    <li className="nav-item">Contact</li>
                </ul>
                <div className="mobile-menu-icon" onClick={toggleMenu}>
                    <img src={logo} alt="mobile menu icon" />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
