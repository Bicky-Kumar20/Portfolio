import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import BackToTop from "./components/BackToTop";
import Home from "./sections/Home";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Testimonials from "./sections/Testimonials";
import Experience from "./sections/Experience";
import Education from "./sections/Education";
import Contact from "./sections/Contact";
import "./App.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check for saved dark mode preference
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode !== null) {
      setDarkMode(JSON.parse(savedDarkMode));
    }
  }, []);

  useEffect(() => {
    document.body.classList.toggle('dark', darkMode);
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  useEffect(() => {
    AOS.init({ 
      once: true, 
      duration: 800,
      offset: 100,
      easing: 'ease-in-out'
    });
  }, []);

  const handleToggleDark = () => setDarkMode((d) => !d);

  return (
    <>
      <Navbar onToggleDark={handleToggleDark} darkMode={darkMode} />
      <main>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Testimonials />
        <Experience />
        <Education />
        <Contact />
      </main>
      <BackToTop />
    </>
  );
}

export default App;
