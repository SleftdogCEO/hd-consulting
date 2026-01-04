import './globals.css';
import Navigation from '../components/Navigation';

export const metadata = {
  title: 'HD Consulting | Herb Denmark',
  description: 'Merchant services advisor, golf enthusiast, and fishing aficionado. Free advice from decades of industry experience.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

function Footer() {
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

      <style jsx>{`
        .footer {
          background: linear-gradient(135deg, #1a472a 0%, #0f2a18 100%);
          color: white;
          padding: 60px 0 30px;
        }

        .footer-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
          text-align: center;
        }

        .footer-brand {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .footer-logo {
          font-family: 'Playfair Display', serif;
          font-size: 2rem;
          font-weight: 700;
          background: linear-gradient(135deg, #c9a227 0%, #d4b94a 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .footer-text {
          font-size: 1.2rem;
          font-weight: 600;
          letter-spacing: 1px;
        }

        .footer-links {
          display: flex;
          gap: 16px;
          align-items: center;
        }

        .footer-links a {
          color: rgba(255, 255, 255, 0.8);
          transition: color 0.3s ease;
        }

        .footer-links a:hover {
          color: #c9a227;
        }

        .divider {
          color: rgba(255, 255, 255, 0.3);
        }

        .footer-copy {
          color: rgba(255, 255, 255, 0.5);
          font-size: 0.9rem;
          margin-top: 20px;
        }

        @media (max-width: 600px) {
          .footer-links {
            flex-direction: column;
            gap: 10px;
          }

          .divider {
            display: none;
          }
        }
      `}</style>
    </footer>
  );
}
