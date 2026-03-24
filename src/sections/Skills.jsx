import React, { useEffect, useState } from 'react';
import { FaJava, FaJs, FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt, FaDatabase } from 'react-icons/fa';
import { SiExpress, SiMongodb, SiMysql, SiTailwindcss, SiGithub } from 'react-icons/si';

const skills = [
  { name: 'HTML5', level: 95, icon: <FaHtml5 color="#e34c26" /> },
  { name: 'CSS3 / Tailwind CSS', level: 85, icon: <FaCss3Alt color="#1572b6" /> },
  { name: 'JavaScript', level: 80, icon: <FaJs color="#f7df1e" /> },
  { name: 'React.js', level: 80, icon: <FaReact color="#61dafb" /> },
  { name: 'Node.js', level: 75, icon: <FaNodeJs color="#3c873a" /> },
  { name: 'Express.js', level: 70, icon: <SiExpress color="#444" /> },
  { name: 'MongoDB', level: 75, icon: <SiMongodb color="#47a248" /> },
  { name: 'MySQL', level: 80, icon: <SiMysql color="#00758f" /> },
  { name: 'Git & GitHub', level: 80, icon: <FaGitAlt color="#f34f29" /> },
  { name: 'Java', level: 65, icon: <FaJava color="#e76f00" /> },
];

const Skills = () => {
  const [barWidths, setBarWidths] = useState(Array(skills.length).fill(0));

  useEffect(() => {
    // Animate each bar with a slight delay
    skills.forEach((skill, i) => {
      setTimeout(() => {
        setBarWidths(prev => {
          const updated = [...prev];
          updated[i] = skill.level;
          return updated;
        });
      }, 250 + i * 180);
    });
  }, []);

  return (
    <section id="skills" className="skills-section" data-aos="fade-up">
      <div className="container">
        <h2 className="skills-title">Skills</h2>
        <div className="skills-list">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item" style={{ animationDelay: `${index * 0.08 + 0.1}s` }}>
              <div className="skill-label-row">
                <span className="skill-icon">{skill.icon}</span>
                <span className="skill-name">{skill.name}</span>
                <span className="skill-level">{skill.level}%</span>
              </div>
              <div className="skill-bar-bg">
                <div
                  className="skill-bar-fill"
                  style={{ width: `${barWidths[index]}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 