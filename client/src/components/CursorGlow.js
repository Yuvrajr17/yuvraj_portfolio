import React, { useEffect, useRef } from 'react';

export default function CursorGlow() {
  const glowRef = useRef(null);

  useEffect(() => {
    const move = e => {
      if (glowRef.current) {
        glowRef.current.style.left = e.clientX + 'px';
        glowRef.current.style.top  = e.clientY + 'px';
      }
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <div ref={glowRef} style={{
      position: 'fixed',
      width: '300px', height: '300px',
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(99,179,237,0.06) 0%, transparent 70%)',
      pointerEvents: 'none',
      transform: 'translate(-50%, -50%)',
      zIndex: 0,
      transition: 'left 0.1s, top 0.1s',
    }} />
  );
}
