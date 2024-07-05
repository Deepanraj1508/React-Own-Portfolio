import React from 'react';
import { Element } from 'react-scroll';
import './AboutPage.css';
import '../Responsive/Responsive.css';
import img_prev from '../Assets/about/img-prev.png';
import img_after from '../Assets/about/image-after.png';

const AboutPage = () => {
  return (
    <Element name="about">
      <div className="aboutpage">
        <div className="about-img">
          <img className="about-img-prev" src={img_prev} alt="Previous" />
          <img className="about-img-after" src={img_after} alt="After" />
        </div>
        <div className="about-content">
          <h1>About <span>Me</span></h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime quasi sed vel esse voluptate, vitae voluptates architecto aperiam tempore assumenda cupiditate dolor quam inventore accusamus commodi debitis nobis. Porro, aliquid!</p>
        </div>
      </div>
    </Element>
  );
};

export default AboutPage;
