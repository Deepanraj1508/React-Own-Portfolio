import React from 'react';
import { Element } from 'react-scroll';
import './ContactUs.css';
import '../Responsive/Responsive.css';

const ContactUs = () => {
    return (
        <Element name="contact">
            <div className='contactus'>
                <div className="contact-top">
                    <div className="contact-text">
                        <h1>Have an Awesome Project</h1>
                        <h1>Idea? <span>Let’s Discuss</span></h1>
                    </div>
                </div>
                <div className="form-container">
                    <form className='form' action="https://api.web3forms.com/submit" method="POST">
                        <input type="hidden" name="access_key" value="6e5d98d5-9cdf-4b11-ae82-6a4615ffa589" />
                        <div className="form-group">
                            <label htmlFor="name">Full Name</label>
                            <input
                                required
                                name="name"
                                id="name"
                                type="text"
                                placeholder="Enter your Name"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                required
                                name="email"
                                id="email"
                                type="email"
                                placeholder="Enter your email"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="textarea">Message</label>
                            <textarea
                                required
                                id="textarea"
                                name="textarea"
                                placeholder="Message"
                                rows="10"
                                cols="50"
                            ></textarea>
                        </div>

                        <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />
                        <button type="submit" className="form-submit-btn">Submit</button>
                    </form>
                </div>
            </div>
        </Element>
    );
};

export default ContactUs;
