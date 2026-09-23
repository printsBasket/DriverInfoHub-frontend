'use client';

import { useState, FormEvent } from 'react';

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'https://driverinfohubbackend.vercel.app';
      const res = await fetch(`${backendUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="form-success">
        <div className="success-icon">✓</div>
        <h3>Message sent!</h3>
        <p>Thanks for reaching out. We'll get back to you within 2–3 working days.</p>
        <button className="btn btn-outline" onClick={() => setStatus('idle')} style={{ marginTop: '16px' }}>
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="cf-name">Your Name</label>
          <input
            id="cf-name"
            name="name"
            type="text"
            placeholder="Jane Smith"
            value={form.name}
            onChange={handleChange}
            required
            autoComplete="name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="cf-email">Email Address</label>
          <input
            id="cf-email"
            name="email"
            type="email"
            placeholder="jane@example.com"
            value={form.email}
            onChange={handleChange}
            required
            autoComplete="email"
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="cf-subject">Subject</label>
        <select id="cf-subject" name="subject" value={form.subject} onChange={handleChange} required>
          <option value="">Select a topic…</option>
          <option value="topic-suggestion">Topic Suggestion</option>
          <option value="content-feedback">Content Feedback</option>
          <option value="general">General Question</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="cf-message">Message</label>
        <textarea
          id="cf-message"
          name="message"
          placeholder="Tell us what's on your mind…"
          value={form.message}
          onChange={handleChange}
          required
          rows={5}
        />
      </div>

      {status === 'error' && (
        <p className="form-error" role="alert">Something went wrong. Please try again or email us directly.</p>
      )}

      <button
        type="submit"
        className="btn btn-primary"
        disabled={status === 'loading'}
        style={{ alignSelf: 'flex-start' }}
      >
        {status === 'loading' ? 'Sending…' : 'Send Message'}
        {status !== 'loading' && (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z" />
          </svg>
        )}
      </button>

      <style jsx>{`
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px;
        }

        @media (max-width: 640px) { .form-row { grid-template-columns: 1fr; } }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .form-group label {
          font-size: 12.5px;
          font-weight: 700;
          color: var(--text-main);
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }

        .form-group input,
        .form-group textarea,
        .form-group select {
          width: 100%;
          padding: 12px 15px;
          border: 1.5px solid var(--border);
          border-radius: 10px;
          font-size: 0.95rem;
          font-family: inherit;
          color: var(--text-main);
          background: #fff;
          transition: all 0.2s ease;
          outline: none;
          appearance: none;
        }

        .form-group input::placeholder,
        .form-group textarea::placeholder { color: var(--text-light); }

        .form-group input:focus,
        .form-group textarea:focus,
        .form-group select:focus {
          border-color: var(--primary);
          box-shadow: 0 0 0 3px var(--primary-soft);
        }

        .form-group textarea { resize: vertical; min-height: 130px; }

        .form-group select {
          background-image: url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L6 6L11 1' stroke='%236B7280' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 14px center;
          padding-right: 40px;
          cursor: pointer;
        }

        .form-error {
          color: #DC2626;
          font-size: 0.9rem;
          background: #FEF2F2;
          border: 1px solid #FECACA;
          border-radius: 8px;
          padding: 12px 16px;
          margin: 0;
        }

        .form-success {
          text-align: center;
          padding: 48px 24px;
          background: var(--bg-light);
          border-radius: 16px;
          border: 1px solid var(--border);
        }

        .success-icon {
          width: 52px;
          height: 52px;
          background: #DCFCE7;
          border: 1.5px solid #86EFAC;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
          color: #16A34A;
          font-weight: 800;
          margin: 0 auto 16px;
        }

        .form-success h3 { margin-bottom: 8px; color: var(--text-main); }
        .form-success p  { color: var(--text-muted); margin: 0; }
      `}</style>
    </form>
  );
}
