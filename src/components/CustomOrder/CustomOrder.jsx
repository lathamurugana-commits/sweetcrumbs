import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Swal from 'sweetalert2';
import './CustomOrder.css';

const initialForm = {
  name: '', phone: '', flavor: '', theme: '', date: '', message: ''
};

const flavors = ['Vanilla', 'Chocolate', 'Red Velvet', 'Butterscotch', 'Strawberry', 'Mango', 'Black Forest', 'Pineapple'];
const themes = ['Birthday', 'Wedding', 'Anniversary', 'Baby Shower', 'Graduation', 'Festive', 'Custom Design'];

const steps = [
  'Choose your flavor & theme',
  'Tell us about your vision',
  'We craft your dream cake',
  'Enjoy your celebration! 🎉',
];

export default function CustomOrder({ onOrderSuccess }) {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Name is required';
    if (!/^[0-9]{10}$/.test(form.phone)) errs.phone = 'Enter a valid 10-digit number';
    if (!form.flavor) errs.flavor = 'Please select a flavor';
    if (!form.theme) errs.theme = 'Please select a theme';
    if (!form.date) errs.date = 'Please select a delivery date';
    else {
      const selected = new Date(form.date);
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      tomorrow.setHours(0, 0, 0, 0);
      if (selected < tomorrow) errs.date = 'Date must be at least tomorrow';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    Swal.fire({
      icon: 'success',
      title: 'Order Placed! 🎂',
      text: `Thank you ${form.name}! Your custom ${form.flavor} ${form.theme} cake will be ready by ${form.date}.`,
      confirmButtonColor: '#F2A7B3',
      background: document.documentElement.getAttribute('data-theme') === 'dark' ? '#2A1F18' : '#FFF8F0',
      color: document.documentElement.getAttribute('data-theme') === 'dark' ? '#F5EBD9' : '#3E2513',
    });

    if (onOrderSuccess) onOrderSuccess();
    setForm(initialForm);
  };

  return (
    <section className="custom-order section" id="custom-order" ref={ref}>
      <div className="container">
        <div className="custom-order-grid">
          <motion.div
            className="custom-order-info"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="section-label">Make It Yours</span>
            <h2 className="section-title">Custom Cake Orders</h2>
            <p className="custom-order-desc">
              Dream it, and we'll bake it! From whimsical birthday themes to
              elegant wedding masterpieces — tell us your vision and our
              expert bakers will bring it to life.
            </p>

            <div className="custom-order-steps">
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  className="order-step"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                >
                  <span className="order-step-num">{i + 1}</span>
                  <span className="order-step-text">{step}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.form
            className="custom-order-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            noValidate
          >
            <h3>🎂 Place Your Order</h3>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="order-name">Full Name</label>
                <input
                  id="order-name" name="name" type="text"
                  placeholder="Your name"
                  value={form.name} onChange={handleChange}
                  className={errors.name ? 'error' : ''}
                />
                {errors.name && <p className="form-error">{errors.name}</p>}
              </div>
              <div className="form-group">
                <label htmlFor="order-phone">Phone Number</label>
                <input
                  id="order-phone" name="phone" type="tel"
                  placeholder="10-digit number"
                  value={form.phone} onChange={handleChange}
                  className={errors.phone ? 'error' : ''}
                />
                {errors.phone && <p className="form-error">{errors.phone}</p>}
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="order-flavor">Cake Flavor</label>
                <select
                  id="order-flavor" name="flavor"
                  value={form.flavor} onChange={handleChange}
                  className={errors.flavor ? 'error' : ''}
                >
                  <option value="">Select flavor</option>
                  {flavors.map(f => <option key={f} value={f}>{f}</option>)}
                </select>
                {errors.flavor && <p className="form-error">{errors.flavor}</p>}
              </div>
              <div className="form-group">
                <label htmlFor="order-theme">Cake Theme</label>
                <select
                  id="order-theme" name="theme"
                  value={form.theme} onChange={handleChange}
                  className={errors.theme ? 'error' : ''}
                >
                  <option value="">Select theme</option>
                  {themes.map(t => <option key={t} value={t}>{t}</option>)}
                </select>
                {errors.theme && <p className="form-error">{errors.theme}</p>}
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="order-date">Delivery Date</label>
              <input
                id="order-date" name="date" type="date"
                value={form.date} onChange={handleChange}
                className={errors.date ? 'error' : ''}
              />
              {errors.date && <p className="form-error">{errors.date}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="order-message">Special Message (Optional)</label>
              <textarea
                id="order-message" name="message"
                placeholder="Write a message for the cake or any special instructions..."
                value={form.message} onChange={handleChange}
              />
            </div>

            <button type="submit" className="form-submit-btn">
              🎉 Place Custom Order
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
