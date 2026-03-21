import React, { useEffect, useState } from 'react';

const TYPED_TEXT = "const dev = { name: \"Yuvraj\", stack: [\"MongoDB\",\"Express\",\"React\",\"Node\"], status: \"building...\" }";

export default function Hero({ hero }) {
  const [typed, setTyped] = useState('');

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTyped(TYPED_TEXT.slice(0, i + 1));
      i++;
      if (i >= TYPED_TEXT.length) clearInterval(interval);
    }, 28);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center',
      paddingTop: '60px', position: 'relative', zIndex: 1,
    }}>
      <div style={{ maxWidth: '1000px', width: '100%', margin: '0 auto', padding: '0 2rem' }}>

        {/* Badge */}
        <div style={{
          display: 'inline-block',
          fontFamily: "'Space Mono', monospace",
          fontSize: '12px', color: 'var(--accent2)',
          border: '1px solid rgba(79,209,197,0.3)',
          padding: '4px 12px', borderRadius: '2px',
          marginBottom: '1.5rem', letterSpacing: '0.08em',
        }}>
          ▶ {hero.tagline}
        </div>

        {/* Name */}
        <h1 style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: 'clamp(2.5rem, 7vw, 5rem)',
          fontWeight: 700, lineHeight: 1.05,
          marginBottom: '0.8rem',
        }}>
          Yuvraj<br />
          <span style={{ color: 'var(--accent)' }}>Singh Sisodiya</span>
        </h1>

        {/* Role */}
        <p style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: 'clamp(1rem, 2.5vw, 1.3rem)',
          color: 'var(--muted)', marginBottom: '1.5rem',
        }}>
          MERN Stack Developer <span style={{ color: 'var(--accent3)' }}>&</span> CS Engineer
        </p>

        {/* Bio */}
        <p style={{
          fontSize: '15px', color: 'var(--muted)',
          maxWidth: '560px', marginBottom: '2.5rem', lineHeight: 1.85,
        }}>
          {hero.bio}
        </p>

        {/* CTA Links */}
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <a href="#projects" className="btn btn-primary">→ View Projects</a>
          <a href={hero.github} target="_blank" rel="noreferrer" className="btn btn-outline">⌥ GitHub</a>
          <a href={hero.linkedin} target="_blank" rel="noreferrer" className="btn btn-outline">in LinkedIn</a>
          <a href="#resume" className="btn btn-outline">↓ Resume</a>
        </div>

        {/* Terminal typing */}
        <div style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: '13px', color: 'var(--accent2)',
          marginTop: '2.5rem', opacity: 0.6,
        }}>
          <span style={{ color: 'var(--accent3)' }}>$ </span>
          {typed}
          <span style={{
            display: 'inline-block', width: '2px', height: '14px',
            background: 'var(--accent)', marginLeft: '2px',
            verticalAlign: 'middle',
            animation: 'blink 1s step-end infinite',
          }} />
        </div>

        <style>{`@keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }`}</style>
      </div>
    </section>
  );
}
