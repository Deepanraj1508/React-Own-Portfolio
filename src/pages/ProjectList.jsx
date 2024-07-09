// src/components/ProjectList.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectList.css'

const ProjectList = ({ projects }) => {
    return (
        <div>
            {projects.map(project => (
                <div key={project.id} className='project-list'>
                    <div className="project-container">
                        <div className="project-title">
                            <h2>{project.projectName}</h2>
                            <p>{project.context}</p>
                        </div>
                        <div className="project-btn">
                            <Link to={`/project/${project.id}`}>
                                <button>View Details</button>
                            </Link>
                        </div>
                    </div>


                </div>
            ))}
        </div>
    );
};

export default ProjectList;
