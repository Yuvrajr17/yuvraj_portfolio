import React from 'react';

export default function ResumeSection({ hero }) {
  return (
    <section id="resume" style={{ position: 'relative', zIndex: 1 }}>
      <div className="section-wrapper" style={{ textAlign: 'center' }}>
        <div className="section-label" style={{ textAlign: 'center' }}>08 // resume</div>
        <h2 className="section-title" style={{ textAlign: 'center' }}>
          Download <span className="dim">Resume</span>
        </h2>
        <div className="divider" style={{ margin: '0 auto 2.5rem' }} />

        <div
          className="fade-up"
          style={{
            background: 'var(--surface)',
            border: '1px solid var(--border)',
            borderRadius: '8px',
            padding: '3rem 2rem',
            maxWidth: '500px',
            margin: '0 auto',
            transition: 'all 0.2s',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = 'var(--border2)';
            e.currentTarget.style.boxShadow = 'var(--glow)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = 'var(--border)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          <div style={{ fontSize: '52px', marginBottom: '1rem' }}>📄</div>

          <div style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: '16px', fontWeight: 700,
            color: 'var(--text)', marginBottom: '0.5rem',
          }}>
            {hero.name}
          </div>

          <p style={{
            fontSize: '13px', color: 'var(--muted)', marginBottom: '1.5rem',
          }}>
            MERN Stack Developer &nbsp;·&nbsp; B.Tech CSE, LPU &nbsp;·&nbsp; 2023–Present
          </p>

          <a
            href="http://localhost:5000/resume/Yuvraj_Singh_Sisodiya_Resume_10.pdf"
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
            style={{ margin: '0 auto', display: 'inline-flex' }}
          >
            ↓ &nbsp;Download PDF Resume
          </a>

          <p style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: '11px', color: 'var(--muted)',
            marginTop: '1rem',
          }}>
            Last updated · 2025
          </p>
        </div>
      </div>
    </section>
  );
}
