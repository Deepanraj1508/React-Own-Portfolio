import React from 'react';
import { Element } from 'react-scroll';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import ImageSlideshow from '../ImageSlideshow/ImageSlideshow';
import './ProjectSection.css'

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
      <div className="project-btn">
        <button onClick={handleExploreClick}>Explore Project</button>
      </div>
    </Element>
  );
};

export default ProjectSection;
