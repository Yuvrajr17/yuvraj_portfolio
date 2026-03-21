import React from 'react';

export default function Extracurricular({ extracurricular }) {
  return (
    <section id="extracurricular" style={{ position: 'relative', zIndex: 1 }}>
      <div className="section-wrapper">
        <div className="section-label">07 // extracurricular</div>
        <h2 className="section-title">Beyond <span className="dim">the Code</span></h2>
        <div className="divider" />

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1rem',
        }}>
          {extracurricular.map((item, i) => (
            <div
              key={i}
              className="card fade-up"
              style={{ textAlign: 'center', cursor: 'default' }}
              onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-4px)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'none'}
            >
              <div style={{ fontSize: '30px', marginBottom: '0.6rem' }}>{item.icon}</div>
              <div style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: '12px', color: 'var(--accent2)',
                fontWeight: 700, marginBottom: '0.4rem',
                letterSpacing: '0.04em',
              }}>
                {item.title}
              </div>
              <p style={{ fontSize: '12px', color: 'var(--muted)', lineHeight: 1.6 }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
