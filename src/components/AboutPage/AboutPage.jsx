import React from 'react'
import './AboutPage.css'
import img_prev from '../Assets/about/img-prev.png'
import img_after from '../Assets/about/image-after.png'

const AboutPage = () => {
  return (
    <div className='aboutpage'>
        <div className="about-img">
            <img className='about-img-prev' src={img_prev} alt="" />
            <img className='about-img-after' src={img_after} alt="" />

        </div>
        <div className="about-content">
            <h1>About <span>Us</span></h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime quasi sed vel esse voluptate, vitae voluptates architecto aperiam tempore assumenda cupiditate dolor quam inventore accusamus commodi debitis nobis. Porro, aliquid!</p>
            <div className="about-btn">
                <button>Read More</button>
            </div>
        </div>

    </div>
  )
}

export default AboutPage