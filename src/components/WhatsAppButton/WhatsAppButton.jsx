import { FaWhatsapp } from 'react-icons/fa';
import './WhatsAppButton.css';

export default function WhatsAppButton() {
  const phone = '919876543210';
  const message = encodeURIComponent('Hi Sweet Crumbs! I would like to place an order 🎂');

  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      className="whatsapp-btn"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Order via WhatsApp"
      title="Order via WhatsApp"
    >
      <FaWhatsapp />
      <span className="whatsapp-tooltip">Order on WhatsApp</span>
    </a>
  );
}
