import React from 'react';
import './ContactUs.css'
import '../Responsive/Responsive.css'
import email_icon from '../Assets/sms.png'

const ContactUs = () => {
    return (
        <div className='contactus'>
            <div className="contact-top">
                <div className="contect-text">
                    <h1>Have an Awesome Project</h1>
                    <h1>Idea? <span>Let’s Discuss</span></h1>
                </div>
            </div>
            <div className="contact-bottom">
                <img src={email_icon} alt="icon" />
                <input type="text" placeholder="Your message..." />
                <button>Send</button>

            </div>
        </div>
    );
};

export default ContactUs;
