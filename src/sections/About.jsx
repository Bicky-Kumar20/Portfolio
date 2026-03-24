import React from 'react';
import DevAvatar from '../assets/avatar.png';

const About = () => (
  <section id="about" className="about-section" data-aos="fade-up">
    <div className="container">
      <h2>About Me</h2>
      <p className="section-subtitle">Passionate developer crafting digital experiences</p>
      
      <div className="about-split">
        <div className="about-left" data-aos="fade-right" data-aos-delay="200">
          <img src={DevAvatar} alt="Developer Avatar" className="about-avatar" />
        </div>
        
        <div className="about-right" data-aos="fade-left" data-aos-delay="400">
          <div className="about-content">
            <p className="about-intro">
              I'm Bicky, a final-year B.Tech student and passionate Full Stack Developer with expertise in Java, React, and Node.js. 
              I love turning complex problems into simple, beautiful, and intuitive solutions.
            </p>
            
            <div className="about-quote" data-aos="fade-up" data-aos-delay="600">
              <blockquote>
                "Consistency, code quality, and curiosity fuel my journey in software development."
              </blockquote>
            </div>
            
            <div className="education-box" data-aos="fade-up" data-aos-delay="700">
              <h3>🎓 B.Tech in Computer Science</h3>
              <p><strong>Siddharth Institute of Engineering and Technology</strong></p>
              <p>2022 – 2026 | Andhra Pradesh, India</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About; 