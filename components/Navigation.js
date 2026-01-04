'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/golf', label: 'Golf' },
    { href: '/fishing', label: 'Fishing' },
    { href: '/shop', label: 'Shop' },
  ];

  return (
    <>
      <nav className={`nav ${scrolled ? 'nav-scrolled' : ''}`}>
        <div className="nav-container">
          <Link href="/" className="nav-logo">
            <span className="logo-hd">HD</span>
            <span className="logo-text">Consulting</span>
          </Link>

          <div className="nav-links-desktop">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link ${pathname === link.href ? 'active' : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <button
            className={`hamburger ${isOpen ? 'open' : ''}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>
      </nav>

      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        <div className="mobile-menu-content">
          {navLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              className={`mobile-link ${pathname === link.href ? 'active' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
