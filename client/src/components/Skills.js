import React, { useRef, useState, useEffect } from 'react';

function SkillBar({ name, level, animate }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '0.7rem' }}>
      <span style={{
        fontFamily: "'Space Mono', monospace",
        fontSize: '12px', color: 'var(--muted)', minWidth: '110px',
      }}>{name}</span>
      <div style={{
        flex: 1, height: '4px',
        background: 'rgba(255,255,255,0.05)',
        borderRadius: '2px', overflow: 'hidden',
      }}>
        <div style={{
          height: '100%', borderRadius: '2px',
          background: 'linear-gradient(90deg, var(--accent), var(--accent2))',
          width: animate ? `${level}%` : '0%',
          transition: 'width 1s ease',
        }} />
      </div>
      <span style={{
        fontFamily: "'Space Mono', monospace",
        fontSize: '10px', color: 'var(--muted)', minWidth: '32px', textAlign: 'right',
      }}>{level}%</span>
    </div>
  );
}

function SkillGroup({ group }) {
  const ref = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setAnimate(true); obs.disconnect(); }
    }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="card fade-up">
      <div style={{
        fontFamily: "'Space Mono', monospace",
        fontSize: '11px', color: 'var(--accent3)',
        letterSpacing: '0.1em', textTransform: 'uppercase',
        marginBottom: '1rem',
        borderBottom: '1px solid var(--border)',
        paddingBottom: '0.5rem',
      }}>
        ▶ {group.category}
      </div>
      {group.items.map((item, i) => (
        <SkillBar key={i} name={item.name} level={item.level} animate={animate} />
      ))}
    </div>
  );
}

export default function Skills({ skills }) {
  return (
    <section id="skills" style={{ position: 'relative', zIndex: 1 }}>
      <div className="section-wrapper">
        <div className="section-label">02 // skills</div>
        <h2 className="section-title">Technical <span className="dim">Skills</span></h2>
        <div className="divider" />
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem',
        }}>
          {skills.map((group, i) => <SkillGroup key={i} group={group} />)}
        </div>
      </div>
    </section>
  );
}
