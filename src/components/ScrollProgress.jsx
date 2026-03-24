import React, { useEffect, useState } from 'react';

const ScrollProgress = () => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScroll(scrolled);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '5px',
      zIndex: 2000,
      background: 'rgba(0,0,0,0.04)'
    }}>
      <div style={{
        height: '100%',
        width: `${scroll}%`,
        background: 'var(--primary)',
        transition: 'width 0.2s',
        borderRadius: '0 4px 4px 0'
      }} />
    </div>
  );
};

export default ScrollProgress; 