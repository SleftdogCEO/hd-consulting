'use client';

export default function GolfPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="page-hero">
        <div className="hero-bg-pattern"></div>
        <div className="container">
          <div className="hero-content">
            <p className="hero-tagline animate-fade-up">Life on the Fairway</p>
            <h1 className="hero-title animate-fade-up delay-100">
              Golf in Your <span className="gold-text">60s</span>
            </h1>
            <p className="hero-description animate-fade-up delay-200">
              They say golf is a game you can pick up at any age. I decided to test that theory.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section story-section">
        <div className="container">
          <div className="story-grid">
            <div className="story-content">
              <div className="gold-line"></div>
              <h2>My Golf Journey</h2>
              <p>
                I picked up my first set of clubs in my 60s. While most guys my age have been perfecting their swing for decades, I was just learning which end of the club to hold.
              </p>
              <p>
                But here&apos;s what I&apos;ve learned: golf isn&apos;t about where you start — it&apos;s about enjoying the journey. Sure, my handicap is high. Real high. But every round is a chance to improve, enjoy the outdoors, and spend time with good people.
              </p>
              <p>
                There&apos;s something humbling about being a beginner again at this stage of life. It keeps you young, keeps you learning, and keeps you laughing at yourself.
              </p>
            </div>
            <div className="story-image">
              <div className="image-placeholder golf-image">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <circle cx="12" cy="5" r="2"></circle>
                  <path d="M12 7v10"></path>
                  <path d="M9 21h6"></path>
                  <path d="M12 7l6-2"></path>
                </svg>
                <span>On the Course</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="section tips-section">
        <div className="container">
          <div className="section-header">
            <div className="gold-line gold-line-center"></div>
            <h2>Advice for Late Starters</h2>
            <p>What I wish someone told me when I started</p>
          </div>
          <div className="tips-grid">
            <div className="tip-card">
              <div className="tip-number">01</div>
              <h3>Take Lessons Early</h3>
              <p>Don&apos;t try to figure it out yourself. Bad habits are harder to break than they are to prevent. Invest in a few lessons upfront.</p>
            </div>
            <div className="tip-card">
              <div className="tip-number">02</div>
              <h3>Embrace the Handicap</h3>
              <p>Your handicap is just a number. It doesn&apos;t define your enjoyment of the game. Some of my best rounds have been my worst scores.</p>
            </div>
            <div className="tip-card">
              <div className="tip-number">03</div>
              <h3>Play Forward Tees</h3>
              <p>Ego aside — play the tees that let you enjoy the course. There&apos;s no trophy for struggling from the back tees.</p>
            </div>
            <div className="tip-card">
              <div className="tip-number">04</div>
              <h3>Focus on the Short Game</h3>
              <p>You&apos;ll save more strokes around the green than you ever will off the tee. Putting and chipping are your friends.</p>
            </div>
            <div className="tip-card">
              <div className="tip-number">05</div>
              <h3>Golf is Social</h3>
              <p>The best part of golf is the people you play with. Don&apos;t get so focused on your game that you forget to enjoy the company.</p>
            </div>
            <div className="tip-card">
              <div className="tip-number">06</div>
              <h3>Dress the Part</h3>
              <p>Looking good makes you feel good. Check out my favorite Florida golf gear in the shop — comfort meets style.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Handicap Section */}
      <section className="section handicap-section">
        <div className="container">
          <div className="handicap-card">
            <div className="handicap-content">
              <h2>The High Handicap Life</h2>
              <p>
                Let me be honest: I&apos;m not breaking any course records. My handicap hovers in the &quot;let&apos;s not talk about it&quot; range. But you know what? I&apos;m out there, I&apos;m improving (slowly), and I&apos;m having a blast.
              </p>
              <p>
                Golf taught me that mastery isn&apos;t the point — the process is. Every shanked drive is a lesson. Every three-putt is a chance to do better next hole. And every great shot reminds you why you fell in love with this crazy game.
              </p>
              <div className="handicap-stats">
                <div className="stat">
                  <span className="stat-value">High</span>
                  <span className="stat-label">Handicap</span>
                </div>
                <div className="stat">
                  <span className="stat-value">Higher</span>
                  <span className="stat-label">Spirits</span>
                </div>
                <div className="stat">
                  <span className="stat-value">Highest</span>
                  <span className="stat-label">Enjoyment</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .page-hero {
          min-height: 60vh;
          display: flex;
          align-items: center;
          background: linear-gradient(135deg, #1a472a 0%, #0f2a18 100%);
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
          grid-template-columns: 1.2fr 1fr;
          gap: 80px;
          align-items: center;
        }

        .story-content h2 {
          font-size: 2.5rem;
          color: #1a472a;
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
          background: linear-gradient(135deg, #1a472a 0%, #2d5a3d 100%);
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

        /* Tips Section */
        .tips-section {
          background: #f5f1e6;
        }

        .tips-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }

        .tip-card {
          background: white;
          padding: 40px 30px;
          border-radius: 20px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
          transition: all 0.4s ease;
        }

        .tip-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.12);
        }

        .tip-number {
          font-family: 'Playfair Display', serif;
          font-size: 3rem;
          font-weight: 700;
          background: linear-gradient(135deg, #c9a227 0%, #d4b94a 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 16px;
        }

        .tip-card h3 {
          font-size: 1.3rem;
          color: #1a472a;
          margin-bottom: 12px;
        }

        .tip-card p {
          color: #6b7280;
          line-height: 1.7;
        }

        /* Handicap Section */
        .handicap-section {
          background: white;
        }

        .handicap-card {
          background: linear-gradient(135deg, #1a472a 0%, #0f2a18 100%);
          border-radius: 30px;
          padding: 80px;
          color: white;
          position: relative;
          overflow: hidden;
        }

        .handicap-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: radial-gradient(rgba(201, 162, 39, 0.1) 1px, transparent 1px);
          background-size: 30px 30px;
          pointer-events: none;
        }

        .handicap-content {
          position: relative;
          z-index: 1;
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
        }

        .handicap-content h2 {
          font-size: 2.5rem;
          margin-bottom: 24px;
        }

        .handicap-content p {
          font-size: 1.2rem;
          line-height: 1.8;
          opacity: 0.9;
          margin-bottom: 20px;
        }

        .handicap-stats {
          display: flex;
          justify-content: center;
          gap: 60px;
          margin-top: 50px;
        }

        .stat {
          text-align: center;
        }

        .stat-value {
          display: block;
          font-family: 'Playfair Display', serif;
          font-size: 2rem;
          color: #c9a227;
          margin-bottom: 8px;
        }

        .stat-label {
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 2px;
          opacity: 0.7;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .story-grid {
            grid-template-columns: 1fr;
            gap: 50px;
          }

          .story-image {
            order: -1;
          }

          .tips-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .handicap-card {
            padding: 50px 30px;
          }

          .handicap-stats {
            gap: 30px;
          }
        }

        @media (max-width: 600px) {
          .hero-title {
            font-size: 2.5rem;
          }

          .tips-grid {
            grid-template-columns: 1fr;
          }

          .handicap-stats {
            flex-direction: column;
            gap: 20px;
          }
        }
      `}</style>
    </>
  );
}
