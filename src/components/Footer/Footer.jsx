import { GiCupcake } from 'react-icons/gi';
import { FaInstagram, FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa';
import './Footer.css';

export default function Footer() {
  const handleNewsletter = (e) => {
    e.preventDefault();
    const input = e.target.querySelector('input');
    if (input.value) {
      input.value = '';
      // Toast would be triggered from parent — for now just reset
    }
  };

  return (
    <footer className="footer" id="footer">
      <div className="footer-grid">
        {/* Brand */}
        <div className="footer-brand">
          <div className="footer-logo">
            <GiCupcake /> Sweet Crumbs
          </div>
          <p>
            Handcrafted with love since 2018. We bring joy to every celebration
            with our premium artisan cakes and pastries.
          </p>
          <div className="footer-brand-socials">
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#" aria-label="Twitter"><FaTwitter /></a>
            <a href="#" aria-label="YouTube"><FaYoutube /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#cakes">Our Cakes</a></li>
            <li><a href="#custom-order">Custom Orders</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Working Hours */}
        <div className="footer-col">
          <h4>Working Hours</h4>
          <ul>
            <li><a href="#">Mon – Fri: 9AM – 9PM</a></li>
            <li><a href="#">Saturday: 9AM – 10PM</a></li>
            <li><a href="#">Sunday: 10AM – 8PM</a></li>
            <li><a href="#">Holidays: 10AM – 6PM</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="footer-col footer-newsletter">
          <h4>Newsletter</h4>
          <p>Subscribe to get the latest offers, new flavors, and sweet surprises straight to your inbox!</p>
          <form className="newsletter-form" onSubmit={handleNewsletter}>
            <input type="email" placeholder="your@email.com" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2024 Sweet Crumbs Bakery. All rights reserved.</p>
        <p>Made with 🤍 and a lot of sugar</p>
      </div>
    </footer>
  );
}
