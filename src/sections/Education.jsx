import React from 'react';
import { FaGraduationCap, FaSchool } from 'react-icons/fa';

const educationData = [
  {
    icon: <FaGraduationCap />,
    degree: 'B.Tech in Computer Science and Engineering',
    institution: 'Siddharth Institute of Engineering and Technology , AP',
    period: '2022 – 2026',
    description: 'Currently in final year. Gained strong foundation in Java, DSA, SQL, and full-stack web development using React, Node.js, and MongoDB.'
  },
  {
    icon: <FaSchool />,
    degree: 'Senior Secondary (Class 12th)',
    institution: 'K.S College Ara, Bhojpur  (BSEB)',
    period: '2020 – 2022',
    description: 'Completed with Science stream, including Mathematics, Physics and Chemistry'
  },
  {
    icon: <FaSchool />,
    degree: 'Secondary School (Class 10th)',
    institution: 'R D M high School Garhani, Bhojpur (BSEB)',
    period: '2018 – 2019',
    description: 'Completed foundational education with a focus on Mathematics and Science under the BSEB board.'
  }
];

const Education = () => (
  <section id="education" className="education-section" data-aos="fade-up">
    <div className="container">
      <h2>Education</h2>
      <div className="timeline">
        {educationData.map((edu, idx) => (
          <div className="timeline-item" key={idx} data-aos="fade-up">
            <div className="timeline-icon">{edu.icon}</div>
            <div className="timeline-content">
              <h3>{edu.degree}</h3>
              <span className="timeline-company">{edu.institution}</span>
              <span className="timeline-period">{edu.period}</span>
              <p>{edu.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Education; 