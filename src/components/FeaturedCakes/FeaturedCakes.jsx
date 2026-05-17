import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiShoppingCart, FiSearch, FiStar } from 'react-icons/fi';
import cakes, { categories } from '../../data/cakes';
import './FeaturedCakes.css';

// Unsplash cake images for each cake
const cakeImages = [
  'https://images.unsplash.com/photo-1558636508-e0db3814bd1d?w=400&h=300&fit=crop&q=80',
  'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop&q=80',
  'https://images.unsplash.com/photo-1562440499-64c9a111f713?w=400&h=300&fit=crop&q=80',
  'https://images.unsplash.com/photo-1587668178277-295251f900ce?w=400&h=300&fit=crop&q=80',
  'https://images.unsplash.com/photo-1535254973040-607b474cb50d?w=400&h=300&fit=crop&q=80',
  'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&h=300&fit=crop&q=80', // 6
  '/cakes/chocolate-lava.png', // 7 (Chocolate Lava)
  'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=400&h=300&fit=crop&q=80', // 8
  'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=400&h=300&fit=crop&q=80',
  'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=400&h=300&fit=crop&q=80',
  'https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=400&h=300&fit=crop&q=80',
  'https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?w=400&h=300&fit=crop&q=80',
];

export default function FeaturedCakes({ onAddToCart }) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCakes = useMemo(() => {
    return cakes.filter(cake => {
      const matchesFilter = activeFilter === 'all' || cake.category === activeFilter;
      const matchesSearch =
        cake.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cake.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, searchQuery]);

  return (
    <section className="cakes section" id="cakes">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Our Specialties</span>
          <h2 className="section-title">Featured Cakes</h2>
          <p className="section-subtitle">
            Discover our most-loved creations, baked fresh daily with premium ingredients
          </p>
        </div>

        {/* Filters & Search */}
        <div className="cakes-controls">
          <div className="cakes-search-wrapper">
            <input
              type="text"
              className="cakes-search"
              placeholder="🔍 Search cakes..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="filter-tabs">
            {categories.map(cat => (
              <button
                key={cat.id}
                className={`filter-tab${activeFilter === cat.id ? ' active' : ''}`}
                onClick={() => setActiveFilter(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Cakes Grid */}
        <div className="cakes-grid">
          <AnimatePresence mode="popLayout">
            {filteredCakes.length > 0 ? (
              filteredCakes.map((cake, index) => (
                <motion.div
                  key={cake.id}
                  className="cake-card"
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.35, delay: index * 0.05 }}
                >
                  <div className="cake-card-image">
                    <img
                      src={cakeImages[cake.id - 1] || cakeImages[0]}
                      alt={cake.name}
                      loading="lazy"
                    />
                    {cake.badge && <span className="cake-badge">{cake.badge}</span>}
                  </div>
                  <div className="cake-card-body">
                    <h3 className="cake-card-title">{cake.name}</h3>
                    <p className="cake-card-desc">{cake.description}</p>
                    <div className="cake-card-meta">
                      <span className="cake-price">₹{cake.price.toFixed(2)}</span>
                      <span className="cake-rating">
                        <FiStar /> {cake.rating}
                      </span>
                    </div>
                  </div>
                  <div className="cake-card-footer">
                    <button
                      className="cake-add-btn"
                      onClick={() => onAddToCart(cake)}
                    >
                      <FiShoppingCart /> Add to Cart
                    </button>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="no-results">
                No cakes found matching your search. Try a different filter!
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
