import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './ImageSlideshow.css'; // Create this file for custom styles

import project_one from '../Assets/ncg.png'
import project_two from '../Assets/bank.png'

const ImageSlideshow = () => {
  const images = [
    project_one,
    project_two,
    project_one,
  ];

  return (
    <div className="slideshow-container">
      <Slide easing="ease" duration={2000} transitionDuration={500} indicators arrows>
        {images.map((image, index) => (
          <div className="slide-wrapper" key={index}>
            <div
              className="blurred-image left-blur"
              style={{ backgroundImage: `url(${images[(index - 1 + images.length) % images.length]})` }}
            ></div>
            <div className="each-slide">
              <img src={image} alt={`Slide ${index + 1}`} />
            </div>
            <div
              className="blurred-image right-blur"
              style={{ backgroundImage: `url(${images[(index + 1) % images.length]})` }}
            ></div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default ImageSlideshow;
