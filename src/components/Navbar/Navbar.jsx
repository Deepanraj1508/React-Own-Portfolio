import React from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'

const Navbar = () => {
    return (
        <div className='navbar-main'>
            <div className='navbar'>
            <ul className="nav-menu-left">
                <li className="nav-item">Home</li>
                <li className="nav-item">About</li>
                <li className="nav-item">Service</li>
            </ul>
            <div className="nav-item nav-logo">
                <img src={logo} alt="" />
                <div>
                    <p className='nav-name-prev'>DR</p>
                    <p className='nav-name-full'>Made by <br /><span>Deepanraj</span></p>
                </div>
            </div>
            <ul className="nav-menu-right">
                <li className="nav-item">Resume</li>
                <li className="nav-item">Project</li>
                <li className="nav-item">Contact</li>
            </ul>

        </div>
        </div>
        
    )
}

export default Navbar