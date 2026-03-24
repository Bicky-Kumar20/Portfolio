import React, { useRef } from 'react';
import { FaExternalLinkAlt, FaGithub, FaStar } from 'react-icons/fa';
import projects from '../data/projects';

const Projects = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.7;
      scrollRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="projects" className="projects-section" data-aos="fade-up">
      <div className="container">
        <h2>Featured Projects</h2>
        <p className="section-subtitle">Showcasing my best work and technical expertise</p>
        
        <div className="projects-scroll-wrapper">
          <button className="scroll-btn left" aria-label="Scroll left" onClick={() => scroll('left')}>
            &#8592;
          </button>
          
          <div className="projects-row" ref={scrollRef} tabIndex={0} aria-label="Project list">
            {projects.map((project, idx) => (
              <div className="project-card" key={idx} data-aos="fade-up" data-aos-delay={idx * 100}>
                <div className="project-image-container">
                  <img src={project.image} alt={project.title} className="project-image" />
                  {project.featured && (
                    <div className="featured-badge">
                      <FaStar />
                      <span>Featured</span>
                    </div>
                  )}
                  <div className="project-overlay">
                    <div className="project-overlay-content">
                      <a 
                        href={project.live} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="overlay-btn"
                        aria-label={`View ${project.title} live`}
                      >
                        <FaExternalLinkAlt />
                        Live Demo
                      </a>
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="overlay-btn"
                        aria-label={`View ${project.title} source code`}
                      >
                        <FaGithub />
                        Source Code
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-tech">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="tech-badge">{tech}</span>
                    ))}
                  </div>
                  
                  <div className="project-links">
                    <a 
                      href={project.live} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link"
                      aria-label={`Visit ${project.title} live site`}
                    >
                      <FaExternalLinkAlt />
                      Live Demo
                    </a>
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link"
                      aria-label={`View ${project.title} source code`}
                    >
                      <FaGithub />
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <button className="scroll-btn right" aria-label="Scroll right" onClick={() => scroll('right')}>
            &#8594;
          </button>
        </div>
        
        <div className="projects-cta" data-aos="fade-up">
          <p>Interested in working together?</p>
          <a href="#contact" className="btn primary">Let's Connect</a>
        </div>
      </div>
    </section>
  );
};

export default Projects; 