export const metadata = {
  title: 'Shop | Herb Denmark - HD Consulting',
  description: 'Herb Denmark\'s favorite Florida golf wear and outdoor apparel. Style meets comfort on the course.',
};

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
          <div className="tips-card">
            <div className="tips-content">
              <div className="gold-line"></div>
              <h2>Herb&apos;s Florida Golf Tips</h2>
              <div className="tips-grid">
                <div className="tip">
                  <span className="tip-number">01</span>
                  <h4>Light Colors Only</h4>
                  <p>Dark colors absorb heat. Stick to whites, light blues, and pastels.</p>
                </div>
                <div className="tip">
                  <span className="tip-number">02</span>
                  <h4>UPF Protection</h4>
                  <p>Look for UPF 50+ rated shirts. Your skin will thank you.</p>
                </div>
                <div className="tip">
                  <span className="tip-number">03</span>
                  <h4>Skip the Belt</h4>
                  <p>Get pants with stretch waistbands. More comfortable, less bulky.</p>
                </div>
                <div className="tip">
                  <span className="tip-number">04</span>
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

        /* Intro Section */
        .intro-section {
          background: white;
          padding: 80px 0;
        }

        .intro-content {
          max-width: 700px;
          margin: 0 auto;
          text-align: center;
        }

        .intro-content h2 {
          font-size: 2.5rem;
          color: #1a472a;
          margin-bottom: 24px;
        }

        .intro-content p {
          font-size: 1.15rem;
          color: #4b5563;
          line-height: 1.8;
          margin-bottom: 16px;
        }

        /* Products Section */
        .products-section {
          background: #f5f1e6;
        }

        .products-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }

        .product-card {
          background: white;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
          transition: all 0.4s ease;
          animation: fadeInUp 0.6s ease forwards;
          opacity: 0;
        }

        .product-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
        }

        .product-image {
          aspect-ratio: 4/3;
          background: linear-gradient(135deg, #1a472a 0%, #2d5a3d 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .product-image svg {
          width: 60px;
          height: 60px;
          stroke: rgba(255, 255, 255, 0.3);
        }

        .product-category {
          position: absolute;
          top: 16px;
          left: 16px;
          background: rgba(201, 162, 39, 0.9);
          color: #1a472a;
          padding: 6px 14px;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .product-details {
          padding: 30px;
        }

        .product-brand {
          color: #c9a227;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-size: 0.85rem;
          margin-bottom: 8px;
        }

        .product-name {
          font-size: 1.4rem;
          color: #1a472a;
          margin-bottom: 12px;
        }

        .product-description {
          color: #6b7280;
          line-height: 1.7;
          margin-bottom: 20px;
          font-size: 0.95rem;
        }

        .product-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #1a472a;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .product-link svg {
          width: 18px;
          height: 18px;
          transition: transform 0.3s ease;
        }

        .product-link:hover {
          color: #c9a227;
        }

        .product-link:hover svg {
          transform: translate(3px, -3px);
        }

        /* Tips Section */
        .tips-section {
          background: white;
        }

        .tips-card {
          background: linear-gradient(135deg, #1a472a 0%, #0f2a18 100%);
          border-radius: 30px;
          padding: 80px;
          color: white;
          position: relative;
          overflow: hidden;
        }

        .tips-card::before {
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

        .tips-content {
          position: relative;
          z-index: 1;
        }

        .tips-content h2 {
          font-size: 2.5rem;
          margin-bottom: 50px;
        }

        .tips-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 40px;
        }

        .tip {
          text-align: center;
        }

        .tip-number {
          display: block;
          font-family: 'Playfair Display', serif;
          font-size: 2.5rem;
          color: #c9a227;
          margin-bottom: 16px;
        }

        .tip h4 {
          font-size: 1.1rem;
          margin-bottom: 10px;
        }

        .tip p {
          font-size: 0.95rem;
          opacity: 0.8;
          line-height: 1.6;
        }

        /* Disclaimer */
        .disclaimer-section {
          background: #f5f1e6;
          padding: 40px 0;
        }

        .disclaimer {
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
          color: #6b7280;
          font-size: 0.9rem;
          line-height: 1.7;
        }

        .disclaimer strong {
          color: #4b5563;
        }

        /* Animations */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .products-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .tips-card {
            padding: 50px 30px;
          }

          .tips-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 30px;
          }
        }

        @media (max-width: 600px) {
          .hero-title {
            font-size: 2.5rem;
          }

          .products-grid {
            grid-template-columns: 1fr;
            max-width: 400px;
            margin: 0 auto;
          }

          .tips-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}
