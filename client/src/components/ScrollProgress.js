import React, { useEffect, useState } from 'react';

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const scrolled = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress((scrolled / total) * 100);
    };
    window.addEventListener('scroll', update);
    return () => window.removeEventListener('scroll', update);
  }, []);

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, right: 0,
      height: '3px', zIndex: 9999,
      background: 'rgba(99,179,237,0.1)',
    }}>
      <div style={{
        height: '100%',
        width: `${progress}%`,
        background: 'linear-gradient(90deg, #63b3ed, #4fd1c5, #f6ad55)',
        transition: 'width 0.1s ease',
        boxShadow: '0 0 10px rgba(99,179,237,0.8)',
      }} />
    </div>
  );
}