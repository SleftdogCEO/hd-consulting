export default function ShopPage() {
  const products = [
    {
      id: 1,
      name: 'Performance Polo',
      brand: 'Tommy Bahama',
      description: 'Moisture-wicking fabric that keeps you cool on the hottest Florida days. My go-to for summer rounds.',
      category: 'Shirts',
      link: '#',
    },
    {
      id: 2,
      name: 'Lightweight Golf Shorts',
      brand: 'TravisMathew',
      description: 'Stretchy, breathable, and they actually have deep pockets. Comfort meets function.',
      category: 'Bottoms',
      link: '#',
    },
    {
      id: 3,
      name: 'Wide Brim Golf Hat',
      brand: 'Tilley',
      description: 'Sun protection is no joke in Florida. This hat has saved my scalp more times than I can count.',
      category: 'Accessories',
      link: '#',
    },
    {
      id: 4,
      name: 'Golf Sunglasses',
      brand: 'Maui Jim',
      description: 'Polarized lenses that help you read the greens. Worth every penny for the clarity.',
      category: 'Accessories',
      link: '#',
    },
    {
      id: 5,
      name: 'Spikeless Golf Shoes',
      brand: 'FootJoy',
      description: 'Comfortable enough to wear all day, grippy enough for any lie. Spikeless is the way to go.',
      category: 'Footwear',
      link: '#',
    },
    {
      id: 6,
      name: 'Tropical Print Polo',
      brand: 'Chubbies',
      description: 'Sometimes you gotta have a little fun with it. These prints always get compliments.',
      category: 'Shirts',
      link: '#',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="page-hero">
        <div className="hero-bg-pattern"></div>
        <div className="container">
          <div className="hero-content">
            <p className="hero-tagline animate-fade-up">Herb&apos;s Favorites</p>
            <h1 className="hero-title animate-fade-up delay-100">
              Florida <span className="gold-text">Golf Gear</span>
            </h1>
            <p className="hero-description animate-fade-up delay-200">
              My tried-and-true picks for staying cool, comfortable, and looking good on the course.
            </p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="section intro-section">
        <div className="container">
          <div className="intro-content">
            <div className="gold-line gold-line-center"></div>
            <h2>Why Gear Matters</h2>
            <p>
              After a few summers golfing in Florida, I learned that what you wear can make or break your round. The wrong shirt and you&apos;re drenched by the 3rd hole. The wrong shoes and your feet are screaming by 18.
            </p>
            <p>
              These are the pieces I actually wear — not sponsors, not paid promotions, just gear that works. Click through to see them at my favorite retailers.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section products-section">
        <div className="container">
          <div className="products-grid">
            {products.map((product, index) => (
              <div key={product.id} className="product-card" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="product-image">
                  <div className="product-category">{product.category}</div>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <circle cx="8.5" cy="8.5" r="1.5"></circle>
                    <polyline points="21 15 16 10 5 21"></polyline>
                  </svg>
                </div>
                <div className="product-details">
                  <p className="product-brand">{product.brand}</p>
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-description">{product.description}</p>
                  <a href={product.link} className="product-link" target="_blank" rel="noopener noreferrer">
                    View Product
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="section tips-section">
        <div className="container">
          <div className="shop-tips-card">
            <div className="shop-tips-content">
              <div className="gold-line"></div>
              <h2>Herb&apos;s Florida Golf Tips</h2>
              <div className="shop-tips-grid">
                <div className="shop-tip">
                  <span className="shop-tip-number">01</span>
                  <h4>Light Colors Only</h4>
                  <p>Dark colors absorb heat. Stick to whites, light blues, and pastels.</p>
                </div>
                <div className="shop-tip">
                  <span className="shop-tip-number">02</span>
                  <h4>UPF Protection</h4>
                  <p>Look for UPF 50+ rated shirts. Your skin will thank you.</p>
                </div>
                <div className="shop-tip">
                  <span className="shop-tip-number">03</span>
                  <h4>Skip the Belt</h4>
                  <p>Get pants with stretch waistbands. More comfortable, less bulky.</p>
                </div>
                <div className="shop-tip">
                  <span className="shop-tip-number">04</span>
                  <h4>Extra Gloves</h4>
                  <p>Sweaty hands ruin grips. Bring 2-3 gloves and rotate them.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="section disclaimer-section">
        <div className="container">
          <div className="disclaimer">
            <p>
              <strong>Note:</strong> These are personal recommendations based on my own experience.
              I don&apos;t receive any commission or compensation for these suggestions — just sharing what works for me.
              Product availability and pricing may vary.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
