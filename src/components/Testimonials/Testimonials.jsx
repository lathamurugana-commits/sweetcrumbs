import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { FiStar } from 'react-icons/fi';
import testimonials from '../../data/testimonials';
import 'swiper/css';
import 'swiper/css/pagination';
import './Testimonials.css';

export default function Testimonials() {
  return (
    <section className="testimonials section" id="testimonials">
      <div className="container">
        <div className="section-header">
          <span className="section-label">What They Say</span>
          <h2 className="section-title">Customer Love</h2>
          <p className="section-subtitle">
            Real stories from real customers who made memories with Sweet Crumbs
          </p>
        </div>

        <div className="testimonials-slider">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop
          >
            {testimonials.map(t => (
              <SwiperSlide key={t.id}>
                <div className="testimonial-card">
                  <div className="testimonial-avatar">{t.avatar}</div>
                  <div className="testimonial-stars">
                    {Array.from({ length: 5 }, (_, i) => (
                      <FiStar
                        key={i}
                        fill={i < t.rating ? 'currentColor' : 'none'}
                      />
                    ))}
                  </div>
                  <p className="testimonial-text">{t.text}</p>
                  <h4 className="testimonial-author">{t.name}</h4>
                  <p className="testimonial-role">{t.role}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
