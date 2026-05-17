import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Gallery.css';

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=400&h=500&fit=crop&q=80', alt: 'Wedding cake with flowers', height: 'tall' },
  { src: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop&q=80', alt: 'Chocolate cake', height: 'short' },
  { src: 'https://images.unsplash.com/photo-1587668178277-295251f900ce?w=400&h=450&fit=crop&q=80', alt: 'Cupcakes display', height: 'tall' },
  { src: 'https://images.unsplash.com/photo-1558636508-e0db3814bd1d?w=400&h=320&fit=crop&q=80', alt: 'Birthday cake', height: 'short' },
  { src: 'https://images.unsplash.com/photo-1535254973040-607b474cb50d?w=400&h=480&fit=crop&q=80', alt: 'Designer cake', height: 'tall' },
  { src: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&h=300&fit=crop&q=80', alt: 'Cheesecake', height: 'short' },
  { src: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=400&h=400&fit=crop&q=80', alt: 'Pink cupcakes', height: 'medium' },
  { src: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=400&h=350&fit=crop&q=80', alt: 'Pastel macarons', height: 'short' },
];

export default function Gallery() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="gallery section" id="gallery" ref={ref}>
      <div className="container">
        <div className="section-header">
          <span className="section-label">Our Creations</span>
          <h2 className="section-title">Sweet Gallery</h2>
          <p className="section-subtitle">
            A visual feast of our most stunning cake designs
          </p>
        </div>

        <div className="gallery-grid">
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              className="gallery-item"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <img src={img.src} alt={img.alt} loading="lazy" />
              <div className="gallery-overlay">
                <span>{img.alt}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
