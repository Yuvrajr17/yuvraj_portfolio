import React, { useState } from 'react';

const TESTIMONIALS = [
  {
    name: 'Rahul Sharma',
    role: 'Senior Developer @ TCS',
    text: 'Yuvraj is an exceptional developer with strong problem-solving skills. His MERN stack knowledge is impressive for someone at his level. Highly recommend him!',
    avatar: 'RS',
    color: '#63b3ed',
  },
  {
    name: 'Priya Patel',
    role: 'Team Lead @ Infosys',
    text: 'Working with Yuvraj was a great experience. He picks up new concepts quickly and delivers clean, well-structured code. A true asset to any team.',
    avatar: 'PP',
    color: '#4fd1c5',
  },
  {
    name: 'Amit Verma',
    role: 'Professor @ LPU',
    text: 'One of my most dedicated students. Yuvraj consistently goes beyond the curriculum, especially in full-stack development and DSA. Great future ahead!',
    avatar: 'AV',
    color: '#f6ad55',
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  const prev = () => setActive(a => (a - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const next = () => setActive(a => (a + 1) % TESTIMONIALS.length);

  const t = TESTIMONIALS[active];

  return (
    <section id="testimonials" style={{ position: 'relative', zIndex: 1 }}>
      <div className="section-wrapper">
        <div className="section-label">10 // testimonials</div>
        <h2 className="section-title">What People <span className="dim">Say</span></h2>
        <div className="divider" />

        <div style={{
          maxWidth: '680px', margin: '0 auto', textAlign: 'center',
        }}>
          {/* Quote card */}
          <div
            className="card fade-up"
            style={{
              padding: '2.5rem',
              position: 'relative',
              borderColor: `${t.color}33`,
              transition: 'all 0.4s ease',
            }}
          >
            {/* Big quote mark */}
            <div style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: '80px', lineHeight: 1,
              color: t.color, opacity: 0.15,
              position: 'absolute', top: '1rem', left: '1.5rem',
              fontWeight: 700,
            }}>"</div>

            {/* Stars */}
            <div style={{ marginBottom: '1.2rem' }}>
              {[...Array(5)].map((_, i) => (
                <span key={i} style={{ color: '#f6ad55', fontSize: '16px' }}>★</span>
              ))}
            </div>

            {/* Quote text */}
            <p style={{
              fontSize: '15px', color: 'var(--muted)',
              lineHeight: 1.9, fontStyle: 'italic',
              marginBottom: '2rem', position: 'relative', zIndex: 1,
            }}>
              "{t.text}"
            </p>

            {/* Avatar + Name */}
            <div style={{
              display: 'flex', alignItems: 'center',
              justifyContent: 'center', gap: '1rem',
            }}>
              <div style={{
                width: '48px', height: '48px',
                borderRadius: '50%',
                background: `${t.color}22`,
                border: `2px solid ${t.color}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: "'Space Mono', monospace",
                fontSize: '13px', fontWeight: 700,
                color: t.color,
              }}>
                {t.avatar}
              </div>
              <div style={{ textAlign: 'left' }}>
                <div style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: '13px', fontWeight: 700,
                  color: 'var(--text)',
                }}>
                  {t.name}
                </div>
                <div style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: '11px', color: t.color,
                }}>
                  {t.role}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div style={{
            display: 'flex', alignItems: 'center',
            justifyContent: 'center', gap: '1.5rem',
            marginTop: '2rem',
          }}>
            <button onClick={prev} className="btn btn-outline"
              style={{ padding: '8px 16px', fontSize: '16px' }}>←</button>

            {/* Dots */}
            <div style={{ display: 'flex', gap: '8px' }}>
              {TESTIMONIALS.map((_, i) => (
                <div
                  key={i}
                  onClick={() => setActive(i)}
                  style={{
                    width: i === active ? '24px' : '8px',
                    height: '8px', borderRadius: '4px',
                    background: i === active ? 'var(--accent)' : 'var(--border2)',
                    transition: 'all 0.3s ease',
                    cursor: 'none',
                  }}
                />
              ))}
            </div>

            <button onClick={next} className="btn btn-outline"
              style={{ padding: '8px 16px', fontSize: '16px' }}>→</button>
          </div>
        </div>
      </div>
    </section>
  );
}