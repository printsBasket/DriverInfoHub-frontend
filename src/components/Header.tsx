'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import { usePathname } from 'next/navigation';

const navLinks = [
  { name: 'Home',           path: '/' },
  { name: 'All Drivers',    path: '/drivers/' },
  { name: 'Knowledge Base', path: '/knowledge/' },
  { name: 'Blog',           path: '/blog/' },
  { name: 'About',          path: '/about/' },
];

interface HeaderProps {
  children?: ReactNode;
}

export default function Header({ children }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const active = (p: string) => {
    const normalizedPathname = pathname?.endsWith('/') ? pathname : pathname + '/';
    const normalizedP = p.endsWith('/') ? p : p + '/';
    if (p === '/') {
      return pathname === '/' || pathname === '';
    }
    return normalizedPathname.startsWith(normalizedP);
  };

  return (
    <>
      <header className={`hdr${scrolled ? ' hdr--scrolled' : ''}`}>
        <div className="container hdr__inner">

          {/* Logo */}
          <Link href="/" className="hdr__logo">
            <Image src="/logo.png" alt="Driver Info Hub" width={190} height={38} priority
              className="logo-desktop"
              style={{ height: scrolled ? '28px' : '34px', width: 'auto', transition: 'height .25s ease' }} />
            <Image src="/logo1.png" alt="Driver Info Hub" width={160} height={32} priority
              className="logo-mobile"
              style={{ height: scrolled ? '24px' : '28px', width: 'auto', transition: 'height .25s ease' }} />
          </Link>

          {/* Desktop nav — pushed to the right via margin-left: auto */}
          <nav className="hdr__nav" aria-label="Main" style={{ gap: '24px' }}>
            {navLinks.map(l => (
              <Link key={l.name} href={l.path} className={`hdr__link${active(l.path) ? ' hdr__link--active' : ''}`}>
                {l.name}
              </Link>
            ))}
            <Link 
              href="/contact/" 
              className="btn btn-primary"
              style={{
                background: 'linear-gradient(135deg, #2563EB 0%, #0EA5E9 100%)',
                border: 'none',
                color: '#fff',
                padding: '10px 20px',
                borderRadius: 'var(--radius-sm)',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(37, 99, 235, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 1px 2px rgba(37, 99, 235, 0.2)';
              }}
            >
              Contact
            </Link>
          </nav>

          {/* Hamburger (mobile only) */}
          <div className="hdr__end">
            <button
              className={`hdr__burger${menuOpen ? ' hdr__burger--open' : ''}`}
              onClick={() => setMenuOpen(v => !v)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </header>

      {children ? <>{children}</> : null}

      {/* Backdrop */}
      <div className={`drawer-bd${menuOpen ? ' drawer-bd--show' : ''}`} onClick={() => setMenuOpen(false)} aria-hidden="true" />

      {/* Mobile drawer */}
      <aside className={`drawer${menuOpen ? ' drawer--open' : ''}`} aria-label="Mobile navigation">
        <div className="drawer__head">
          <Link href="/" className="drawer__logo" onClick={() => setMenuOpen(false)}>
            <Image src="/logo1.png" alt="Driver Info Hub" width={160} height={32} style={{ height: '28px', width: 'auto' }} />
          </Link>
          <button className="drawer__close" onClick={() => setMenuOpen(false)} aria-label="Close">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
          </button>
        </div>

        <nav className="drawer__nav">
          {navLinks.map(l => (
            <Link key={l.name} href={l.path} className={`drawer__link${active(l.path) ? ' drawer__link--active' : ''}`}>
              <span>{l.name}</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </Link>
          ))}
          <Link key="Contact" href="/contact/" className={`drawer__link${active('/contact/') ? ' drawer__link--active' : ''}`}>
            <span>Contact</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </Link>
        </nav>

        <div className="drawer__foot">
          <p className="drawer__note">Independent · No downloads · No jargon</p>
        </div>
      </aside>

      <div className="hdr__spacer" />
    </>
  );
}
