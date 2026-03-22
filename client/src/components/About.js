import React from 'react';
import photo from '../assets/yuvraj.jpg';

export default function About({ about, education }) {
  const univ = education?.[0];

  return (
    <section id="about" style={{ position: 'relative', zIndex: 1 }}>
      <div className="section-wrapper">
        <div className="section-label">01 // about</div>
        <h2 className="section-title">About <span className="dim">Me</span></h2>
        <div className="divider" />

        {/* Photo + Name card */}
        <div className="fade-up" style={{
          display: 'flex', alignItems: 'center', gap: '2rem',
          marginBottom: '2rem', flexWrap: 'wrap',
        }}>
          {/* Photo */}
          <div style={{ position: 'relative', flexShrink: 0 }}>
            <div style={{
              width: '160px', height: '160px',
              borderRadius: '50%',
              border: '3px solid var(--accent)',
              overflow: 'hidden',
              boxShadow: '0 0 40px rgba(99,179,237,0.25)',
            }}>
              <img
                src={photo}
                alt="Yuvraj Singh Sisodiya"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            {/* Online indicator */}
            <div style={{
              position: 'absolute', bottom: '8px', right: '8px',
              width: '16px', height: '16px',
              borderRadius: '50%', background: '#48bb78',
              border: '2px solid var(--bg)',
              boxShadow: '0 0 8px #48bb78',
              animation: 'onlinePulse 2s ease-in-out infinite',
            }} />
          </div>

          {/* Name + title */}
          <div>
            <h3 style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: '1.4rem', fontWeight: 700,
              color: 'var(--text)', marginBottom: '0.3rem',
            }}>
              Yuvraj Singh Sisodiya
            </h3>
            <div style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: '12px', color: 'var(--accent)',
              marginBottom: '0.5rem', letterSpacing: '0.06em',
            }}>
              Full-Stack Developer
            </div>
            <div style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: '11px', color: 'var(--muted)',
            }}>
              📍 Phagwara, Punjab &nbsp;·&nbsp; B.Tech CSE @ LPU
            </div>
            {/* Social links */}
            <div style={{ display: 'flex', gap: '8px', marginTop: '0.8rem' }}>
              <a href="https://github.com/Yuvrajr17" target="_blank" rel="noreferrer"
                style={socialBtn}>GitHub</a>
              <a href="https://www.linkedin.com/in/yuvraj-r17" target="_blank" rel="noreferrer"
                style={socialBtn}>LinkedIn</a>
            </div>
          </div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem',
        }}>

          {/* Personal Intro */}
          <div className="card fade-up">
            <div style={labelStyle}>■ Personal Intro</div>
            <p style={textStyle}>{about.intro}</p>
          </div>

          {/* Academic Background */}
          <div className="card fade-up">
            <div style={labelStyle}>■ Academic Background</div>
            {education?.map((edu, i) => (
              <div key={i} style={{ marginBottom: i < education.length - 1 ? '1rem' : 0 }}>
                <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--accent)', marginBottom: '2px' }}>
                  {edu.institution}
                </div>
                <div style={{ fontSize: '13px', color: 'var(--text)', marginBottom: '2px' }}>{edu.degree}</div>
                <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '11px', color: 'var(--muted)' }}>
                  {edu.period} &nbsp;|&nbsp; {edu.scoreLabel}: {edu.score}
                </div>
              </div>
            ))}
          </div>

          {/* Unique Qualities */}
          <div className="card fade-up" style={{ gridColumn: '1 / -1' }}>
            <div style={labelStyle}>■ Unique Qualities & Interests</div>
            <p style={{ ...textStyle, marginBottom: '1rem' }}>
              I'm a <strong style={{ color: 'var(--text)' }}>self-driven problem solver</strong> with strong leadership
              instincts and an adaptive mindset. I enjoy diving deep into how systems work — from DSA puzzles to
              full-stack architecture — and I bring consistency and structure to everything I build.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {about.qualities?.map((q, i) => (
                <span key={i} className="tag">{q}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const labelStyle = {
  fontFamily: "'Space Mono', monospace",
  fontSize: '11px', color: 'var(--accent)',
  letterSpacing: '0.1em', textTransform: 'uppercase',
  marginBottom: '0.8rem',
};
const textStyle = {
  fontSize: '14px', color: 'var(--muted)', lineHeight: 1.85,
};
const socialBtn = {
  fontFamily: "'Space Mono', monospace",
  fontSize: '11px', padding: '4px 12px',
  border: '1px solid rgba(99,179,237,0.25)',
  borderRadius: '2px', color: 'var(--accent)',
  textDecoration: 'none', letterSpacing: '0.04em',
  transition: 'all 0.2s',
};