import React, { useState } from 'react';
import { Link, Events, scrollSpy } from 'react-scroll';
import './Navbar.css';
import '../Responsive/Responsive.css';
import logo from '../Assets/logo.png';
import resume from '../Assets/Deepanraj.pdf';

const Navbar = () => {
    const [menuVisible, setMenuVisible] = useState(false);
    const [activeLink, setActiveLink] = useState('');

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    const handleSetActive = (to) => {
        setActiveLink(to);
    };

    React.useEffect(() => {
        Events.scrollEvent.register('begin', function () {
            console.log("begin", arguments);
        });

        Events.scrollEvent.register('end', function () {
            console.log("end", arguments);
        });

        scrollSpy.update();

        return () => {
            Events.scrollEvent.remove('begin');
            Events.scrollEvent.remove('end');
        };
    }, []);

    return (
        <div className='navbar-main'>
            <div className='navbar'>
                <ul className={`nav-menu-left ${menuVisible ? 'show' : ''}`}>
                    <Link 
                        to="home" 
                        smooth={true} 
                        duration={500} 
                        className={activeLink === 'home' ? 'active' : ''} 
                        onSetActive={handleSetActive}
                    >
                        <li className="nav-item">Home</li>
                    </Link>
                    <Link 
                        to="skills" 
                        smooth={true} 
                        duration={500} 
                        className={activeLink === 'skills' ? 'active' : ''} 
                        onSetActive={handleSetActive}
                    >
                        <li className="nav-item">Skills</li>
                    </Link>
                    <Link 
                        to="project" 
                        smooth={true} 
                        duration={500} 
                        className={activeLink === 'project' ? 'active' : ''} 
                        onSetActive={handleSetActive}
                    >
                        <li className="nav-item">Project</li>
                    </Link>
                </ul>
                <div className={`nav-item nav-logo ${menuVisible ? 'column' : 'row'}`}>
                    <img src={logo} alt="logo" />
                    <div>
                        <p className='nav-name-prev'>DR</p>
                        <p className='nav-name-full'>Made by <br /><span>Deepanraj</span></p>
                    </div>
                </div>
                <ul className={`nav-menu-right ${menuVisible ? 'show' : ''}`}>
                    <li className="nav-item">
                        <a href={resume} target="_blank" rel="noopener noreferrer">
                            Resume
                        </a>
                    </li>
                    <Link 
                        to="about" 
                        smooth={true} 
                        duration={500} 
                        className={activeLink === 'about' ? 'active' : ''} 
                        onSetActive={handleSetActive}
                    >
                        <li className="nav-item">About</li>
                    </Link>

                    <Link 
                        to="contact" 
                        smooth={true} 
                        duration={500} 
                        className={activeLink === 'contact' ? 'active' : ''} 
                        onSetActive={handleSetActive}
                    >
                    <li className="nav-item">Contact</li>
                    </Link>
                </ul>
                <div className="mobile-menu-icon" onClick={toggleMenu}>
                    <img src={logo} alt="mobile menu icon" />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
