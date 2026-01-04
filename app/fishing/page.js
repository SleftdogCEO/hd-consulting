export const metadata = {
  title: 'Fishing | Herb Denmark - HD Consulting',
  description: 'Join Herb Denmark on his fishing adventures. Tales from the water, favorite catches, and tips for fellow anglers.',
};

export default function FishingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="page-hero">
        <div className="hero-bg-pattern"></div>
        <div className="container">
          <div className="hero-content">
            <p className="hero-tagline animate-fade-up">Tales from the Water</p>
            <h1 className="hero-title animate-fade-up delay-100">
              Fishing <span className="gold-text">Adventures</span>
            </h1>
            <p className="hero-description animate-fade-up delay-200">
              There&apos;s nothing quite like the peace of being on the water, waiting for that next big catch.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section story-section">
        <div className="container">
          <div className="story-grid">
            <div className="story-image">
              <div className="image-placeholder fishing-image">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
                </svg>
                <span>On the Water</span>
              </div>
            </div>
            <div className="story-content">
              <div className="gold-line"></div>
              <h2>Why I Fish</h2>
              <p>
                Fishing is my meditation. After decades in the fast-paced world of merchant services, there&apos;s something deeply satisfying about slowing down, casting a line, and letting the world drift away.
              </p>
              <p>
                Whether I&apos;m out on the boat chasing offshore species or wading the flats for redfish, it&apos;s all about the experience. The early morning quiet. The anticipation of a strike. The stories you share with the people you fish with.
              </p>
              <p>
                Sure, it&apos;s nice to land a big one. But honestly? Some of my best days on the water didn&apos;t involve catching much at all. It&apos;s about being out there.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Catches */}
      <section className="section catches-section">
        <div className="container">
          <div className="section-header">
            <div className="gold-line gold-line-center"></div>
            <h2>Notable Catches</h2>
            <p>A few fish stories worth sharing</p>
          </div>
          <div className="catches-grid">
            <div className="catch-card">
              <div className="catch-image">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                  <path d="M2 17l10 5 10-5"></path>
                  <path d="M2 12l10 5 10-5"></path>
                </svg>
              </div>
              <div className="catch-details">
                <h3>The One That Didn&apos;t Get Away</h3>
                <p className="catch-species">Redfish</p>
                <p className="catch-story">
                  Caught on the flats in early morning light. Fought like a champion for a good ten minutes. One of those catches you remember forever.
                </p>
              </div>
            </div>
            <div className="catch-card">
              <div className="catch-image">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                  <path d="M2 17l10 5 10-5"></path>
                  <path d="M2 12l10 5 10-5"></path>
                </svg>
              </div>
              <div className="catch-details">
                <h3>Offshore Adventure</h3>
                <p className="catch-species">Mahi-Mahi</p>
                <p className="catch-story">
                  A day trip that turned into an all-day adventure. Found a floating weed line and the action never stopped. Brought home plenty for the neighborhood.
                </p>
              </div>
            </div>
            <div className="catch-card">
              <div className="catch-image">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                  <path d="M2 17l10 5 10-5"></path>
                  <path d="M2 12l10 5 10-5"></path>
                </svg>
              </div>
              <div className="catch-details">
                <h3>The Surprise Catch</h3>
                <p className="catch-species">Snook</p>
                <p className="catch-story">
                  Wasn&apos;t even targeting them that day. Cast near a dock and got the hit of my life. Sometimes the best catches are the unexpected ones.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="section tips-section">
        <div className="container">
          <div className="tips-content">
            <div className="tips-text">
              <div className="gold-line"></div>
              <h2>Fishing Wisdom</h2>
              <div className="wisdom-list">
                <div className="wisdom-item">
                  <span className="wisdom-icon">🌅</span>
                  <div>
                    <h4>Early Bird Gets the Fish</h4>
                    <p>The best action is usually at dawn. Yes, it means early alarms, but trust me — it&apos;s worth it.</p>
                  </div>
                </div>
                <div className="wisdom-item">
                  <span className="wisdom-icon">🎣</span>
                  <div>
                    <h4>Match the Hatch</h4>
                    <p>Pay attention to what the fish are eating. Your lure or bait should mimic the local forage.</p>
                  </div>
                </div>
                <div className="wisdom-item">
                  <span className="wisdom-icon">🌊</span>
                  <div>
                    <h4>Read the Water</h4>
                    <p>Tides, currents, structure — learn to read the water and you&apos;ll find the fish.</p>
                  </div>
                </div>
                <div className="wisdom-item">
                  <span className="wisdom-icon">🤝</span>
                  <div>
                    <h4>Fish With Good People</h4>
                    <p>The company you keep matters more than the catch. Good fishing buddies make every trip memorable.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="tips-image">
              <div className="image-placeholder">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M2 12h20"></path>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
                <span>Florida Waters</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-card">
            <h2>Want to Talk Fishing?</h2>
            <p>
              Always happy to swap stories, share spots (well, maybe not my best ones), or just talk about what&apos;s biting. Drop me a line.
            </p>
            <a href="mailto:hrdenmark@comcast.net" className="btn btn-primary">
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      <style jsx>{`
        .page-hero {
          min-height: 60vh;
          display: flex;
          align-items: center;
          background: linear-gradient(135deg, #1e3a5f 0%, #0f2640 100%);
          position: relative;
          overflow: hidden;
          padding: 140px 0 80px;
          text-align: center;
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
          position: relative;
          z-index: 1;
          max-width: 700px;
          margin: 0 auto;
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
          font-size: 4rem;
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
          font-size: 1.4rem;
          color: rgba(255, 255, 255, 0.85);
          line-height: 1.8;
        }

        /* Story Section */
        .story-section {
          background: white;
        }

        .story-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 80px;
          align-items: center;
        }

        .story-content h2 {
          font-size: 2.5rem;
          color: #1e3a5f;
          margin-bottom: 24px;
        }

        .story-content p {
          font-size: 1.1rem;
          color: #4b5563;
          margin-bottom: 20px;
          line-height: 1.8;
        }

        .image-placeholder {
          aspect-ratio: 4/3;
          background: linear-gradient(135deg, #1e3a5f 0%, #2d5a8a 100%);
          border-radius: 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: white;
          gap: 16px;
        }

        .image-placeholder svg {
          width: 80px;
          height: 80px;
          stroke: #c9a227;
        }

        .image-placeholder span {
          font-size: 1.2rem;
          opacity: 0.8;
        }

        /* Catches Section */
        .catches-section {
          background: #f5f1e6;
        }

        .catches-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }

        .catch-card {
          background: white;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
          transition: all 0.4s ease;
        }

        .catch-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.12);
        }

        .catch-image {
          aspect-ratio: 16/10;
          background: linear-gradient(135deg, #1e3a5f 0%, #2d5a8a 100%);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .catch-image svg {
          width: 60px;
          height: 60px;
          stroke: #c9a227;
        }

        .catch-details {
          padding: 30px;
        }

        .catch-details h3 {
          font-size: 1.3rem;
          color: #1e3a5f;
          margin-bottom: 8px;
        }

        .catch-species {
          color: #c9a227;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-size: 0.85rem;
          margin-bottom: 12px;
        }

        .catch-story {
          color: #6b7280;
          line-height: 1.7;
        }

        /* Tips Section */
        .tips-section {
          background: white;
        }

        .tips-content {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 80px;
          align-items: center;
        }

        .tips-text h2 {
          font-size: 2.5rem;
          color: #1e3a5f;
          margin-bottom: 40px;
        }

        .wisdom-list {
          display: flex;
          flex-direction: column;
          gap: 30px;
        }

        .wisdom-item {
          display: flex;
          gap: 20px;
          align-items: flex-start;
        }

        .wisdom-icon {
          font-size: 2rem;
          flex-shrink: 0;
        }

        .wisdom-item h4 {
          font-size: 1.2rem;
          color: #1e3a5f;
          margin-bottom: 8px;
        }

        .wisdom-item p {
          color: #6b7280;
          line-height: 1.7;
        }

        /* CTA Section */
        .cta-section {
          background: #f5f1e6;
          padding: 60px 0;
        }

        .cta-card {
          background: linear-gradient(135deg, #1e3a5f 0%, #0f2640 100%);
          border-radius: 30px;
          padding: 60px;
          text-align: center;
          color: white;
        }

        .cta-card h2 {
          font-size: 2.5rem;
          margin-bottom: 16px;
        }

        .cta-card p {
          font-size: 1.2rem;
          opacity: 0.9;
          margin-bottom: 30px;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .story-grid {
            grid-template-columns: 1fr;
            gap: 50px;
          }

          .catches-grid {
            grid-template-columns: 1fr;
            max-width: 500px;
            margin: 0 auto;
          }

          .tips-content {
            grid-template-columns: 1fr;
            gap: 50px;
          }

          .tips-image {
            order: -1;
          }
        }

        @media (max-width: 600px) {
          .hero-title {
            font-size: 2.5rem;
          }

          .cta-card {
            padding: 40px 24px;
          }
        }
      `}</style>
    </>
  );
}
