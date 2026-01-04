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

          {/* Desktop Menu */}
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

          {/* Hamburger Button */}
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

      {/* Mobile Menu Overlay */}
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

      <style jsx>{`
        .nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: 20px 0;
          transition: all 0.3s ease;
        }

        .nav-scrolled {
          background: rgba(26, 71, 42, 0.95);
          backdrop-filter: blur(10px);
          padding: 15px 0;
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
        }

        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .nav-logo {
          display: flex;
          align-items: center;
          gap: 8px;
          font-weight: 700;
          color: white;
          text-decoration: none;
        }

        .logo-hd {
          background: linear-gradient(135deg, #c9a227 0%, #d4b94a 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-size: 1.8rem;
          font-family: 'Playfair Display', serif;
        }

        .logo-text {
          font-size: 1.2rem;
          letter-spacing: 1px;
        }

        .nav-links-desktop {
          display: flex;
          gap: 40px;
        }

        .nav-link {
          color: rgba(255, 255, 255, 0.9);
          font-weight: 500;
          font-size: 1rem;
          position: relative;
          padding: 8px 0;
          transition: color 0.3s ease;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(135deg, #c9a227 0%, #d4b94a 100%);
          transition: width 0.3s ease;
        }

        .nav-link:hover,
        .nav-link.active {
          color: #c9a227;
        }

        .nav-link:hover::after,
        .nav-link.active::after {
          width: 100%;
        }

        .hamburger {
          display: none;
          flex-direction: column;
          justify-content: center;
          gap: 6px;
          width: 32px;
          height: 32px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
          z-index: 1001;
        }

        .hamburger-line {
          width: 100%;
          height: 2px;
          background: white;
          border-radius: 2px;
          transition: all 0.3s ease;
          transform-origin: center;
        }

        .hamburger.open .hamburger-line:nth-child(1) {
          transform: rotate(45deg) translate(6px, 6px);
        }

        .hamburger.open .hamburger-line:nth-child(2) {
          opacity: 0;
          transform: scaleX(0);
        }

        .hamburger.open .hamburger-line:nth-child(3) {
          transform: rotate(-45deg) translate(6px, -6px);
        }

        .mobile-menu {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, #1a472a 0%, #0f2a18 100%);
          z-index: 999;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          visibility: hidden;
          transition: all 0.4s ease;
        }

        .mobile-menu.open {
          opacity: 1;
          visibility: visible;
        }

        .mobile-menu-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 30px;
        }

        .mobile-link {
          font-family: 'Playfair Display', serif;
          font-size: 2.5rem;
          color: white;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.3s ease;
        }

        .mobile-menu.open .mobile-link {
          opacity: 1;
          transform: translateY(0);
          animation: fadeInUp 0.5s ease forwards;
        }

        .mobile-link:hover,
        .mobile-link.active {
          color: #c9a227;
        }

        @media (max-width: 768px) {
          .nav-links-desktop {
            display: none;
          }

          .hamburger {
            display: flex;
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}
