import { useState } from 'react';
import { FiPlus } from 'react-icons/fi';
import faqData from '../../data/faq';
import './FAQ.css';

export default function FAQ() {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  return (
    <section className="faq section" id="faq">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Questions?</span>
          <h2 className="section-title">Frequently Asked</h2>
          <p className="section-subtitle">
            Everything you need to know about ordering from Sweet Crumbs
          </p>
        </div>

        <div className="faq-list">
          {faqData.map(item => (
            <div key={item.id} className="faq-item">
              <button
                className="faq-question"
                onClick={() => toggle(item.id)}
                aria-expanded={openId === item.id}
              >
                {item.question}
                <FiPlus className={`faq-icon${openId === item.id ? ' open' : ''}`} />
              </button>
              <div className={`faq-answer${openId === item.id ? ' open' : ''}`}>
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
