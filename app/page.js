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
    </>
  );
}
