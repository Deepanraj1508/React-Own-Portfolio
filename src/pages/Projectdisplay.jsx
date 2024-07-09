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
            <h2>{project.role}</h2>
            <p>{project.context}</p>
            <p>Duration: {project.duration}</p>
            <p>Individual Contribution:</p>
            <p>Video Link: <a href={project.individualContribution.videoLink} target="_blank" rel="noopener noreferrer">Watch Video</a></p>
            <img src={project.individualContribution.images} alt={project.role} style={{ width: '100px', height: '100px' }} />
            <h4>Skills:</h4>
            <ul>
                {project.individualContribution.skills.map((skill, index) => (
                    <li key={index}>
                        <img src={skill.image} alt={skill.name} style={{ width: '50px', height: '50px', marginRight: '10px' }} />
                        {skill.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProjectDisplay;
