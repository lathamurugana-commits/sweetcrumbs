import { useState, useEffect } from 'react';
import { FiSun, FiMoon, FiShoppingBag } from 'react-icons/fi';
import { GiCupcake } from 'react-icons/gi';
import './Navbar.css';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#cakes', label: 'Cakes' },
  { href: '#custom-order', label: 'Custom Orders' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar({ isDark, toggleTheme, cartCount }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Determine active section
      const sections = navLinks.map(l => l.href.substring(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection('#' + sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (href) => {
    setMenuOpen(false);
    setActiveSection(href);
  };

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`} id="navbar">
      <div className="navbar-inner">
        <a href="#home" className="navbar-logo" onClick={() => handleLinkClick('#home')}>
          <GiCupcake className="logo-icon" />
          Sweet Crumbs
        </a>

        <div className={`navbar-links${menuOpen ? ' open' : ''}`}>
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className={activeSection === link.href ? 'active' : ''}
              onClick={() => handleLinkClick(link.href)}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="navbar-actions">
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDark ? <FiSun /> : <FiMoon />}
          </button>

          <button className="cart-btn" aria-label="Shopping cart" title="Shopping cart">
            <FiShoppingBag />
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </button>

          <button
            className={`hamburger${menuOpen ? ' active' : ''}`}
            onClick={() => setMenuOpen(prev => !prev)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </div>
    </nav>
  );
}
