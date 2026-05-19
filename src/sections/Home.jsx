import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaArrowDown } from 'react-icons/fa';
import BickyImg from '../assets/bicky-bg2.png';

const Home = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="home-section" data-aos="fade-up" aria-label="Hero">
      <div className="container">
        <div className="home-split">
          <div className="home-left">
            <div className="hero-badge" data-aos="fade-up" data-aos-delay="200">
              <span>🚀 Available for opportunities</span>
            </div>
            
            <span className="greeting" data-aos="fade-up" data-aos-delay="300">
              👋 Hello, I'm
            </span>
            
            <h1 data-aos="fade-up" data-aos-delay="400">
              <span className="highlight">Bicky Kumar</span>
            </h1>
            
            <h3 data-aos="fade-up" data-aos-delay="500">I'm a</h3>
            
            <TypeAnimation
              sequence={[
                'Full Stack Developer', 2000,
                'Java Developer', 2000,
                'Problem Solver', 2000,
                'Creative Coder', 2000,
              ]}
              wrapper="h2"
              speed={50}
              repeat={Infinity}
              className="typing-unique"
              data-aos="fade-up"
              data-aos-delay="600"
            />
            
            <p className="intro" data-aos="fade-up" data-aos-delay="700">
              Passionate Full Stack Developer with expertise in Java, React, and Node.js. 
              I build scalable, user-friendly web applications that solve real-world problems. 
              Currently pursuing B.Tech in Computer Science and always eager to learn new technologies.
            </p>
            
            <div className="cta-buttons" data-aos="fade-up" data-aos-delay="800">
              <a href="#contact" className="btn primary" aria-label="Contact Me">
                <FaEnvelope style={{ marginRight: '8px' }} />
                Contact Me
              </a>
              <button 
                className="btn secondary" 
                onClick={() => scrollToSection('projects')} 
                aria-label="View My Work"
              >
                <FaArrowDown style={{ marginRight: '8px' }} />
                View My Work
              </button>
              <a 
                href="/Bicky-Kumar-resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn secondary"
                aria-label="Download Resume"
              >
                <FaDownload style={{ marginRight: '8px' }} />
                Download Resume
              </a>
            </div>
            
            <nav className="social-icons" aria-label="Social Links" data-aos="fade-up" data-aos-delay="900">
              <a 
                href="https://github.com/Bicky-Kumar20" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="GitHub"
                className="social-link"
              >
                <FaGithub />
              </a>
              <a 
                href="https://www.linkedin.com/in/bicky-kumar11/" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="LinkedIn"
                className="social-link"
              >
                <FaLinkedin />
              </a>
              <a 
                href="mailto:bickykumar028@gmail.com" 
                aria-label="Email"
                className="social-link"
              >
                <FaEnvelope />
              </a>
            </nav>
          </div>
          
          <div className="home-right" data-aos="fade-left" data-aos-delay="400">
            <img src={BickyImg} alt="Bicky Kumar" className="profile-pic-large" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home; 