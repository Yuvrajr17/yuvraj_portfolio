import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

const FIELDS = [
  { name: 'name',    label: 'Your Name',    type: 'text',  placeholder: 'John Doe' },
  { name: 'email',   label: 'Email Address', type: 'email', placeholder: 'john@example.com' },
  { name: 'subject', label: 'Subject',       type: 'text',  placeholder: 'Internship Opportunity' },
];

const inputStyle = {
  width: '100%',
  background: 'rgba(255,255,255,0.03)',
  border: '1px solid var(--border)',
  borderRadius: '4px',
  padding: '10px 14px',
  color: 'var(--text)',
  fontFamily: "'DM Sans', sans-serif",
  fontSize: '14px',
  outline: 'none',
  transition: 'border-color 0.2s',
};

const CONTACT_LINKS = [
  { icon: '✉️', label: 'Email',    value: 'yuvraj@gmail.com',                href: 'mailto:yuvraj@gmail.com' },
  { icon: '📞', label: 'Mobile',   value: '+91 8719041511',                   href: 'tel:+918719041511' },
  { icon: '🖥️', label: 'GitHub',   value: 'github.com/Yuvrajr17',             href: 'https://github.com/Yuvrajr17' },
  { icon: '🔗', label: 'LinkedIn', value: 'linkedin.com/in/yuvraj-r17',       href: 'https://www.linkedin.com/in/yuvraj-r17' },
];

export default function Contact() {
  const [form, setForm]       = useState({ name: '', email: '', subject: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [focused, setFocused] = useState('');

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async e => {
    e.preventDefault();
    if (!form.name || !form.email || !form.subject || !form.message) {
      toast.error('Please fill in all fields.');
      return;
    }
    setLoading(true);
    try {
      await axios.post('/api/contact', form);
      toast.success('Message sent! I\'ll get back to you soon.');
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      toast.error(err.response?.data?.message || 'Failed to send. Try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" style={{ position: 'relative', zIndex: 1 }}>
      <div className="section-wrapper">
        <div className="section-label">09 // contact</div>
        <h2 className="section-title">Get In <span className="dim">Touch</span></h2>
        <div className="divider" />

        <p style={{ color: 'var(--muted)', fontSize: '14px', marginBottom: '2.5rem', maxWidth: '500px' }}>
          I'm open to internships, collaborations, and full-time opportunities.
          Feel free to reach out — let's build something together.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2.5rem',
        }}>
          {/* Contact Links */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {CONTACT_LINKS.map(({ icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                className="fade-up"
                style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: '6px',
                  padding: '1rem 1.2rem',
                  display: 'flex', gap: '12px', alignItems: 'center',
                  textDecoration: 'none',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'var(--border2)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = 'var(--glow)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'var(--border)';
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{
                  width: '36px', height: '36px', borderRadius: '4px',
                  background: 'rgba(99,179,237,0.1)',
                  border: '1px solid rgba(99,179,237,0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '16px', flexShrink: 0,
                }}>
                  {icon}
                </div>
                <div>
                  <div style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: '10px', color: 'var(--muted)',
                    letterSpacing: '0.08em', textTransform: 'uppercase',
                  }}>
                    {label}
                  </div>
                  <div style={{ fontSize: '13px', color: 'var(--accent)' }}>{value}</div>
                </div>
              </a>
            ))}
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="fade-up" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {FIELDS.map(({ name, label, type, placeholder }) => (
              <div key={name}>
                <label style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: '11px', color: 'var(--muted)',
                  letterSpacing: '0.08em', display: 'block', marginBottom: '6px',
                }}>
                  {label}
                </label>
                <input
                  type={type}
                  name={name}
                  value={form[name]}
                  placeholder={placeholder}
                  onChange={handleChange}
                  onFocus={() => setFocused(name)}
                  onBlur={() => setFocused('')}
                  style={{
                    ...inputStyle,
                    borderColor: focused === name ? 'var(--accent)' : 'var(--border)',
                  }}
                />
              </div>
            ))}

            <div>
              <label style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: '11px', color: 'var(--muted)',
                letterSpacing: '0.08em', display: 'block', marginBottom: '6px',
              }}>
                Message
              </label>
              <textarea
                name="message"
                rows={5}
                value={form.message}
                placeholder="Hello Yuvraj, I'd like to discuss..."
                onChange={handleChange}
                onFocus={() => setFocused('message')}
                onBlur={() => setFocused('')}
                style={{
                  ...inputStyle,
                  resize: 'vertical',
                  borderColor: focused === 'message' ? 'var(--accent)' : 'var(--border)',
                }}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn btn-primary"
              style={{ alignSelf: 'flex-start', opacity: loading ? 0.6 : 1, cursor: loading ? 'not-allowed' : 'pointer' }}
            >
              {loading ? '⏳ Sending...' : '→ Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
