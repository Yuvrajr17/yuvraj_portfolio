import React from 'react';

export default function Achievements({ achievements }) {
  return (
    <section id="achievements" style={{ position: 'relative', zIndex: 1 }}>
      <div className="section-wrapper">
        <div className="section-label">06 // achievements</div>
        <h2 className="section-title">Achievements <span className="dim">& Training</span></h2>
        <div className="divider" />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {achievements.map((ach, i) => (
            <div
              key={i}
              className="fade-up"
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: '6px',
                padding: '1.25rem 1.5rem',
                display: 'flex', gap: '1rem', alignItems: 'flex-start',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(246,173,85,0.3)';
                e.currentTarget.style.boxShadow = '0 0 24px rgba(246,173,85,0.08)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--border)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{ fontSize: '22px', flexShrink: 0, marginTop: '2px' }}>{ach.badge}</div>
              <div>
                <div style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: '14px', fontWeight: 700,
                  color: 'var(--text)', marginBottom: '6px',
                }}>
                  {ach.title}
                </div>
                <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.75 }}>
                  {ach.description.replace('150+', '')}
                  {ach.description.includes('150+') && (
                    <>
                      Solved <strong style={{ color: 'var(--accent)' }}>150+ algorithmic problems</strong>
                      {ach.description.split('150+')[1]}
                    </>
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
