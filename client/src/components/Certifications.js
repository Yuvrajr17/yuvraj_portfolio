import React from 'react';

export default function Certifications({ certifications }) {
  return (
    <section id="certifications" style={{ position: 'relative', zIndex: 1 }}>
      <div className="section-wrapper">
        <div className="section-label">05 // certifications</div>
        <h2 className="section-title">Certifications <span className="dim">& Courses</span></h2>
        <div className="divider" />

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '1rem',
        }}>
          {certifications.map((cert, i) => (
            <div
              key={i}
              className="card fade-up"
              style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}
            >
              <div style={{
                width: '36px', height: '36px',
                background: 'rgba(99,179,237,0.1)',
                border: '1px solid rgba(99,179,237,0.2)',
                borderRadius: '4px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '18px', flexShrink: 0,
              }}>
                {cert.icon}
              </div>
              <div>
                <div style={{ fontSize: '13px', fontWeight: 500, color: 'var(--text)', marginBottom: '3px' }}>
                  {cert.name}
                </div>
                <div style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: '11px', color: 'var(--accent)', marginBottom: '2px',
                }}>
                  {cert.issuer}
                </div>
                <div style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: '10px', color: 'var(--muted)',
                }}>
                  {cert.period}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
