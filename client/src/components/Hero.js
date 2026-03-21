import React, { useEffect, useState, useRef } from 'react';

const TYPED_TEXT = "const dev = { name: \"Yuvraj\", stack: [\"MongoDB\",\"Express\",\"React\",\"Node\"], status: \"building...\" }";

// ── Particles ──────────────────────────────────────────────
function Particles() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animId;

    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const particles = Array.from({ length: 80 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      r: Math.random() * 1.5 + 0.3,
      dx: (Math.random() - 0.5) * 0.4,
      dy: (Math.random() - 0.5) * 0.4,
      o: Math.random() * 0.5 + 0.1,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(99,179,237,${p.o})`;
        ctx.fill();
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > canvas.width)  p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
      });

      // Draw lines between close particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(99,179,237,${0.08 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas ref={canvasRef} style={{
      position: 'fixed', inset: 0,
      zIndex: 0, pointerEvents: 'none',
      opacity: 0.6,
    }} />
  );
}

// ── Glitch Text ────────────────────────────────────────────
function GlitchText({ text }) {
  return (
    <span style={{ position: 'relative', display: 'inline-block' }}
      className="glitch" data-text={text}>
      {text}
    </span>
  );
}

// ── Main Hero ──────────────────────────────────────────────
export default function Hero({ hero }) {
  const [typed, setTyped]       = useState('');
  const [visible, setVisible]   = useState(false);
  const mouseRef                = useRef({ x: 0, y: 0 });
  const heroRef                 = useRef(null);

  // Typing effect
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTyped(TYPED_TEXT.slice(0, i + 1));
      i++;
      if (i >= TYPED_TEXT.length) clearInterval(interval);
    }, 28);
    return () => clearInterval(interval);
  }, []);

  // Stagger fade-in on mount
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  // Mouse parallax
  useEffect(() => {
    const move = e => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width  - 0.5) * 16;
      const y = ((e.clientY - rect.top)  / rect.height - 0.5) * 10;
      heroRef.current.style.transform = `perspective(1000px) rotateY(${x}deg) rotateX(${-y}deg)`;
    };
    const reset = () => {
      if (heroRef.current)
        heroRef.current.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg)';
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseleave', reset);
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseleave', reset);
    };
  }, []);

  const fadeStyle = (delay) => ({
    opacity:   visible ? 1 : 0,
    transform: visible ? 'none' : 'translateY(28px)',
    transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
  });

  return (
    <>
      <Particles />

      <section id="hero" style={{
        minHeight: '100vh', display: 'flex', alignItems: 'center',
        paddingTop: '60px', position: 'relative', zIndex: 1,
      }}>
        <div
          ref={heroRef}
          style={{
            maxWidth: '1000px', width: '100%',
            margin: '0 auto', padding: '0 2rem',
            transition: 'transform 0.1s ease',
            willChange: 'transform',
          }}
        >
          {/* Badge */}
          <div style={{ ...fadeStyle(0.1) }}>
            <div style={{
              display: 'inline-block',
              fontFamily: "'Space Mono', monospace",
              fontSize: '12px', color: 'var(--accent2)',
              border: '1px solid rgba(79,209,197,0.3)',
              padding: '4px 12px', borderRadius: '2px',
              marginBottom: '1.5rem', letterSpacing: '0.08em',
            }}>
              ▶ {hero.tagline}
            </div>
          </div>

          {/* Name with glitch */}
          <div style={{ ...fadeStyle(0.25) }}>
            <h1 style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: 'clamp(2.5rem, 7vw, 5rem)',
              fontWeight: 700, lineHeight: 1.05,
              marginBottom: '0.8rem',
            }}>
              Yuvraj<br />
              <span style={{ color: 'var(--accent)' }}>
                <GlitchText text="Singh Sisodiya" />
              </span>
            </h1>
          </div>

          {/* Role */}
          <div style={{ ...fadeStyle(0.4) }}>
            <p style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: 'clamp(1rem, 2.5vw, 1.3rem)',
              color: 'var(--muted)', marginBottom: '1.5rem',
            }}>
              MERN Stack Developer{' '}
              <span style={{ color: 'var(--accent3)' }}>&</span> CS Engineer
            </p>
          </div>

          {/* Bio */}
          <div style={{ ...fadeStyle(0.55) }}>
            <p style={{
              fontSize: '15px', color: 'var(--muted)',
              maxWidth: '560px', marginBottom: '2.5rem', lineHeight: 1.85,
            }}>
              {hero.bio}
            </p>
          </div>

          {/* CTA Buttons */}
          <div style={{ ...fadeStyle(0.7) }}>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="#projects" className="btn btn-primary">→ View Projects</a>
              <a href={hero.github} target="_blank" rel="noreferrer" className="btn btn-outline">⌥ GitHub</a>
              <a href={hero.linkedin} target="_blank" rel="noreferrer" className="btn btn-outline">in LinkedIn</a>
              <a href="#resume" className="btn btn-outline">↓ Resume</a>
            </div>
          </div>

          {/* Terminal */}
          <div style={{ ...fadeStyle(0.85) }}>
            <div style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: '13px', color: 'var(--accent2)',
              marginTop: '2.5rem', opacity: 0.6,
            }}>
              <span style={{ color: 'var(--accent3)' }}>$ </span>
              {typed}
              <span style={{
                display: 'inline-block', width: '2px', height: '14px',
                background: 'var(--accent)', marginLeft: '2px',
                verticalAlign: 'middle',
                animation: 'blink 1s step-end infinite',
              }} />
            </div>
          </div>

          {/* Scroll indicator */}
          <div style={{ ...fadeStyle(1.1), marginTop: '4rem' }}>
            <div style={{
              display: 'flex', flexDirection: 'column',
              alignItems: 'flex-start', gap: '6px',
            }}>
              <span style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: '10px', color: 'var(--muted)',
                letterSpacing: '0.15em', textTransform: 'uppercase',
              }}>Scroll down</span>
              <div style={{
                width: '1px', height: '48px',
                background: 'linear-gradient(to bottom, var(--accent), transparent)',
                marginLeft: '18px',
                animation: 'scrollLine 1.8s ease-in-out infinite',
              }} />
            </div>
          </div>

        </div>
      </section>

      <style>{`
        @keyframes blink {
          0%,100%{opacity:1} 50%{opacity:0}
        }

        @keyframes scrollLine {
          0%   { opacity:0; transform: scaleY(0); transform-origin: top; }
          50%  { opacity:1; transform: scaleY(1); transform-origin: top; }
          100% { opacity:0; transform: scaleY(1); transform-origin: bottom; }
        }

        /* Glitch effect */
        .glitch {
          animation: glitch 4s infinite;
        }
        .glitch::before,
        .glitch::after {
          content: attr(data-text);
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 100%;
          color: var(--accent);
        }
        .glitch::before {
          animation: glitchTop 4s infinite;
          clip-path: polygon(0 0, 100% 0, 100% 35%, 0 35%);
          color: #4fd1c5;
        }
        .glitch::after {
          animation: glitchBottom 4s infinite;
          clip-path: polygon(0 65%, 100% 65%, 100% 100%, 0 100%);
          color: #f6ad55;
        }
        @keyframes glitch {
          0%,90%,100% { transform: none; }
          92%          { transform: skew(-1deg); }
          94%          { transform: skew(1deg); }
        }
        @keyframes glitchTop {
          0%,90%,100% { transform: none; opacity:0; }
          92%          { transform: translate(-3px, -2px); opacity:0.8; }
          94%          { transform: translate(3px, 2px); opacity:0.8; }
          96%          { opacity:0; }
        }
        @keyframes glitchBottom {
          0%,90%,100% { transform: none; opacity:0; }
          92%          { transform: translate(3px, 2px); opacity:0.8; }
          94%          { transform: translate(-3px, -2px); opacity:0.8; }
          96%          { opacity:0; }
        }
      `}</style>
    </>
  );
}