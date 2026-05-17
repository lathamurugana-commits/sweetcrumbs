import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './SpecialOffers.css';

// Countdown target: 7 days from now
function getTargetDate() {
  const target = new Date();
  target.setDate(target.getDate() + 7);
  target.setHours(23, 59, 59, 0);
  return target;
}

const TARGET_DATE = getTargetDate();

function calcTimeLeft() {
  const diff = TARGET_DATE - new Date();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

const festiveOffers = [
  { icon: '🎂', title: 'Birthday Bash Bundle', desc: 'Cake + 12 cupcakes + candles', price: '₹59.99' },
  { icon: '🌸', title: 'Spring Floral Collection', desc: '3 floral-themed designer cakes', price: '₹129.99' },
  { icon: '🍫', title: 'Choco Lovers Box', desc: '6 assorted chocolate treats', price: '₹34.99' },
];

export default function SpecialOffers() {
  const [timeLeft, setTimeLeft] = useState(calcTimeLeft);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(calcTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="offers section" id="offers" ref={ref}>
      <div className="offers-bg-pattern" />
      <div className="container">
        <div className="section-header">
          <span className="section-label">Limited Time</span>
          <h2 className="section-title">Special Offers</h2>
          <p className="section-subtitle">
            Don't miss out on our exclusive deals — perfect for every celebration
          </p>
        </div>

        <div className="offers-grid">
          <motion.div
            className="offers-content"
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="offers-discount">25% OFF</div>
            <h3 className="offers-title">Summer Sweet Festival</h3>
            <p className="offers-desc">
              Celebrate the season of joy with our handcrafted festive cakes.
              Use code <strong>SWEET25</strong> at checkout.
            </p>

            <div className="countdown">
              {Object.entries(timeLeft).map(([label, value]) => (
                <div className="countdown-item" key={label}>
                  <span className="countdown-number">
                    {String(value).padStart(2, '0')}
                  </span>
                  <span className="countdown-label">{label}</span>
                </div>
              ))}
            </div>

            <a href="#custom-order" className="btn btn-primary" style={{ marginTop: '0.5rem', width: 'fit-content' }}>
              🎉 Grab the Deal
            </a>
          </motion.div>

          <motion.div
            className="offers-visual"
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {festiveOffers.map((offer, i) => (
              <motion.div
                key={i}
                className="offer-card"
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
              >
                <span className="offer-card-icon">{offer.icon}</span>
                <div>
                  <h4>{offer.title}</h4>
                  <p>{offer.desc}</p>
                  <span className="offer-price">{offer.price}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
