import React from 'react';

export default function About({ about, education }) {
  const univ = education?.[0];

  return (
    <section id="about" style={{ position: 'relative', zIndex: 1 }}>
      <div className="section-wrapper">
        <div className="section-label">01 // about</div>
        <h2 className="section-title">About <span className="dim">Me</span></h2>
        <div className="divider" />

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
