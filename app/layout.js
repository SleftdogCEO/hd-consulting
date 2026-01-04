import './globals.css';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

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
