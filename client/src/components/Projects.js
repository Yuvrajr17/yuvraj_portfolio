import React from 'react';

export default function Projects({ projects }) {
  return (
    <section id="projects" style={{ position: 'relative', zIndex: 1 }}>
      <div className="section-wrapper">
        <div className="section-label">03 // projects</div>
        <h2 className="section-title">Featured <span className="dim">Projects</span></h2>
        <div className="divider" />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="fade-up"
      style={{
        background: 'var(--surface)',
        border: `1px solid ${hovered ? 'var(--border2)' : 'var(--border)'}`,
        borderRadius: '6px',
        padding: '1.75rem',
        position: 'relative',
        overflow: 'hidden',
        transform: hovered ? 'translateY(-3px)' : 'none',
        boxShadow: hovered ? 'var(--glow)' : 'none',
        transition: 'all 0.25s ease',
      }}
    >
      {/* Top accent line */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
        background: 'linear-gradient(90deg, var(--accent), var(--accent2))',
        opacity: hovered ? 1 : 0,
        transition: 'opacity 0.25s',
      }} />

      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem', gap: '1rem' }}>
        <div>
          <div style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: '16px', fontWeight: 700, color: 'var(--text)', marginBottom: '4px',
          }}>
            ■ {project.name}
          </div>
          <div style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: '11px', color: 'var(--accent2)',
          }}>
            {project.stack}
          </div>
        </div>
        <div style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: '11px', color: 'var(--muted)',
          whiteSpace: 'nowrap', marginTop: '2px',
        }}>
          {project.period}
        </div>
      </div>

      {/* Description bullets */}
      <ul style={{ marginBottom: '1.2rem' }}>
        {project.description.map((point, i) => (
          <li key={i} style={{
            fontSize: '14px', color: 'var(--muted)',
            lineHeight: 1.75, marginBottom: '0.3rem',
            paddingLeft: '1rem', position: 'relative',
          }}>
            <span style={{
              position: 'absolute', left: 0, top: '8px',
              width: '4px', height: '4px', borderRadius: '50%',
              background: 'var(--accent)', display: 'block',
            }} />
            {point}
          </li>
        ))}
      </ul>

      {/* Tech stack + links */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', alignItems: 'center' }}>
        {project.tech.map((t, i) => (
          <span key={i} style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: '10px', padding: '2px 8px',
            background: 'rgba(99,179,237,0.08)',
            border: '1px solid rgba(99,179,237,0.2)',
            color: 'var(--accent)', borderRadius: '2px',
          }}>{t}</span>
        ))}
        {project.github && (
          <a href={project.github} target="_blank" rel="noreferrer" style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: '10px', padding: '2px 8px',
            background: 'rgba(246,173,85,0.08)',
            border: '1px solid rgba(246,173,85,0.3)',
            color: 'var(--accent3)', borderRadius: '2px',
            textDecoration: 'none', marginLeft: '4px',
          }}>↗ GitHub</a>
        )}
        {project.live && (
          <a href={project.live} target="_blank" rel="noreferrer" style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: '10px', padding: '2px 8px',
            background: 'rgba(79,209,197,0.08)',
            border: '1px solid rgba(79,209,197,0.3)',
            color: 'var(--accent2)', borderRadius: '2px',
            textDecoration: 'none',
          }}>↗ Live</a>
        )}
      </div>
    </div>
  );
}
