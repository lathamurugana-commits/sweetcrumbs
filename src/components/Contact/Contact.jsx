import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiMapPin, FiPhone, FiMail, FiClock } from 'react-icons/fi';
import { FaInstagram, FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa';
import Swal from 'sweetalert2';
import './Contact.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      Swal.fire({ icon: 'warning', title: 'Oops!', text: 'Please fill in all fields.', confirmButtonColor: '#F2A7B3' });
      return;
    }
    Swal.fire({
      icon: 'success',
      title: 'Message Sent! 💌',
      text: 'We\'ll get back to you within 24 hours.',
      confirmButtonColor: '#F2A7B3',
      background: document.documentElement.getAttribute('data-theme') === 'dark' ? '#2A1F18' : '#FFF8F0',
      color: document.documentElement.getAttribute('data-theme') === 'dark' ? '#F5EBD9' : '#3E2513',
    });
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section className="contact section" id="contact" ref={ref}>
      <div className="container">
        <div className="section-header">
          <span className="section-label">Get in Touch</span>
          <h2 className="section-title">Contact Us</h2>
          <p className="section-subtitle">
            We'd love to hear from you! Reach out for orders, inquiries, or just to say hello.
          </p>
        </div>

        <div className="contact-grid">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="contact-details">
              <div className="contact-detail">
                <div className="contact-detail-icon"><FiMapPin /></div>
                <div className="contact-detail-text">
                  <h4>Visit Us</h4>
                  <p>42 Baker Street, Sweet Lane, Mumbai 400001</p>
                </div>
              </div>
              <div className="contact-detail">
                <div className="contact-detail-icon"><FiPhone /></div>
                <div className="contact-detail-text">
                  <h4>Call Us</h4>
                  <p>+91 98765 43210</p>
                </div>
              </div>
              <div className="contact-detail">
                <div className="contact-detail-icon"><FiMail /></div>
                <div className="contact-detail-text">
                  <h4>Email Us</h4>
                  <p>hello@sweetcrumbs.com</p>
                </div>
              </div>
              <div className="contact-detail">
                <div className="contact-detail-icon"><FiClock /></div>
                <div className="contact-detail-text">
                  <h4>Working Hours</h4>
                  <p>Mon – Sat: 9:00 AM – 9:00 PM</p>
                </div>
              </div>
            </div>

            <div className="contact-socials">
              <a href="#" className="social-icon" aria-label="Instagram"><FaInstagram /></a>
              <a href="#" className="social-icon" aria-label="Facebook"><FaFacebookF /></a>
              <a href="#" className="social-icon" aria-label="Twitter"><FaTwitter /></a>
              <a href="#" className="social-icon" aria-label="YouTube"><FaYoutube /></a>
            </div>
          </motion.div>

          <motion.div
            className="contact-right"
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="contact-map">
              <iframe
                title="Sweet Crumbs Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.8!2d72.8347!3d18.9398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDU2JzIzLjMiTiA3MsKwNTAnMDUuMCJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                allowFullScreen
                loading="lazy"
              />
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <h3>✉️ Send a Message</h3>
              <div className="form-group">
                <label htmlFor="contact-name">Name</label>
                <input id="contact-name" type="text" placeholder="Your name"
                  value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
              </div>
              <div className="form-group">
                <label htmlFor="contact-email">Email</label>
                <input id="contact-email" type="email" placeholder="your@email.com"
                  value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
              </div>
              <div className="form-group">
                <label htmlFor="contact-msg">Message</label>
                <textarea id="contact-msg" placeholder="Tell us how we can help…"
                  value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} />
              </div>
              <button type="submit" className="form-submit-btn">Send Message</button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
