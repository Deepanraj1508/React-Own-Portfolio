import React from 'react'
import './Footer.css'
import '../Responsive/Responsive.css'
import right_arrow from '../Assets/footer/right_arrow.png'
import up_arrow from '../Assets/footer/up right.png'
import filled from '../Assets/footer/filled.png'
import logo from '../Assets/logo.png'
import instagram from '../Assets/footer/social_icons/insta.png'
import facebook from '../Assets/footer/social_icons/facebook.png'
import whatsapp from '../Assets/footer/social_icons/whatsapp.png'
import twitter from '../Assets/footer/social_icons/twitter.png'
import linkedin from '../Assets/footer/social_icons/linkedin.png'
import youtube from '../Assets/footer/social_icons/youtube.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-container-top'>
        <h1>
          Let's connect there
        </h1>
        <button className='hire-me'>Hire me
          <img className='hire-me-img-prev' src={up_arrow} alt="" />
          <img className='hire-me-img-after' src={right_arrow} alt="" />
        </button>
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
            <img src={facebook} alt="" />
            <img src={youtube} alt="" />
            <img src={whatsapp} alt="" />
            <img src={instagram} alt="" />
            <img src={twitter} alt="" />
            <img src={linkedin} alt="" />
          </div>


        </div>
        
        <ul className='footer-navigation'>
        <h3>Navigation</h3>
          <li>Home</li>
          <li>About Us</li>
          <li>Service</li>
          <li>Resume</li>
          <li>Project</li>
        </ul>
        <ul className='footer-contact'>
        <h3>Contact</h3>
          <li>+91 7708486647</li>
          <li>Deepan@gmail.com</li>
          <li>Portfolio-dr.com</li>
        </ul>
        <div className='footer-email'>

          <h3>Get the latest information</h3>
          <div className='footer-email-btn'>
            <input type="text" placeholder='Email Address' />
            <img src={filled} height={24} width={24} alt="" />
          </div>

        </div>

      </div>
      <hr />
      <div className='footer-container-bottom'>
        <p>Copyright© 2024 Deepanraj. All Rights Reserved.</p>
        <p>User Terms & Conditions | Privacy Policy </p>

      </div>

    </div>
  )
}

export default Footer