'use client';

import { motion } from 'framer-motion';
import { Bolt } from './Icons';
import './Footer.css';

const quickLinks = [
  { href: '#register', label: 'Registration' },
  { href: '#contact', label: 'Contact' },
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#service', label: 'Service' },
  { href: '#benefits', label: 'Benefits' },
];

const socials = [
  {
    label: 'Facebook',
    href: '#',
    path: 'M14 8h3V4h-3c-2.76 0-4 1.79-4 4.5V11H7v4h3v9h4v-9h3l1-4h-4V8.6c0-.4.2-.6.6-.6z',
  },
  {
    label: 'LinkedIn',
    href: '#',
    path: 'M4.98 3.5a2.5 2.5 0 110 5 2.5 2.5 0 010-5zM3 9.75h4V21H3V9.75zM9.5 9.75h3.8v1.6h.05c.53-1 1.83-1.95 3.77-1.95 4.03 0 4.78 2.6 4.78 6V21h-4v-4.9c0-1.17-.02-2.68-1.66-2.68-1.66 0-1.92 1.28-1.92 2.6V21h-4V9.75z',
  },
  {
    label: 'Instagram',
    href: '#',
    path: 'M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 5.5a4.5 4.5 0 100 9 4.5 4.5 0 000-9zm0 2a2.5 2.5 0 110 5 2.5 2.5 0 010-5zM17.5 5.3a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4z',
  },
  {
    label: 'YouTube',
    href: '#',
    path: 'M23 7.2a3 3 0 00-2.1-2.1C19 4.6 12 4.6 12 4.6s-7 0-8.9.5A3 3 0 001 7.2 31 31 0 00.5 12a31 31 0 00.5 4.8 3 3 0 002.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 002.1-2.1 31 31 0 00.5-4.8 31 31 0 00-.5-4.8zM9.75 15.02V8.98L15.5 12l-5.75 3.02z',
  },
];

const reveal = (delay = 0) => ({
  initial: { y: 30, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.6, delay, ease: 'easeOut' },
});

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="footer">
      <div className="footer-inner">
        <motion.h2 className="footer-headline" {...reveal()}>
          <span>Let&rsquo;s Build Solar</span>
          <span className="footer-headline-icon">
            <Bolt />
          </span>
        </motion.h2>

        <div className="footer-divider" />

        <div className="footer-grid">
          <motion.div className="footer-col" {...reveal(0.1)}>
            <a href="#home" className="footer-brand">
              <img src="/ATS-logo.png" alt="ATS - APS Technical Solutions" />
            </a>
            <p className="footer-about">
              APS Technical Solutions is your trusted third party inspection partner.
            </p>

            <h4 className="footer-title footer-title-social">Social Links</h4>
            <div className="footer-socials">
              {socials.map((s) => (
                <a key={s.label} href={s.href} aria-label={s.label} className="footer-social">
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div className="footer-col" {...reveal(0.2)}>
            <h4 className="footer-title">Quick Link</h4>
            <ul className="footer-pills">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="footer-pill">{link.label}</a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div className="footer-col" {...reveal(0.3)}>
            <h4 className="footer-title">Contact</h4>
            <ul className="footer-contact">
              <li><a href="mailto:info@apstechsol.com">info@apstechsol.com</a></li>
              <li><a href="tel:+910000000000">+91 00000 00000</a></li>
              <li>
                Your Street Address,
                <br />
                City, State,
                <br />
                PIN 000000
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="footer-bottom">
          <span>&copy; {year} All right reserved</span>
          <span className="footer-dot" />
          <a href="#">Privacy policy</a>
          <span className="footer-dot" />
          <a href="#">Terms &amp; Conditions</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
