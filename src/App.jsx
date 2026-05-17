import { useState, useEffect } from 'react';
import ReactConfetti from 'react-confetti';

import useTheme from './hooks/useTheme';
import useCart from './hooks/useCart';
import useToast from './hooks/useToast';

import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import FeaturedCakes from './components/FeaturedCakes/FeaturedCakes';
import SpecialOffers from './components/SpecialOffers/SpecialOffers';
import CustomOrder from './components/CustomOrder/CustomOrder';
import Testimonials from './components/Testimonials/Testimonials';
import Gallery from './components/Gallery/Gallery';
import FAQ from './components/FAQ/FAQ';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton';

import './styles/index.css';

export default function App() {
  const { isDark, toggleTheme } = useTheme();
  const { addItem, totalItems } = useCart();
  const { toasts, addToast } = useToast();
  const [showConfetti, setShowConfetti] = useState(false);
  const [loading, setLoading] = useState(true);

  // Page loader — shows for 1.8s on initial load
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  // Add to cart handler with toast notification
  const handleAddToCart = (cake) => {
    addItem(cake);
    addToast(`${cake.name} added to cart! 🛒`, 'success');
  };

  // Confetti animation after successful custom order
  const handleOrderSuccess = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 5000);
  };

  return (
    <>
      {/* Page Loader */}
      {loading && (
        <div className="page-loader">
          <div className="loader-spinner" />
          <span className="loader-text">Sweet Crumbs</span>
        </div>
      )}

      {/* Confetti on successful order */}
      {showConfetti && (
        <ReactConfetti
          width={window.innerWidth}
          height={window.innerHeight}
          recycle={false}
          numberOfPieces={300}
          colors={['#F2A7B3', '#FCCBB0', '#D4A855', '#FFF8F0', '#D4818E']}
        />
      )}

      {/* Toast Notifications */}
      <div className="toast-container">
        {toasts.map(t => (
          <div key={t.id} className={`toast ${t.type}${t.exit ? ' exit' : ''}`}>
            {t.message}
          </div>
        ))}
      </div>

      {/* Main Layout */}
      <Navbar isDark={isDark} toggleTheme={toggleTheme} cartCount={totalItems} />
      <main>
        <Hero />
        <About />
        <FeaturedCakes onAddToCart={handleAddToCart} />
        <SpecialOffers />
        <CustomOrder onOrderSuccess={handleOrderSuccess} />
        <Testimonials />
        <Gallery />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
