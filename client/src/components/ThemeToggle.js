import React, { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.style.setProperty('--bg', '#0a0c10');
      root.style.setProperty('--bg2', '#10141c');
      root.style.setProperty('--surface', '#1a2030');
      root.style.setProperty('--border', 'rgba(99,179,237,0.12)');
      root.style.setProperty('--border2', 'rgba(99,179,237,0.25)');
      root.style.setProperty('--text', '#e2e8f0');
      root.style.setProperty('--muted', '#718096');
    } else {
      root.style.setProperty('--bg', '#f0f4f8');
      root.style.setProperty('--bg2', '#e2e8f0');
      root.style.setProperty('--surface', '#ffffff');
      root.style.setProperty('--border', 'rgba(99,179,237,0.2)');
      root.style.setProperty('--border2', 'rgba(99,179,237,0.4)');
      root.style.setProperty('--text', '#1a202c');
      root.style.setProperty('--muted', '#4a5568');
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark(d => !d)}
      title={dark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      style={{
        position: 'fixed', bottom: '2rem', right: '2rem',
        width: '44px', height: '44px',
        borderRadius: '50%',
        background: 'var(--surface)',
        border: '1px solid var(--border2)',
        cursor: 'none',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: '20px', zIndex: 500,
        boxShadow: '0 0 20px rgba(99,179,237,0.15)',
        transition: 'all 0.3s ease',
      }}
      onMouseEnter={e => e.currentTarget.style.boxShadow = '0 0 30px rgba(99,179,237,0.4)'}
      onMouseLeave={e => e.currentTarget.style.boxShadow = '0 0 20px rgba(99,179,237,0.15)'}
    >
      {dark ? '☀️' : '🌙'}
    </button>
  );
}