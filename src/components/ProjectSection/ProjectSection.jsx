import React from 'react';
import { Element } from 'react-scroll';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './ProjectSection.css';
import img_prev from '../Assets/about/img-prev.png';

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
      <div className='project-container'>
        <div className="project-left">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita iste neque nulla labore autem maxime impedit dolor iusto mollitia, nostrum vitae quas omnis adipisci natus ullam quisquam alias, repudiandae ab.</p>
          <button onClick={handleExploreClick}>Explore Project</button> {/* Add onClick event */}
        </div>
        <div className="project-right">
          <img src={img_prev} alt="" />
        </div>
      </div>
    </Element>
  );
};

export default ProjectSection;
