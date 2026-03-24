import React from 'react';
import { FaBriefcase, FaCertificate, FaLaptopCode } from 'react-icons/fa';

const experiences = [
  {
    icon: <FaBriefcase />,
    title: 'Frontend Developer',
    company: 'Tech Solutions',
    period: '2022 - Present',
    description: 'Developed and maintained web applications using React and modern JavaScript.'
  },
  {
    icon: <FaLaptopCode />,
    title: 'Intern - Web Development',
    company: 'Elite Tech.',
    period: '2025 - Jan to June',
    description: 'Worked on responsive UI and collaborated with backend teams.'
  },
  {
    icon: <FaCertificate />,
    title: 'Solutions Architecture Job Simulation',
    company: 'AWS',
    period: '2024',
    description: 'Completed a professional AWS Solutions Architecture Job Simulation.'
  },
  {
    icon: <FaCertificate />,
    title: 'Hackathon',
    company: 'GeeksforGeeks',
    period: '2025',
    description: "Developed 'AgriMarket' during a GeeksforGeeks Hackathon using React and Node.js. Ranked in the top 10 for innovation among 250+ teams."

  },
  {
    icon: <FaCertificate />,
    title: 'NPTEL',
    company: 'NPTEL',
    period: '2024',
    description: "Completed 'Programming in Java' course on NPTEL."

  }
];

const Experience = () => (
  <section id="experience" className="experience-section" data-aos="fade-up">
    <div className="container">
      <h2>Experience</h2>
      <div className="timeline">
        {experiences.map((exp, idx) => (
          <div className="timeline-item" key={idx} data-aos="fade-up">
            <div className="timeline-icon">{exp.icon}</div>
            <div className="timeline-content">
              <h3>{exp.title}</h3>
              <span className="timeline-company">{exp.company}</span>
              <span className="timeline-period">{exp.period}</span>
              <p>{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience; 