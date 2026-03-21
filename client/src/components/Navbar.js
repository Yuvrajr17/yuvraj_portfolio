import React, { useEffect, useState, useRef } from 'react';

const NAV_LINKS = [
  { href: '#about',          label: 'About Me',        num: '01', icon: '◈' },
  { href: '#skills',         label: 'Technical Skills', num: '02', icon: '◈' },
  { href: '#projects',       label: 'Projects',         num: '03', icon: '◈' },
  { href: '#education',      label: 'Education',        num: '04', icon: '◈' },
  { href: '#certifications', label: 'Certifications',   num: '05', icon: '◈' },
  { href: '#achievements',   label: 'Achievements',     num: '06', icon: '◈' },
  { href: '#extracurricular',label: 'Extracurricular',  num: '07', icon: '◈' },
  { href: '#resume',         label: 'Resume',           num: '08', icon: '◈' },
  { href: '#contact',        label: 'Contact',          num: '09', icon: '◈' },
];

export default function Navbar({ hero }) {
  const [active, setActive]   = useState('');
  const [menuOpen, setMenu]   = useState(false);
  const drawerRef             = useRef(null);

  // Track active section on scroll
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const handler = () => {
      let cur = '';
      sections.forEach(s => {
        if (window.scrollY >= s.offsetTop - 100) cur = s.id;
      });
      setActive(cur);
    };
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  // Close drawer on outside click
  useEffect(() => {
    const handler = e => {
      if (menuOpen && drawerRef.current && !drawerRef.current.contains(e.target)) {
        setMenu(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [menuOpen]);

  // Lock body scroll when drawer open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const scrollToTop = e => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = href => {
    setMenu(false);
    setTimeout(() => {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 300);
  };

  return (
    <>
      {/* ── NAVBAR ── */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0,
        background: 'rgba(10,12,16,0.92)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(99,179,237,0.12)',
        zIndex: 200,
        padding: '0 1.5rem',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        height: '60px',
        gap: '1rem',
      }}>

        {/* LEFT — Home button */}
        <a
          href="#hero"
          onClick={scrollToTop}
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: '14px', color: '#63b3ed',
            letterSpacing: '0.05em', textDecoration: 'none',
            display: 'flex', alignItems: 'center', gap: '6px',
            flexShrink: 0,
            transition: 'opacity 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.opacity = '0.75'}
          onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          title="Back to top"
        >
          <span style={{
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            width: '28px', height: '28px',
            border: '1px solid rgba(99,179,237,0.3)',
            borderRadius: '3px',
            fontSize: '14px',
          }}>⌂</span>
          <span style={{ color: '#718096' }}>//</span>
          <span>yuvraj<span style={{ color: '#718096' }}>.dev</span></span>
        </a>

        {/* RIGHT — Resume + Menu */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>

          {/* Resume download button */}
          <a
            href="http://localhost:5000/resume/Yuvraj_Singh_Sisodiya_Resume_10.pdf"
            target="_blank"
            rel="noreferrer"
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: '11px', letterSpacing: '0.06em',
              padding: '7px 14px', borderRadius: '3px',
              background: 'var(--accent)', color: '#0a0c10',
              fontWeight: 700, textDecoration: 'none',
              display: 'inline-flex', alignItems: 'center', gap: '5px',
              border: '1px solid var(--accent)',
              transition: 'all 0.2s', whiteSpace: 'nowrap',
              flexShrink: 0,
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = '#63b3ed';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = '#63b3ed';
              e.currentTarget.style.color = '#0a0c10';
            }}
          >
            ↓ Resume
          </a>

          {/* Hamburger / Close button */}
          <button
            onClick={() => setMenu(o => !o)}
            aria-label="Toggle menu"
            style={{
              background: menuOpen ? 'rgba(99,179,237,0.1)' : 'transparent',
              border: '1px solid rgba(99,179,237,0.25)',
              borderRadius: '4px',
              width: '40px', height: '36px',
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center',
              gap: '5px', cursor: 'pointer', padding: '0',
              flexShrink: 0, transition: 'background 0.2s',
            }}
          >
            <span style={{
              display: 'block', width: '18px', height: '1.5px',
              background: menuOpen ? '#63b3ed' : '#718096',
              borderRadius: '1px',
              transform: menuOpen ? 'translateY(6.5px) rotate(45deg)' : 'none',
              transition: 'all 0.25s ease',
            }} />
            <span style={{
              display: 'block', width: '18px', height: '1.5px',
              background: menuOpen ? '#63b3ed' : '#718096',
              borderRadius: '1px',
              opacity: menuOpen ? 0 : 1,
              transition: 'all 0.25s ease',
            }} />
            <span style={{
              display: 'block', width: '18px', height: '1.5px',
              background: menuOpen ? '#63b3ed' : '#718096',
              borderRadius: '1px',
              transform: menuOpen ? 'translateY(-6.5px) rotate(-45deg)' : 'none',
              transition: 'all 0.25s ease',
            }} />
          </button>
        </div>
      </nav>

      {/* ── OVERLAY ── */}
      <div
        onClick={() => setMenu(false)}
        style={{
          position: 'fixed', inset: 0, zIndex: 198,
          background: 'rgba(0,0,0,0.55)',
          backdropFilter: 'blur(2px)',
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'auto' : 'none',
          transition: 'opacity 0.3s ease',
        }}
      />

      {/* ── DRAWER ── */}
      <div
        ref={drawerRef}
        style={{
          position: 'fixed', top: 0, right: 0, bottom: 0,
          width: 'min(320px, 85vw)',
          background: '#10141c',
          borderLeft: '1px solid rgba(99,179,237,0.15)',
          zIndex: 199,
          transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
          display: 'flex', flexDirection: 'column',
          overflowY: 'auto',
        }}
      >
        {/* Drawer header */}
        <div style={{
          padding: '0 1.5rem',
          height: '60px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          borderBottom: '1px solid rgba(99,179,237,0.1)',
          flexShrink: 0,
        }}>
          <span style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: '11px', color: '#718096',
            letterSpacing: '0.12em', textTransform: 'uppercase',
          }}>
            Navigation
          </span>
          <button
            onClick={() => setMenu(false)}
            style={{
              background: 'transparent', border: 'none',
              color: '#718096', cursor: 'pointer',
              fontSize: '18px', lineHeight: 1, padding: '4px',
            }}
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        {/* Nav links */}
        <nav style={{ padding: '1rem 0', flex: 1 }}>
          {NAV_LINKS.map(({ href, label, num }, i) => {
            const isActive = active === href.slice(1);
            return (
              <a
                key={href}
                href={href}
                onClick={e => { e.preventDefault(); handleNavClick(href); }}
                style={{
                  display: 'flex', alignItems: 'center', gap: '1rem',
                  padding: '0.85rem 1.5rem',
                  textDecoration: 'none',
                  borderLeft: isActive
                    ? '2px solid #63b3ed'
                    : '2px solid transparent',
                  background: isActive
                    ? 'rgba(99,179,237,0.06)'
                    : 'transparent',
                  transition: 'all 0.15s ease',
                  animationDelay: `${i * 40}ms`,
                }}
                onMouseEnter={e => {
                  if (!isActive) {
                    e.currentTarget.style.background = 'rgba(99,179,237,0.04)';
                    e.currentTarget.style.borderLeftColor = 'rgba(99,179,237,0.3)';
                  }
                }}
                onMouseLeave={e => {
                  if (!isActive) {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.borderLeftColor = 'transparent';
                  }
                }}
              >
                {/* Number */}
                <span style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: '10px', color: isActive ? '#63b3ed' : '#4a5568',
                  minWidth: '20px', letterSpacing: '0.04em',
                  transition: 'color 0.15s',
                }}>
                  {num}
                </span>

                {/* Dot indicator */}
                <span style={{
                  width: '5px', height: '5px', borderRadius: '50%',
                  background: isActive ? '#63b3ed' : '#2d3748',
                  flexShrink: 0,
                  transition: 'background 0.15s, transform 0.15s',
                  transform: isActive ? 'scale(1.3)' : 'scale(1)',
                }} />

                {/* Label */}
                <span style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: '13px',
                  color: isActive ? '#e2e8f0' : '#718096',
                  letterSpacing: '0.04em',
                  transition: 'color 0.15s',
                }}>
                  {label}
                </span>

                {/* Active arrow */}
                {isActive && (
                  <span style={{
                    marginLeft: 'auto', color: '#63b3ed',
                    fontSize: '12px', fontFamily: "'Space Mono', monospace",
                  }}>
                    →
                  </span>
                )}
              </a>
            );
          })}
        </nav>

        {/* Drawer footer */}
        <div style={{
          padding: '1.25rem 1.5rem',
          borderTop: '1px solid rgba(99,179,237,0.1)',
          flexShrink: 0,
        }}>
          {/* Resume download — full width */}
          <a
            href="/resume/Yuvraj_Singh_Sisodiya_Resume_10.pdf"
            download
            onClick={() => setMenu(false)}
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              gap: '8px', width: '100%', padding: '10px',
              background: '#63b3ed', color: '#0a0c10',
              fontFamily: "'Space Mono', monospace",
              fontSize: '12px', fontWeight: 700, letterSpacing: '0.06em',
              borderRadius: '3px', textDecoration: 'none',
              border: '1px solid #63b3ed',
              transition: 'all 0.2s', marginBottom: '1rem',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = '#63b3ed';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = '#63b3ed';
              e.currentTarget.style.color = '#0a0c10';
            }}
          >
            ↓ &nbsp;Download Resume PDF
          </a>

          {/* Social links */}
          <div style={{ display: 'flex', gap: '10px' }}>
            {[
              { href: 'https://github.com/Yuvrajr17', label: 'GitHub' },
              { href: 'https://www.linkedin.com/in/yuvraj-r17', label: 'LinkedIn' },
              { href: 'mailto:yuvraj@gmail.com', label: 'Email' },
            ].map(({ href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                onClick={() => setMenu(false)}
                style={{
                  flex: 1, textAlign: 'center',
                  padding: '7px 4px',
                  fontFamily: "'Space Mono', monospace",
                  fontSize: '10px', color: '#718096',
                  border: '1px solid rgba(99,179,237,0.15)',
                  borderRadius: '3px', textDecoration: 'none',
                  transition: 'all 0.15s',
                  letterSpacing: '0.03em',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'rgba(99,179,237,0.4)';
                  e.currentTarget.style.color = '#63b3ed';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(99,179,237,0.15)';
                  e.currentTarget.style.color = '#718096';
                }}
              >
                {label}
              </a>
            ))}
          </div>

          <p style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: '10px', color: '#4a5568',
            textAlign: 'center', marginTop: '1rem',
            letterSpacing: '0.04em',
          }}>
            // yuvraj.dev · MERN Stack
          </p>
        </div>
      </div>
    </>
  );
}
