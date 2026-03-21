import React from 'react';

export default function Footer({ hero }) {
  return (
    <footer style={{
      textAlign: 'center',
      padding: '2rem',
      fontFamily: "'Space Mono', monospace",
      fontSize: '11px',
      color: 'var(--muted)',
      borderTop: '1px solid var(--border)',
      position: 'relative', zIndex: 1,
    }}>
      <span style={{ color: 'var(--accent)' }}>■</span>
      {' '}Designed & built by{' '}
      <span style={{ color: 'var(--accent2)' }}>{hero.name}</span>
      {' '}·{' '}2025{' '}·{' '}MERN Stack Developer
      <div style={{ marginTop: '0.5rem', opacity: 0.5 }}>
        React · Node.js · Express · MongoDB
      </div>
    </footer>
  );
}
