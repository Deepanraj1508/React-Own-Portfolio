import React from 'react';
import { Element } from 'react-scroll';
import './Skills.css';
import skills_data from '../Assets/skill.js';  // Update with the correct path

const Skills = () => {
    return (
        <Element name="skills">
            <div className="skills-header">
                <h1>Technical <span>Skills</span></h1>
            </div>
            <div className='skills_container'>
                {skills_data.slice(0, 6).map(skill => (
                    <div key={skill.id} className="skills">
                        <img src={skill.image} alt={skill.name} />
                        <h4>{skill.name}</h4>
                    </div>
                ))}
            </div>
            <div className='skills_container'>
                {skills_data.slice(6, 12).map(skill => (
                    <div key={skill.id} className="skills">
                        <img src={skill.image} alt={skill.name} />
                        <h4>{skill.name}</h4>
                    </div>
                ))}
            </div>
            <div className='skills_container'>
                {skills_data.slice(12, 18).map(skill => (
                    <div key={skill.id} className="skills">
                        <img src={skill.image} alt={skill.name} />
                        <h4>{skill.name}</h4>
                    </div>
                ))}
            </div>
        </Element>
    );
}

export default Skills;
