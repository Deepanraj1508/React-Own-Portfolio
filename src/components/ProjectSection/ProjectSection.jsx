import React from 'react';
import { Element } from 'react-scroll';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import ImageSlideshow from '../ImageSlideshow/ImageSlideshow';
import './ProjectSection.css'
import right_arrow from '../Assets/footer/right_arrow.png';
import up_arrow from '../Assets/footer/up right.png';

const ProjectSection = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleExploreClick = () => {
    navigate('/projects'); // Navigate to /projects route
  };

  return (
    <Element name="project">
      <div className="project-header">
        <h1>My <span>Projects</span></h1>
      </div>
      <ImageSlideshow />
      <div className="project-btn-main">
        <button className='project-txt' onClick={handleExploreClick}>
          Explore Project
          <img className='project-btn-prev' src={up_arrow} alt="" />
          <img className='project-btn-after' src={right_arrow} alt="" />
        </button>
      </div>
    </Element>
  );
};

export default ProjectSection;
