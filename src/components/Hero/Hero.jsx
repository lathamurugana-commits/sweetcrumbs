import { motion } from 'framer-motion';
import CountUpModule from 'react-countup';
import { useInView } from 'react-intersection-observer';
import './Hero.css';

// Handle CJS/ESM interop - some bundlers wrap default export in { default: fn }
const CountUp = CountUpModule.default || CountUpModule;

export default function Hero() {
  const { ref: statsRef, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section className="hero" id="home">
      {/* Animated background shapes */}
      <div className="hero-bg-shapes">
        <div className="hero-shape hero-shape-1" />
        <div className="hero-shape hero-shape-2" />
        <div className="hero-shape hero-shape-3" />
      </div>

      <div className="hero-inner">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <span className="hero-badge">🧁 Handcrafted with Love</span>

          <h1 className="hero-title">
            Where Every Slice is a{' '}
            <span className="highlight">Sweet Memory</span>
          </h1>

          <p className="hero-desc">
            Indulge in our artisan cakes crafted with the finest ingredients,
            baked fresh daily to bring joy to your special moments.
          </p>

          <div className="hero-buttons">
            <a href="#custom-order" className="btn btn-primary">
              🎂 Order Now
            </a>
            <a href="#cakes" className="btn btn-secondary">
              Explore Cakes
            </a>
          </div>

          <div className="hero-stats" ref={statsRef}>
            <div className="hero-stat">
              <div className="hero-stat-number">
                {inView ? <CountUp end={5000} duration={2.5} suffix="+" /> : '0'}
              </div>
              <div className="hero-stat-label">Happy Customers</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-number">
                {inView ? <CountUp end={120} duration={2} suffix="+" /> : '0'}
              </div>
              <div className="hero-stat-label">Cake Varieties</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-number">
                {inView ? <CountUp end={8} duration={1.5} /> : '0'}
              </div>
              <div className="hero-stat-label">Years of Joy</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        >
          <div className="hero-image-wrapper">
            <img
              src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&h=700&fit=crop&q=80"
              alt="Beautiful artisan cake with chocolate drizzle and fresh berries"
              loading="eager"
            />

            <motion.div
              className="hero-float-card card-1"
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
            >
              <span className="hero-float-icon">⭐</span>
              <div className="hero-float-text">
                <strong>4.9 Rating</strong>
                <span>2,000+ Reviews</span>
              </div>
            </motion.div>

            <motion.div
              className="hero-float-card card-2"
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 4, delay: 2, ease: 'easeInOut' }}
            >
              <span className="hero-float-icon">🚚</span>
              <div className="hero-float-text">
                <strong>Free Delivery</strong>
                <span>Orders above ₹1,500</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
