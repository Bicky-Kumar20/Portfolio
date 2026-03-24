import React, { useState } from 'react';

const Navbar = ({ onToggleDark, darkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [spin, setSpin] = useState(false);

  const handleMenuToggle = () => setMenuOpen((open) => !open);
  const handleLinkClick = () => setMenuOpen(false);
  const handleToggleDark = () => {
    setSpin(true);
    onToggleDark();
    setTimeout(() => setSpin(false), 500);
  };

  return (
    <nav className="navbar">
      <button className="hamburger" onClick={handleMenuToggle} aria-label="Toggle menu">
        {menuOpen ? '✖' : '☰'}
      </button>
      <ul className={menuOpen ? 'open' : ''}>
        <li><a href="#home" onClick={handleLinkClick}>Home</a></li>
        <li><a href="#about" onClick={handleLinkClick}>About</a></li>
        <li><a href="#skills" onClick={handleLinkClick}>Skills</a></li>
        <li><a href="#projects" onClick={handleLinkClick}>Projects</a></li>
        <li><a href="#experience" onClick={handleLinkClick}>Experience</a></li>
        <li><a href="#education" onClick={handleLinkClick}>Education</a></li>
        <li><a href="#contact" onClick={handleLinkClick}>Contact</a></li>
        <li><a href="../public/BickyResume.pdf" target="_blank" rel="noopener noreferrer" className="btn navbar-resume">Download Resume</a></li>
      </ul>
      <button className="dark-toggle" onClick={handleToggleDark} title="Toggle dark mode">
        <span className={spin ? 'toggle-spin' : ''}>{darkMode ? '🌙' : '☀️'}</span>
      </button>
    </nav>
  );
};

export default Navbar; 