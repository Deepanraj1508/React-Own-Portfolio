import React, { useState } from 'react'
import './Hero.css'
import vector_img_up from '../Assets/hero/Vector-1.png'
import vector_img_down from '../Assets/hero/Vector-2.png'
import quotes from '../Assets/hero/quote-up.png'
import up_arrow from '../Assets/hero/up right.png'
import main_prev from '../Assets/hero/main-prev.png'
import main_after from '../Assets/hero/main-after.png'
import star from '../Assets/hero/Star.png'

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className='hero-page'>
        <div className={`main-content ${isHovered ? 'hide' : ''}`}>
            <div className="main-btn">
                <button>Hello!</button>
                <img src={vector_img_up} alt="" />
            </div>
            <div className="main-data">
                <h1>Hi, I'm <span>Deepanraj,</span></h1>
                <h1>Backend Developer</h1>
                <img src={vector_img_down} alt="" />
            </div>
        </div>
        <div className={'main-content-img' }>
            <div className={`main-left ${isHovered ? 'show' : ''}`}>
                <img src={quotes} alt="" />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro, cumque nobis? Praesentium illum ratione officiis quae voluptatum itaque obcaecati!</p>
            </div>
            <div className="main-middle">
                <img 
                  src={isHovered ? main_after : main_prev} 
                  alt="" 
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                />
                <div className="main-img-btn">
                    <a className='btn-arrow' href="">Portfolio <img src={up_arrow} alt="" /></a>
                    <a className='btn-arrow' href="">Hire me <img src={up_arrow} alt="" /></a>
                </div>
            </div>
            <div className={`main-right ${isHovered ? 'show' : ''}`}>
                <div className="main-star">
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                </div>
                <h1>1 Years</h1>
                <p>Experience</p>
            </div>
        </div>
    </div>
  )
}

export default Hero
