export default function FishingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="page-hero navy">
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
              <div className="image-placeholder navy">
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
              <div className="image-placeholder navy">
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
    </>
  );
}
