import React from 'react'
import { Element } from 'react-scroll';
import './Skills.css'
import html from '../Assets/skills/html.png'
import css from '../Assets/skills/css (1).png'
import js from '../Assets/skills/javascript.png'
import python from '../Assets/skills/python (1).png'
import react from '../Assets/skills/react.png'
import mysql from '../Assets/skills/mysql.png'
import sqlite from '../Assets/skills/sqlite.png'
import mongo from '../Assets/skills/mongo-db.png'
import git from '../Assets/skills/git.png'
import github from '../Assets/skills/github.png'
import bootstrap from '../Assets/skills/bootstrap.png'
import swagger from '../Assets/skills/swagger.png'



const Skills = () => {
    return (
        <Element name="skills">
            <div className="skills-header">
                <h1>Technical <span>Skills</span></h1>
            </div>
            <div className='skills_container'>

                <div className="skills">
                    <img src={html} alt="" />
                    <h4>HTML</h4>
                </div>
                <div className="skills">
                    <img src={css} alt="" />
                    <h4>CSS</h4>
                </div>
                <div className="skills">
                    <img src={js} alt="" />
                    <h4>Java Script</h4>
                </div>
                <div className="skills">
                    <img src={python} alt="" />
                    <h4>Python</h4>
                </div>
                <div className="skills">
                    <img src={react} alt="" />
                    <h4>React</h4>
                </div>
                <div className="skills">
                    <img src={mysql} alt="" />
                    <h4>My SQL</h4>
                </div>
            </div>
            <div className='skills_container'>

                <div className="skills">
                    <img src={sqlite} alt="" />
                    <h4>SQLite</h4>
                </div>
                <div className="skills">
                    <img src={mongo} alt="" />
                    <h4>MongoDB</h4>
                </div>
                <div className="skills">
                    <img src={github} alt="" />
                    <h4>GitHub</h4>
                </div>
                <div className="skills">
                    <img src={git} alt="" />
                    <h4>Git</h4>
                </div>
                <div className="skills">
                    <img src={bootstrap} alt="" />
                    <h4>Bootstrap</h4>
                </div>
            </div>
            <div className='skills_container'>

                <div className="skills">
                    <img src={swagger} alt="" />
                    <h4>Swagger</h4>
                </div>

            </div>
        </Element>
    )
}

export default Skills