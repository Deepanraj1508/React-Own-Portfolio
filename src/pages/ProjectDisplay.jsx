// src/components/ProjectDisplay.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ProjectList.css';

const ProjectDisplay = ({ projects }) => {
    const [currentImage, setCurrentImage] = useState(null);
    const [isFullscreen, setIsFullscreen] = useState(false);

    useEffect(() => {
        if (isFullscreen) {
            document.body.style.overflow = 'hidden';
            window.scrollTo(0, 0);
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isFullscreen]);

    const openFullscreen = (index) => {
        setCurrentImage(index);
        setIsFullscreen(true);
    };

    const closeFullscreen = () => {
        setIsFullscreen(false);
    };

    const showNextImage = () => {
        setCurrentImage((prevIndex) => (prevIndex + 1) % project.individualContribution.ScreenShots.length);
    };

    const showPrevImage = () => {
        setCurrentImage((prevIndex) => (prevIndex - 1 + project.individualContribution.ScreenShots.length) % project.individualContribution.ScreenShots.length);
    };

    const { projectId } = useParams();
    const project = projects.find(p => p.id === parseInt(projectId));

    if (!project) {
        return <div>Project not found</div>;
    }

    return (
        <div className='projects-data-display'>
            <div className="project-video">
                <iframe
                    width="800"
                    height="400"
                    src={project.individualContribution.videoLink}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                ></iframe>
            </div>

            <div className="project-data-content">
                <p className='project-data-main'>Title: <span>{project.projectName}</span></p>
                <p className='project-data-main'>Role: <span>{project.role}</span></p>
                <p className='project-data-main'> Duration: <span>{project.duration}</span></p>
            </div>

            <div className="project-data-description">
                <p className='project-data-main'>Domain: <span>{project.domain}</span></p>
                <p className='project-data-main'>Project Description: <span>{project.ProjectDescription}</span></p>
            </div>

            <div className="project-data-skills">
                <h1 className='project-data-header'>Used <span>Skills</span></h1>
                <ul>
                    {project.individualContribution.skills.map((skill, index) => (
                        <li key={index}>
                            {skill.image && <img src={skill.image} alt={skill.name} style={{ width: '80px', height: '80px', padding: '5px 60px;' }} />}
                            {skill.name}
                        </li>
                    ))}
                </ul>
            </div>

            <h1 className='project-data-link'>Site Link:<a href={project.Sitelink} target="_blank" rel="noopener noreferrer"> Visit Site</a></h1>
            
            <div className="project-data-screenshot">
                <p className='project-data-header'>Screenshots</p>
                <div className="screenshot-container">
                    {project.individualContribution.ScreenShots.map((screenshot, index) => (
                        <img
                            key={index}
                            src={screenshot}
                            alt={`Screenshot ${index + 1}`}
                            onClick={() => openFullscreen(index)}
                        />
                    ))}
                </div>

                {isFullscreen && (
                    <div className="fullscreen-view">
                        <button className="close-button" onClick={closeFullscreen}>X</button>
                        <button className="nav-button left" onClick={showPrevImage}>←</button>
                        <img
                            src={project.individualContribution.ScreenShots[currentImage]}
                            alt={`Screenshot ${currentImage + 1}`}
                        />
                        <button className="nav-button right" onClick={showNextImage}>→</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProjectDisplay;
