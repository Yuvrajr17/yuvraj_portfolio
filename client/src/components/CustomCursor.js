import React, { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const cursorRef  = useRef(null);
  const trailerRef = useRef(null);
  const [clicked, setClicked]   = useState(false);
  const [hovering, setHovering] = useState(false);
  const pos = useRef({ x: 0, y: 0 });
  const trail = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const move = e => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + 'px';
        cursorRef.current.style.top  = e.clientY + 'px';
      }
    };

    // Smooth trailer
    let animId;
    const animate = () => {
      trail.current.x += (pos.current.x - trail.current.x) * 0.12;
      trail.current.y += (pos.current.y - trail.current.y) * 0.12;
      if (trailerRef.current) {
        trailerRef.current.style.left = trail.current.x + 'px';
        trailerRef.current.style.top  = trail.current.y + 'px';
      }
      animId = requestAnimationFrame(animate);
    };
    animate();

    const down  = () => setClicked(true);
    const up    = () => setClicked(false);

    // Hover on interactive elements
    const addHover = () => {
      document.querySelectorAll('a, button, .btn, .card, .project-card')
        .forEach(el => {
          el.addEventListener('mouseenter', () => setHovering(true));
          el.addEventListener('mouseleave', () => setHovering(false));
        });
    };
    addHover();

    window.addEventListener('mousemove', move);
    window.addEventListener('mousedown', down);
    window.addEventListener('mouseup', up);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mousedown', down);
      window.removeEventListener('mouseup', up);
    };
  }, []);

  return (
    <>
      {/* Main cursor dot */}
      <div ref={cursorRef} style={{
        position: 'fixed',
        width: clicked ? '8px' : '10px',
        height: clicked ? '8px' : '10px',
        background: '#63b3ed',
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: 99999,
        transform: 'translate(-50%, -50%)',
        transition: 'width 0.1s, height 0.1s, background 0.2s',
        mixBlendMode: 'difference',
      }} />

      {/* Trailing ring */}
      <div ref={trailerRef} style={{
        position: 'fixed',
        width: hovering ? '48px' : '32px',
        height: hovering ? '48px' : '32px',
        border: `1.5px solid ${hovering ? '#4fd1c5' : '#63b3ed'}`,
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: 99998,
        transform: 'translate(-50%, -50%)',
        transition: 'width 0.3s ease, height 0.3s ease, border-color 0.3s ease',
        opacity: hovering ? 0.8 : 0.4,
      }} />

      {/* Hide default cursor */}
      <style>{`* { cursor: none !important; }`}</style>
    </>
  );
}