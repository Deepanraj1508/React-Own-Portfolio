import React, { useState } from 'react';
import { Element } from 'react-scroll';
import './Hero.css';
import '../Responsive/Responsive.css';
import vector_img_up from '../Assets/hero/Vector-1.png';
import vector_img_down from '../Assets/hero/Vector-2.png';
import quotes from '../Assets/hero/quote-up.png';
import up_arrow from '../Assets/hero/up right.png';
import main_back from '../Assets/hero/back.png';
import main_front from '../Assets/hero/front.png';
import main_middle from '../Assets/hero/middle-.png';
import star from '../Assets/hero/Star.png';
import resume from '../Assets/Deepanraj K Resume.pdf';

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Element name="home">
    <div className='hero-page'>
        <div className={`main-content ${isHovered ? 'hide' : ''}`}>
            <div className="main-btn">
                <button>Hello!</button>
                <img src={vector_img_up} alt="" />
            </div>
            <div className="main-data">
                <h1>Hi, I'm <span>Deepanraj,</span></h1>
                <h1>Full Stack Developer</h1>
                <img src={vector_img_down} alt="" />
            </div>
        </div>
        <div className='main-content-img'>
            <div className={`main-left ${isHovered ? 'show' : ''}`}>
                <img src={quotes} alt="" />
                <p>I am a passionate individual dedicated to working on end-to-end products that develop sustainable and scalable social and technical systems, creating a meaningful impact.</p>
            </div>
            <div 
              className="main-middle" 
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
                <img src={main_back} alt="Back" className="main-back" />
                <img 
                  src={main_middle} 
                  alt="Middle" 
                  className={`main-middle-img ${isHovered ? 'show' : ''}`}
                />
                <img src={main_front} alt="Front" className="main-front" />
                <div className="main-img-btn">
                    <a className='btn-arrow' href={'https://github.com/Deepanraj1508' } target="_blank" rel="noopener noreferrer">GitHub <img src={up_arrow} alt="" /></a>
                    <a className='btn-arrow' href={resume} target="_blank" rel="noopener noreferrer">Resume <img src={up_arrow} alt="" /></a>
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
                <h1>1+ Years</h1>
                <p>Experience</p>
            </div>
        </div>
    </div>
    </Element>
  )
}

export default Hero;
