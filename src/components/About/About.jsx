import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './About.css';

const highlights = [
  { icon: '🌿', title: 'Fresh Ingredients', desc: '100% natural, locally sourced' },
  { icon: '👨‍🍳', title: 'Expert Bakers', desc: '15+ years of experience' },
  { icon: '🎨', title: 'Custom Designs', desc: 'Your imagination, our creation' },
  { icon: '🚚', title: 'Fast Delivery', desc: 'Same-day available' },
];

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="about section" id="about" ref={ref}>
      <div className="container">
        <div className="about-grid">
          <motion.div
            className="about-image-wrapper"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <img
              src="/indian-baker.png"
              alt="Pretty Indian baker in her baking dress"
              loading="lazy"
            />
            <div className="about-image-accent" />
          </motion.div>

          <motion.div
            className="about-content"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="section-label">Our Story</span>
            <h2 className="section-title">
              Baking Love Since 2018
            </h2>
            <p className="about-text">
              At Sweet Crumbs, every cake tells a story. What started as a small home bakery
              driven by passion has blossomed into a beloved destination for cake lovers.
              We believe that the secret ingredient to every great cake is love — and a generous
              pour of Belgian chocolate.
            </p>
            <p className="about-text">
              Our master bakers meticulously craft each creation using time-honored recipes and
              the finest ingredients, ensuring every bite is a moment of pure indulgence.
            </p>

            <div className="about-highlights">
              {highlights.map((h, i) => (
                <motion.div
                  key={i}
                  className="about-highlight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                >
                  <span className="about-highlight-icon">{h.icon}</span>
                  <div>
                    <h4>{h.title}</h4>
                    <p>{h.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
