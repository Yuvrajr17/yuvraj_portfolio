import React, { useEffect, useRef } from 'react';
import { usePortfolio } from './PortfolioContext';
import Navbar      from '../components/Navbar';
import Hero        from '../components/Hero';
import About       from '../components/About';
import Skills      from '../components/Skills';
import Projects    from '../components/Projects';
import Education   from '../components/Education';
import Certifications from '../components/Certifications';
import Achievements from '../components/Achievements';
import Extracurricular from '../components/Extracurricular';
import ResumeSection from '../components/ResumeSection';
import Contact     from '../components/Contact';
import Footer      from '../components/Footer';
import CursorGlow  from '../components/CursorGlow';

export default function Portfolio() {
  const { data, loading } = usePortfolio();

  // Intersection observer for fade-up animations
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible');
      }),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.fade-up').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, [data]);

  if (loading) return (
    <div style={{
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      height: '100vh', width: '100vw',
      background: '#0a0c10',
      position: 'fixed', inset: 0, zIndex: 9999,
    }}>

      {/* Outer rotating ring */}
      <div style={{
        position: 'relative',
        width: '120px', height: '120px',
      }}>

        {/* Ring 1 — slow */}
        <div style={{
          position: 'absolute', inset: 0,
          borderRadius: '50%',
          border: '2px solid transparent',
          borderTopColor: '#63b3ed',
          borderRightColor: '#63b3ed',
          animation: 'spin1 1.5s linear infinite',
        }} />

        {/* Ring 2 — medium reverse */}
        <div style={{
          position: 'absolute', inset: '12px',
          borderRadius: '50%',
          border: '2px solid transparent',
          borderTopColor: '#4fd1c5',
          borderLeftColor: '#4fd1c5',
          animation: 'spin2 1s linear infinite reverse',
        }} />

        {/* Ring 3 — fast */}
        <div style={{
          position: 'absolute', inset: '24px',
          borderRadius: '50%',
          border: '2px solid transparent',
          borderTopColor: '#f6ad55',
          animation: 'spin1 0.6s linear infinite',
        }} />

        {/* Center dot */}
        <div style={{
          position: 'absolute', inset: '44px',
          borderRadius: '50%',
          background: '#63b3ed',
          animation: 'pulse 1.5s ease-in-out infinite',
        }} />

      </div>

      {/* Name text */}
      <div style={{
        marginTop: '2rem',
        fontFamily: "'Space Mono', monospace",
        fontSize: '18px', fontWeight: 700,
        color: '#63b3ed',
        letterSpacing: '0.1em',
        animation: 'fadeInOut 1.5s ease-in-out infinite',
      }}>
        YUVRAJ
      </div>

      {/* Subtitle */}
      <div style={{
        marginTop: '0.5rem',
        fontFamily: "'Space Mono', monospace",
        fontSize: '11px',
        color: '#718096',
        letterSpacing: '0.2em',
        textTransform: 'uppercase',
      }}>
        Loading Portfolio...
      </div>

      {/* Glowing dots */}
      <div style={{
        display: 'flex', gap: '8px', marginTop: '1.5rem',
      }}>
        {[0, 1, 2, 3, 4].map(i => (
          <div key={i} style={{
            width: '6px', height: '6px',
            borderRadius: '50%',
            background: '#63b3ed',
            animation: `dotPulse 1.2s ease-in-out infinite`,
            animationDelay: `${i * 0.15}s`,
          }} />
        ))}
      </div>

      {/* Grid background effect */}
      <div style={{
        position: 'fixed', inset: 0, zIndex: -1,
        backgroundImage: `
          linear-gradient(rgba(99,179,237,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(99,179,237,0.03) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px',
      }} />

      {/* Corner decorations */}
      <div style={{
        position: 'fixed', top: '2rem', left: '2rem',
        fontFamily: "'Space Mono', monospace",
        fontSize: '12px', color: 'rgba(99,179,237,0.3)',
        letterSpacing: '0.1em',
      }}>// yuvraj.dev</div>

      <div style={{
        position: 'fixed', bottom: '2rem', right: '2rem',
        fontFamily: "'Space Mono', monospace",
        fontSize: '11px', color: 'rgba(99,179,237,0.2)',
        letterSpacing: '0.1em',
      }}>MERN Stack Developer</div>

      <style>{`
        @keyframes spin1 {
          to { transform: rotate(360deg); }
        }
        @keyframes spin2 {
          to { transform: rotate(360deg); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.8); }
        }
        @keyframes fadeInOut {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        @keyframes dotPulse {
          0%, 100% { opacity: 0.2; transform: translateY(0); }
          50% { opacity: 1; transform: translateY(-6px); }
        }
      `}</style>
    </div>
  );

  if (!data) return null;

  return (
    <>
      <CursorGlow />
      <Navbar hero={data.hero} />
      <main>
        <Hero        hero={data.hero} />
        <About       about={data.about} education={data.education} />
        <Skills      skills={data.skills} />
        <Projects    projects={data.projects} />
        <Education   education={data.education} />
        <Certifications certifications={data.certifications} />
        <Achievements   achievements={data.achievements} />
        <Extracurricular extracurricular={data.extracurricular} />
        <ResumeSection  hero={data.hero} />
        <Contact />
      </main>
      <Footer hero={data.hero} />
    </>
  );
}
