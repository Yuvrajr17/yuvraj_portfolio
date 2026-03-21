import React from 'react';

export default function Education({ education }) {
  return (
    <section id="education" style={{ position: 'relative', zIndex: 1 }}>
      <div className="section-wrapper">
        <div className="section-label">04 // education</div>
        <h2 className="section-title">Academic <span className="dim">Background</span></h2>
        <div className="divider" />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
          {education.map((edu, i) => (
            <div
              key={i}
              className="fade-up"
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderLeft: `3px solid ${edu.accentColor}`,
                borderRadius: '4px',
                padding: '1.2rem 1.5rem',
                transition: 'box-shadow 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = 'var(--glow)'}
              onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
            >
              <div style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: '14px', fontWeight: 700,
                color: 'var(--text)', marginBottom: '4px',
              }}>
                🏫 {edu.institution}
              </div>
              <div style={{ fontSize: '13px', color: edu.accentColor, marginBottom: '6px' }}>
                {edu.degree}
              </div>
              <div style={{
                display: 'flex', gap: '1.5rem', flexWrap: 'wrap',
                fontFamily: "'Space Mono', monospace",
                fontSize: '11px', color: 'var(--muted)',
              }}>
                <span>📍 {edu.location}</span>
                <span>📅 {edu.period}</span>
                <span style={{ color: 'var(--accent3)' }}>
                  ⭐ {edu.scoreLabel}: {edu.score}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
