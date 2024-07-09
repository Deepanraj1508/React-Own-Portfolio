// src/components/ProjectDisplay.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const ProjectDisplay = ({ projects }) => {
    const { projectId } = useParams();
    const project = projects.find(p => p.id === parseInt(projectId));

    if (!project) {
        return <div>Project not found</div>;
    }

    return (
        <div>
            <h2>{project.projectName}</h2>
            <h3>{project.role}</h3>
            <p>{project.context}</p>
            <p>Project Description: {project.ProjectDescription}</p>
            <p>Domain: {project.domain}</p>
            <p>Duration: {project.duration}</p>
            <p>Individual Contribution:</p>
            <div>
                <p>Video:</p>
                <iframe width="560" height="315" src={project.individualContribution.videoLink}
                title="YouTube video player" 
                frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <div>
                {project.individualContribution.ScreenShots.map((screenshot, index) => (
                    <img key={index} src={screenshot} alt={`Screenshot ${index + 1}`} style={{ width: '100px', height: '100px', marginRight: '10px' }} />
                ))}
            </div>
            <h4>Skills:</h4>
            <ul>
                {project.individualContribution.skills.map((skill, index) => (
                    <li key={index}>
                        {skill.image && <img src={skill.image} alt={skill.name} style={{ width: '50px', height: '50px', marginRight: '10px' }} />}
                        {skill.name}
                    </li>
                ))}
            </ul>
            <p>Site Link: <a href={project.Sitelink} target="_blank" rel="noopener noreferrer">Visit Site</a></p>
        </div>
    );
};

export default ProjectDisplay;
