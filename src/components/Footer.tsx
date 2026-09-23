'use client';

import Link from 'next/link';
import Image from 'next/image';

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="ftr">

      {/* ── Main columns ── */}
      <div className="container ftr__body">

        {/* Col 1 — Brand */}
        <div className="ftr__brand">
          <Link href="/" className="ftr__logo-wrap" aria-label="Driver Info Hub home">
            <Image
              src="/logo.png"
              alt="Driver Info Hub"
              width={160}
              height={32}
              style={{ height: '32px', width: 'auto' }}
            />
          </Link>
          <p className="ftr__tagline">
            Your trusted resource for understanding printer drivers, troubleshooting issues,
            and finding clear answers without technical complexity.
          </p>
        </div>

        {/* Col 2 — Site Links */}
        <div className="ftr__col">
          <p className="ftr__col-title">Site Links</p>
          <ul className="ftr__col-list">
            <li><Link href="/"           className="ftr__link">Home</Link></li>
            <li><Link href="/about/"      className="ftr__link">About</Link></li>
            <li><Link href="/blog/"       className="ftr__link">Blog</Link></li>
            <li><Link href="/knowledge/"  className="ftr__link">Knowledge</Link></li>
            <li><Link href="/contact/"    className="ftr__link">Contact</Link></li>
            <li><Link href="/sitemap/"    className="ftr__link">Sitemap</Link></li>
          </ul>
        </div>

        {/* Col 3 — Driver Overviews */}
        <div className="ftr__col">
          <p className="ftr__col-title">Driver Overviews</p>
          <ul className="ftr__col-list">
            <li><Link href="/drivers/"            className="ftr__link">All Device Drivers</Link></li>
            <li><Link href="/drivers/printer/"    className="ftr__link">Printer Drivers</Link></li>
            <li><Link href="/drivers/scanner/"    className="ftr__link">Scanner Drivers</Link></li>
            <li><Link href="/drivers/graphics/"   className="ftr__link">Graphics Drivers</Link></li>
            <li><Link href="/drivers/audio/"      className="ftr__link">Audio Drivers</Link></li>
            <li><Link href="/drivers/network/"    className="ftr__link">Wi-Fi &amp; Network</Link></li>
            <li><Link href="/drivers/bluetooth/"  className="ftr__link">Bluetooth Drivers</Link></li>
            <li><Link href="/drivers/usb/"        className="ftr__link">USB Drivers</Link></li>
          </ul>
        </div>

        {/* Col 4 — Legal */}
        <div className="ftr__col">
          <p className="ftr__col-title">Legal</p>
          <ul className="ftr__col-list">
            <li><Link href="/privacy/"                 className="ftr__link">Privacy Policy</Link></li>
            <li><Link href="/terms/"                   className="ftr__link">Terms of Use</Link></li>
            <li><Link href="/disclaimer/"              className="ftr__link">Disclaimer</Link></li>
            <li><Link href="/cookie-policy/"           className="ftr__link">Cookie Policy</Link></li>
            <li><Link href="/advertising-disclosure/"  className="ftr__link">Advertising Disclosure</Link></li>
            <li><Link href="/accessibility/"           className="ftr__link">Accessibility</Link></li>
          </ul>
        </div>

        {/* Col 5 — Get In Touch */}
        <div className="ftr__col">
          <p className="ftr__col-title">Get In Touch</p>
          <p className="ftr__touch-desc">
            Have a question or topic suggestion? We would love to hear from you.
          </p>
          <div className="ftr__touch-item">
            <span className="ftr__touch-label">EMAIL</span>
            <a href="mailto:support@driverinfohub.com" className="ftr__touch-value">
              support@driverinfohub.com
            </a>
          </div>
          <div className="ftr__touch-item">
            <span className="ftr__touch-label">ADDRESS</span>
            <span className="ftr__touch-value ftr__touch-value--muted">95 Broadacre Dr, Kitchener, ON N2R 0S5, Canada</span>
          </div>
          <div className="ftr__touch-item">
            <span className="ftr__touch-label">COMPANY</span>
            <span className="ftr__touch-value ftr__touch-value--muted">16904599 CANADA INC.</span>
          </div>
        </div>

      </div>

      {/* ── Disclaimer band ── */}
      <div className="ftr__disclaimer-band">
        <div className="container">
          <p className="ftr__disclaimer-text">
            <strong>Disclaimer:</strong> Driver Info Hub is an independent educational resource designed to help users
            understand printer drivers, setup procedures, compatibility, and troubleshooting methods.
            Content is provided for informational purposes only and does not represent any printer manufacturer,
            hardware vendor, or software publisher.
          </p>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="container ftr__bottom">
        <p className="ftr__copy">© {year} Driver Info Hub. All rights reserved.</p>
        <nav className="ftr__bottom-nav" aria-label="Legal footer links">
          <Link href="/privacy/"                 className="ftr__bottom-link">Privacy Policy</Link>
          <Link href="/terms/"                   className="ftr__bottom-link">Terms</Link>
          <Link href="/disclaimer/"              className="ftr__bottom-link">Disclaimer</Link>
          <Link href="/cookie-policy/"           className="ftr__bottom-link">Cookies</Link>
          <Link href="/advertising-disclosure/"  className="ftr__bottom-link">Advertising Disclosure</Link>
          <Link href="/accessibility/"           className="ftr__bottom-link">Accessibility</Link>
          <Link href="/sitemap/"                 className="ftr__bottom-link">Sitemap</Link>
        </nav>
      </div>

    </footer>
  );
}
