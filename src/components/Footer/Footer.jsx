import React from 'react'
import { Link } from 'react-scroll';
import './Footer.css'
import '../Responsive/Responsive.css'
import right_arrow from '../Assets/footer/right_arrow.png'
import up_arrow from '../Assets/footer/up right.png'
import logo from '../Assets/logo.png'
import instagram from '../Assets/footer/social_icons/insta.png'
import facebook from '../Assets/footer/social_icons/facebook.png'
import whatsapp from '../Assets/footer/social_icons/whatsapp.png'
import twitter from '../Assets/footer/social_icons/twitter.png'
import linkedin from '../Assets/footer/social_icons/linkedin.png'
import youtube from '../Assets/footer/social_icons/youtube.png'
import resume from '../Assets/Deepanraj.pdf';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-container-top'>
        <h1>
          Let's connect there
        </h1>
        <a href={resume} target="_blank" rel="noopener noreferrer">
          <button className='hire-me'>
            Resume
            <img className='hire-me-img-prev' src={up_arrow} alt="" />
            <img className='hire-me-img-after' src={right_arrow} alt="" />
          </button>
        </a>

      </div>
      <hr />
      <div className='footer-container-middle'>
        <div className='footer-container-middle-one'>
          <div className="footer-logo">
            <img src={logo} alt="" />
            <div>
              <p className='footer-name-prev'>DR</p>
              <p className='footer-name-full'>Made by <br /><span>Deepanraj</span></p>
            </div>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam iure odit itaque doloribus,
              in unde veniam delectus nemo fugit temporibus.
            </p>
          </div>


          <div className="social-icon">
            <a href="https://www.facebook.com/deepanraj.deepanraj.77312?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer"><img src={facebook} alt="Facebook" /></a>
            <a href="https://www.youtube.com/yourchannel" target="_blank" rel="noopener noreferrer"><img src={youtube} alt="YouTube" /></a>
            <a href="https://wa.me/7708486647" target="_blank" rel="noopener noreferrer"><img src={whatsapp} alt="WhatsApp" /></a>
            <a href="https://www.instagram.com/mr._attract/" target="_blank" rel="noopener noreferrer"><img src={instagram} alt="Instagram" /></a>
            <a href="https://twitter.com/Deepanr17836097" target="_blank" rel="noopener noreferrer"><img src={twitter} alt="Twitter" /></a>
            <a href="https://www.linkedin.com/in/deepanraj-k-b263a1233/" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="LinkedIn" /></a>
          </div>


        </div>

        <ul className='footer-navigation'>
          <h3>Navigation</h3>
          <Link
            to="home"
            smooth={true}
            duration={500}
          >
            <li>Home</li>
          </Link>
          <Link
            to="skills"
            smooth={true}
            duration={500}
          >
            <li>Skills</li>
          </Link>
          <Link
            to="project"
            smooth={true}
            duration={500}
          >
            <li>Project</li>
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
          >
            <li>About Me</li>
          </Link>
        </ul>
        <ul className='footer-contact'>
          <h3>Contact</h3>
          <li>
            <a className='footer-contact-link' href="tel:+917708486647">+91 7708486647</a>
          </li>
          <li>
            <a className='footer-contact-link' href="mailto:deepanraj.k15@gmail.com">deepanraj.k15@gmail.com</a>
          </li>
          <li>
            <a className='footer-contact-link' href="https://React-Own-Portfolio.com" target="_blank" rel="noopener noreferrer">
              React-Own-Portfolio.com
            </a>
          </li>
        </ul>

        {/* <div className='footer-email'>

          <h3>Get the latest information</h3>
          <div className='footer-email-btn'>
            <input type="text" placeholder='Email Address' />
            <img src={filled} height={24} width={24} alt="" />
          </div>

        </div> */}

      </div>
      <hr />
      <div className='footer-container-bottom'>
        <p>Copyright © 2024 Deepanraj. All Rights Reserved.</p>

      </div>

    </div>
  )
}

export default Footer