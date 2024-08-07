import React, { useState } from 'react';
import { Element } from 'react-scroll';
import './ContactUs.css';
import '../Responsive/Responsive.css';

const ContactUs = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);

        const form = event.target;
        const formData = new FormData(form);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            });

            if (response.ok) {
                setIsLoading(false);
                setIsSuccess(true);
                form.reset();

                setTimeout(() => {
                    setIsSuccess(false);
                }, 3000);
            } else {
                setIsLoading(false);
                alert("There was an error submitting the form.");
            }
        } catch (error) {
            setIsLoading(false);
            alert("There was an error submitting the form.");
        }
    };

    return (
        <Element name="contact">
            <div className='contactus'>
                <div className="contact-top">
                    <div className="contact-text">
                        <h1>Contact <span>Me</span></h1>
                    </div>
                </div>
                <div className="form-container">
                    <form className='form' onSubmit={handleSubmit}>
                        <input type="hidden" name="access_key" value="6e5d98d5-9cdf-4b11-ae82-6a4615ffa589" />
                        <div className="form-group">
                            <label htmlFor="name">Full Name</label>
                            <input
                                required
                                name="Name"
                                id="name"
                                type="text"
                                placeholder="Enter your name"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                required
                                name="Email"
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
                                name="Message"
                                placeholder="Enter your message"
                                rows="10"
                                cols="50"
                            ></textarea>
                        </div>

                        <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

                        <div className="btn-loader">
                            <button type="submit" className="form-submit-btn" disabled={isLoading}>
                                {isLoading ? "Sending..." : "Submit"}
                            </button>
                            {isLoading && (
                                <div className="loading-wave">
                                    <div className="loading-bar"></div>
                                    <div className="loading-bar"></div>
                                    <div className="loading-bar"></div>
                                    <div className="loading-bar"></div>
                                </div>
                            )}
                            
                        </div>
                    </form>
                    {isSuccess && (
                                <div className="success-message">
                                    <p>Message sent successfully!</p>
                                </div>
                            )}
                </div>

            </div>
        </Element >
    );
};

export default ContactUs;
