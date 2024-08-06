import React, { useState } from 'react';
import './Resume.css';
import { Element } from 'react-scroll';
import resume from '../Assets/Deepanraj K Resume.pdf';
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel } from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

const Resume = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const handleAccordionClick = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (

        <Element name="resume">
        <div className='resume-container'>
            <div className='resume-left'>
                <p className='resume-title'>My <span>Resume</span></p>
                <a href={resume} className='resume-link' target="_blank" rel="noopener noreferrer">
                    PDF of current resume
                </a>
            </div>
            <div className='resume-right'>
                <Accordion
                    allowMultipleExpanded={false}
                    allowZeroExpanded={true}
                    preExpanded={openIndex !== null ? [openIndex] : []}
                >
                    <AccordionItem  >
                        <AccordionItemHeading>
                            <AccordionItemButton onClick={() => handleAccordionClick()}>
                                <div className="flex">
                                    <h3 className='exp-header'>Experience</h3>
                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <h4 className="exp-title">Python Back-end Developer</h4>
                            <h4 className="company-title">Vybog India Pvt. Ltd., | Chennai, TN</h4>
                            <span className='res-span'>November 2023 - Present</span>
                            <ul className="roles-res">
                                <li className="exp-roles">Developed and maintained web applications using Django,
                                    enhancing user experience and functionality.</li>
                                <li className="exp-roles">Collaborated with front-end developers to integrate APIs and
                                    improve overall application performance.</li>
                                <li className="exp-roles">Implemented LLM (Large Language Model) using OpenAi,
                                    resulting in improved Accuracy for the Resume parser.</li>
                                <li className="exp-roles">Wrote and executed unit tests using PyTest, ensuring robust and
                                    error-free code.</li>
                                <li className="exp-roles">Worked with SQL databases to create, read, update, and delete
                                    data as per application requirements.</li>
                                <li className="exp-roles">Participated in code reviews and contributed to the development
                                    of best practices and coding standards.</li>
                                <li className="exp-roles">Automated routine tasks using Python scripts, increasing team
                                    productivity by 15%.</li>
                                <li className="exp-roles">Documented code functionalities and processes, improving
                                    knowledge sharing within the team.</li>
                            </ul>
                        </AccordionItemPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton onClick={() => handleAccordionClick(1)}>
                                <div className="flex">
                                    <h3 className='exp-header'>Education</h3>
                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <h4 className="edu-title">Jairams Arts and Science College- Karur, Tamil Nadu, India  &nbsp;  (2020 - 2023)</h4>
                            <span className='res-span'></span>
                            <p className="timeline-text">
                                Bachelor of Computer Application
                            </p>
                            <span className='res-span'>Percentage - 82%</span>
                        </AccordionItemPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton onClick={() => handleAccordionClick(2)}>
                                <div className="flex">
                                    <h3 className='exp-header'>Certification</h3>
                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <h4 className="certi-title">Python (Data science) & SQL at cognitiveclass.ai Powered by IBM Developer Skills Network.</h4>
                            <span className='res-span'>2023</span>
                            <p className="timeline-text">
                                Learn essential data science techniques and SQL skills through CognitiveClass.ai's courses, powered by IBM Developer Skills Network. Gain hands-on experience with data analysis, visualization, and advanced querying methods.
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
        </Element>
    );
}

export default Resume;
