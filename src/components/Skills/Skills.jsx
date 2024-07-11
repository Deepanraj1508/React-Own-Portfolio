import React, { useState } from 'react';
import { Element } from 'react-scroll';
import Modal from 'react-modal';
import './Skills.css';
import skills_data from '../Assets/skill.js';  // Update with the correct path

Modal.setAppElement('#root');  // Set the app root element

const Skills = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedSkill, setSelectedSkill] = useState(null);

    const openModal = (skill) => {
        setSelectedSkill(skill);
        setModalIsOpen(true);
        document.body.style.overflow = 'hidden';  // Disable background scrolling
    };

    const closeModal = () => {
        setModalIsOpen(false);
        setSelectedSkill(null);
        document.body.style.overflow = 'auto';  // Enable background scrolling
    };

    return (
        <Element name="skills">
            <div className="skills-header">
                <h1>Technical <span>Skills</span></h1>
            </div>
            <div className='skills_container'>
                {skills_data.slice(0, 6).map(skill => (
                    <div key={skill.id} className="skills" onClick={() => openModal(skill)}>
                        <img src={skill.image} alt={skill.name} />
                        <h4>{skill.name}</h4>
                    </div>
                ))}
            </div>
            <div className='skills_container'>
                {skills_data.slice(6, 12).map(skill => (
                    <div key={skill.id} className="skills" onClick={() => openModal(skill)}>
                        <img src={skill.image} alt={skill.name} />
                        <h4>{skill.name}</h4>
                    </div>
                ))}
            </div>
            <div className='skills_container'>
                {skills_data.slice(12, 18).map(skill => (
                    <div key={skill.id} className="skills" onClick={() => openModal(skill)}>
                        <img src={skill.image} alt={skill.name} />
                        <h4>{skill.name}</h4>
                    </div>
                ))}
            </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Example Code"
                className="modal"
                overlayClassName="overlay"
            >
                <div className='exp-code main'>
                    <h2 className='exp-code-header'>{selectedSkill?.name} Example Code</h2>
                    <pre className='exp-code-pre'>
                        <div className="code-colors">
                            <div className="orange"></div>
                            <div className="yellow"></div>
                            <div className="green"></div>
                        </div>

                        <code className='exp-code'>
                            {selectedSkill?.example}
                        </code>
                    </pre>
                    <div className='exp-btn'>
                        <button className='exp-code-btn' onClick={closeModal}>Close</button>
                    </div>
                </div>

            </Modal>
        </Element>
    );
}

export default Skills;
