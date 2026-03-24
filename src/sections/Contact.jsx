import React, { useRef, useState, useEffect } from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const SERVICE_ID = 'service_jflb6jn';
const TEMPLATE_ID = 'template_ngpdren';
const USER_ID = 'sRioaRw1HMHWQjO2C';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    emailjs.init(USER_ID);
  }, []);

  // Auto-dismiss status after 3 seconds
  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => {
        setStatus('');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current)
      .then((result) => {
        setStatus('Message sent successfully!');
        setLoading(false);
        form.current.reset();
        console.log('EmailJS success:', result.text);
      }, (err) => {
        setStatus('Failed to send message. Please try again or contact me directly.');
        setLoading(false);
        console.error('EmailJS error:', err);
      });
  };

  return (
    <>
      {status && (
        <div className={`contact-status-global ${status.includes('success') ? 'success' : 'error'}`} role="alert" aria-live="assertive">
          {status}
        </div>
      )}
      
      <section id="contact" className="contact-section" data-aos="fade-up">
        <div className="container">
          <h2>Get In Touch</h2>
          <p className="section-subtitle">Let's work together on your next project</p>
          
          <div className="contact-content">
            <div className="contact-info" data-aos="fade-right" data-aos-delay="200">
              <h3>Let's Connect</h3>
              <p>I'm always interested in new opportunities and exciting projects. Whether you have a question or just say hi, feel free to reach out!</p>
              
              <div className="contact-details">
                <div className="contact-item">
                  <FaEnvelope className="contact-icon" />
                  <div className="contact-text">
                    <h4>Email</h4>
                    <a href="mailto:bickykumar028@gmail.com">bickykumar028@gmail.com</a>
                  </div>
                </div>
                
                <div className="contact-item">
                  <FaLinkedin className="contact-icon" />
                  <div className="contact-text">
                    <h4>LinkedIn</h4>
                    <a href="https://www.linkedin.com/in/bicky-kumar11/" target="_blank" rel="noopener noreferrer">
                      linkedin.com/in/bicky-kumar11
                    </a>
                  </div>
                </div>
                
                <div className="contact-item">
                  <FaGithub className="contact-icon" />
                  <div className="contact-text">
                    <h4>GitHub</h4>
                    <a href="https://github.com/Bicky-Kumar20" target="_blank" rel="noopener noreferrer">
                      github.com/Bicky-Kumar20
                    </a>
                  </div>
                </div>
                
                <div className="contact-item">
                  <FaMapMarkerAlt className="contact-icon" />
                  <div className="contact-text">
                    <h4>Location</h4>
                    <p>Andhra Pradesh, India</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="contact-form-container" data-aos="fade-left" data-aos-delay="400">
              <form ref={form} onSubmit={sendEmail} className="contact-form">
                <div className="form-group">
                  <label htmlFor="user_name">Name</label>
                  <input 
                    id="user_name"
                    name="from_name" 
                    type="text" 
                    placeholder="Your Name" 
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="user_email">Email</label>
                  <input 
                    id="user_email"
                    name="from_email" 
                    type="email" 
                    placeholder="your.email@example.com" 
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea 
                    id="message"
                    name="message" 
                    placeholder="Tell me about your project or just say hello!" 
                    required 
                    rows={5}
                  />
                </div>
                
                <button
                  type="submit"
                  className="btn primary contact-submit"
                  disabled={loading}
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;

