import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg-pattern"></div>
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <p className="hero-tagline animate-fade-up">Merchant Services Advisor</p>
              <h1 className="hero-title animate-fade-up delay-100">
                Herb <span className="gold-text">Denmark</span>
              </h1>
              <p className="hero-description animate-fade-up delay-200">
                Decades of experience in the payments industry. Free advice for sales reps breaking in and ISOs looking to grow or exit.
              </p>
              <div className="hero-buttons animate-fade-up delay-300">
                <Link href="#contact" className="btn btn-primary">
                  Let&apos;s Talk
                </Link>
                <Link href="/golf" className="btn btn-secondary">
                  Life Beyond Work
                </Link>
              </div>
            </div>
            <div className="hero-image-wrapper animate-scale delay-200">
              <div className="hero-image-frame">
                <img
                  src="/images/herb-denmark.jpg"
                  alt="Herb Denmark"
                  className="hero-image"
                />
              </div>
              <div className="hero-image-accent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Who I Help Section */}
      <section className="section who-i-help">
        <div className="container">
          <div className="section-header">
            <div className="gold-line gold-line-center"></div>
            <h2>Who I Help</h2>
            <p>Straight talk from someone who&apos;s been in the trenches</p>
          </div>
          <div className="help-grid">
            <div className="card help-card">
              <div className="help-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3>Sales Reps Breaking In</h3>
              <p>New to merchant services? I&apos;ll help you understand the industry, avoid common mistakes, and build a foundation for success.</p>
            </div>
            <div className="card help-card">
              <div className="help-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="12" y1="20" x2="12" y2="10"></line>
                  <line x1="18" y1="20" x2="18" y2="4"></line>
                  <line x1="6" y1="20" x2="6" y2="16"></line>
                </svg>
              </div>
              <h3>ISOs Looking to Grow</h3>
              <p>Ready to scale your operation? Let&apos;s talk strategy, partnerships, and the moves that actually move the needle.</p>
            </div>
            <div className="card help-card">
              <div className="help-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                  <line x1="9" y1="9" x2="9.01" y2="9"></line>
                  <line x1="15" y1="9" x2="15.01" y2="9"></line>
                </svg>
              </div>
              <h3>Planning an Exit</h3>
              <p>Thinking about selling your portfolio or business? I can help you understand your options and maximize value.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section about-section">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <div className="gold-line"></div>
              <h2>About Herb</h2>
              <p>
                With decades of experience in the merchant services industry, I&apos;ve seen it all — the wins, the losses, and everything in between. I&apos;ve built relationships with processors, helped sales teams hit their numbers, and watched the industry evolve from imprinters to tap-to-pay.
              </p>
              <p>
                Now I&apos;m offering free advice to the next generation of payments professionals. No pitch, no agenda — just straight talk from someone who&apos;s been in the trenches.
              </p>
              <p>
                When I&apos;m not talking merchant services, you&apos;ll find me on the golf course working on my handicap or out on the water chasing fish. Life&apos;s about balance.
              </p>
              <div className="about-buttons">
                <Link href="/golf" className="btn btn-primary">Golf Adventures</Link>
                <Link href="/fishing" className="btn btn-secondary">Fishing Tales</Link>
              </div>
            </div>
            <div className="about-stats">
              <div className="stat-card">
                <span className="stat-number">30+</span>
                <span className="stat-label">Years in Payments</span>
              </div>
              <div className="stat-card">
                <span className="stat-number">Free</span>
                <span className="stat-label">Advice, Always</span>
              </div>
              <div className="stat-card">
                <span className="stat-number">100%</span>
                <span className="stat-label">Straight Talk</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact-section">
        <div className="container">
          <div className="section-header">
            <div className="gold-line gold-line-center"></div>
            <h2>Get In Touch</h2>
            <p>Have a question? Reach out — I&apos;m happy to help.</p>
          </div>
          <div className="contact-wrapper">
            <form className="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" required />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone (optional)</label>
                <input type="tel" id="phone" name="phone" />
              </div>
              <div className="form-group">
                <label htmlFor="message">How can I help?</label>
                <textarea id="message" name="message" rows="5" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary btn-full">Send Message</button>
            </form>
            <div className="contact-info">
              <div className="contact-card">
                <div className="contact-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <h4>Email</h4>
                <a href="mailto:hrdenmark@comcast.net">hrdenmark@comcast.net</a>
              </div>
              <div className="contact-card">
                <div className="contact-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <h4>Phone</h4>
                <a href="tel:610-721-2793">(610) 721-2793</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        /* Hero Styles */
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          background: linear-gradient(135deg, #1a472a 0%, #0f2a18 100%);
          position: relative;
          overflow: hidden;
          padding: 120px 0 80px;
        }

        .hero-bg-pattern {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: radial-gradient(rgba(201, 162, 39, 0.1) 1px, transparent 1px);
          background-size: 40px 40px;
          pointer-events: none;
        }

        .hero-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
          position: relative;
          z-index: 1;
        }

        .hero-tagline {
          color: #c9a227;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 3px;
          font-size: 0.9rem;
          margin-bottom: 16px;
        }

        .hero-title {
          font-size: 4.5rem;
          color: white;
          margin-bottom: 24px;
          line-height: 1.1;
        }

        .gold-text {
          background: linear-gradient(135deg, #c9a227 0%, #d4b94a 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-description {
          font-size: 1.25rem;
          color: rgba(255, 255, 255, 0.85);
          margin-bottom: 40px;
          line-height: 1.8;
        }

        .hero-buttons {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }

        .hero-image-wrapper {
          position: relative;
          display: flex;
          justify-content: center;
        }

        .hero-image-frame {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.4);
        }

        .hero-image {
          width: 100%;
          max-width: 400px;
          height: auto;
          display: block;
        }

        .hero-image-accent {
          position: absolute;
          top: -20px;
          right: -20px;
          width: 100%;
          height: 100%;
          border: 3px solid #c9a227;
          border-radius: 20px;
          z-index: -1;
        }

        /* Who I Help */
        .who-i-help {
          background: white;
        }

        .help-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }

        .help-card {
          text-align: center;
          padding: 50px 30px;
        }

        .help-icon {
          width: 80px;
          height: 80px;
          margin: 0 auto 24px;
          background: linear-gradient(135deg, #1a472a 0%, #2d5a3d 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .help-icon svg {
          width: 36px;
          height: 36px;
          stroke: #c9a227;
        }

        .help-card h3 {
          font-size: 1.5rem;
          color: #1a472a;
          margin-bottom: 16px;
        }

        .help-card p {
          color: #6b7280;
          line-height: 1.7;
        }

        /* About Section */
        .about-section {
          background: #f5f1e6;
        }

        .about-content {
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: 80px;
          align-items: center;
        }

        .about-text h2 {
          font-size: 3rem;
          color: #1a472a;
          margin-bottom: 24px;
        }

        .about-text p {
          font-size: 1.1rem;
          color: #4b5563;
          margin-bottom: 20px;
          line-height: 1.8;
        }

        .about-buttons {
          display: flex;
          gap: 16px;
          margin-top: 30px;
        }

        .about-stats {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .stat-card {
          background: white;
          padding: 30px;
          border-radius: 16px;
          text-align: center;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
          transition: transform 0.3s ease;
        }

        .stat-card:hover {
          transform: scale(1.05);
        }

        .stat-number {
          display: block;
          font-family: 'Playfair Display', serif;
          font-size: 3rem;
          font-weight: 700;
          color: #1a472a;
          margin-bottom: 8px;
        }

        .stat-label {
          color: #6b7280;
          font-weight: 500;
        }

        /* Contact Section */
        .contact-section {
          background: white;
        }

        .contact-wrapper {
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: 60px;
        }

        .contact-form {
          background: #f5f1e6;
          padding: 50px;
          border-radius: 20px;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .form-group {
          margin-bottom: 24px;
        }

        .form-group label {
          display: block;
          font-weight: 600;
          margin-bottom: 8px;
          color: #1a472a;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 16px 20px;
          border: 2px solid transparent;
          border-radius: 12px;
          font-size: 1rem;
          font-family: inherit;
          background: white;
          transition: all 0.3s ease;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #c9a227;
          box-shadow: 0 0 0 4px rgba(201, 162, 39, 0.1);
        }

        .btn-full {
          width: 100%;
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 24px;
          justify-content: center;
        }

        .contact-card {
          background: #f5f1e6;
          padding: 30px;
          border-radius: 16px;
          text-align: center;
        }

        .contact-icon {
          width: 60px;
          height: 60px;
          margin: 0 auto 16px;
          background: linear-gradient(135deg, #1a472a 0%, #2d5a3d 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .contact-icon svg {
          width: 28px;
          height: 28px;
          stroke: #c9a227;
        }

        .contact-card h4 {
          font-size: 1.1rem;
          color: #1a472a;
          margin-bottom: 8px;
        }

        .contact-card a {
          color: #4b5563;
          font-size: 1.1rem;
          transition: color 0.3s ease;
        }

        .contact-card a:hover {
          color: #c9a227;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .hero-content {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 50px;
          }

          .hero-title {
            font-size: 3.5rem;
          }

          .hero-buttons {
            justify-content: center;
          }

          .hero-image-wrapper {
            order: -1;
          }

          .hero-image {
            max-width: 320px;
          }

          .help-grid {
            grid-template-columns: 1fr;
            max-width: 500px;
            margin: 0 auto;
          }

          .about-content {
            grid-template-columns: 1fr;
            text-align: center;
          }

          .about-buttons {
            justify-content: center;
          }

          .about-stats {
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
          }

          .stat-card {
            flex: 1 1 200px;
          }

          .contact-wrapper {
            grid-template-columns: 1fr;
          }

          .contact-info {
            flex-direction: row;
          }

          .contact-card {
            flex: 1;
          }
        }

        @media (max-width: 600px) {
          .hero {
            padding: 100px 0 60px;
          }

          .hero-title {
            font-size: 2.5rem;
          }

          .hero-description {
            font-size: 1.1rem;
          }

          .form-row {
            grid-template-columns: 1fr;
          }

          .contact-form {
            padding: 30px 24px;
          }

          .contact-info {
            flex-direction: column;
          }

          .about-stats {
            flex-direction: column;
          }

          .stat-card {
            flex: 1 1 100%;
          }
        }
      `}</style>
    </>
  );
}
