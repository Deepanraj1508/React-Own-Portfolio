// src/components/ProjectDisplay.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import './ProjectList.css'

const ProjectDisplay = ({ projects }) => {
    const { projectId } = useParams();
    const project = projects.find(p => p.id === parseInt(projectId));

    if (!project) {
        return <div>Project not found</div>;
    }

    return (
        <div className='projects-data-display'>
            <div className="project-video">
                <iframe width="800" height="400" src={project.individualContribution.videoLink}
                    title="YouTube video player"
                    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>

            <div className="project-data-content">
                <p className='project-data-main'>Title: <span>{project.projectName}</span></p>
                <p className='project-data-main'>Role: <span>{project.role}</span></p>
                <p className='project-data-main'> Duration: <span>{project.duration}</span></p>
            </div>

            <div className="project-data-description">
                <p className='project-data-main'>Domain: <span>{project.domain}</span></p>
                <p className='project-data-main' >Project Description: <span>{project.ProjectDescription}</span></p>
            </div>
            <div className="project-data-skills">
                <h1 className='project-data-header' >Used <span>Skills</span></h1>
                <ul>
                    {project.individualContribution.skills.map((skill, index) => (
                        <li key={index}>
                            {skill.image && <img src={skill.image} alt={skill.name} style={{ width: '50px', height: '50px', marginRight: '10px' }} />}
                            {skill.name}
                        </li>
                    ))}
                </ul>

            </div>
            <p className='project-data-link' >Site Link: <a href={project.Sitelink} target="_blank" rel="noopener noreferrer">Visit Site</a></p>

            <div className="project-data-screenshot">
                <p className='project-data-header' >ScreenShots</p>
                <div className="screenshot-container">
                    {project.individualContribution.ScreenShots.map((screenshot, index) => (
                        <img
                            key={index}
                            src={screenshot}
                            alt={`Screenshot ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectDisplay;
