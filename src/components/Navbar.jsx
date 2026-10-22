'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#service', label: 'Service' },
  { href: '#benefits', label: 'Benefits' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setIsScrolled(y > 50);
      setIsVisible(!(y > lastScrollY.current && y > 150));
      lastScrollY.current = y;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close the mobile menu on Escape or when the viewport grows past the mobile breakpoint
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e) => e.key === 'Escape' && setMenuOpen(false);
    const onResize = () => window.innerWidth > 900 && setMenuOpen(false);
    window.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
    };
  }, [menuOpen]);

  // A solid (white) bar when scrolled or while the mobile menu is open
  const solid = isScrolled || menuOpen;
  const closeMenu = () => setMenuOpen(false);

  return (
    <motion.nav
      animate={isVisible || menuOpen ? { y: 0, opacity: 1 } : { y: '-100%', opacity: 0 }}
      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
      className={`navbar-container ${solid ? 'scrolled' : ''}`}
    >
      <a href="#home" className="navbar-logo" onClick={closeMenu}>
        <img
          src={solid ? '/ATS-logo-dark.png' : '/ATS-logo.png'}
          alt="Logo"
          className="logo-image"
        />
      </a>

      <ul className="navbar-links">
        {links.map((link) => (
          <li key={link.href}>
            <a href={link.href} className="navbar-link">{link.label}</a>
          </li>
        ))}
      </ul>

      <div className="navbar-actions">
        <a href="#contact" className="btn-contact">Contact Us</a>
        <a href="#register" className="btn-register">Registration</a>
      </div>

      <button
        type="button"
        className={`navbar-toggle ${menuOpen ? 'is-open' : ''}`}
        onClick={() => setMenuOpen((o) => !o)}
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
        aria-controls="mobile-menu"
      >
        <span />
        <span />
        <span />
      </button>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            className="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            <ul className="mobile-menu-links">
              {links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="mobile-menu-link" onClick={closeMenu}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mobile-menu-actions">
              <a href="#contact" className="mobile-btn is-primary" onClick={closeMenu}>Contact Us</a>
              <a href="#register" className="mobile-btn" onClick={closeMenu}>Registration</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
