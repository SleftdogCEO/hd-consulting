'use client';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <span className="footer-logo">HD</span>
            <span className="footer-text">Consulting</span>
          </div>
          <div className="footer-links">
            <a href="mailto:hrdenmark@comcast.net">hrdenmark@comcast.net</a>
            <span className="divider">|</span>
            <a href="tel:610-721-2793">(610) 721-2793</a>
          </div>
          <p className="footer-copy">&copy; 2025 HD Consulting. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
