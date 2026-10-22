'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from './Icons';
import './Testimonial.css';

const testimonials = [
  {
    id: 1,
    name: 'Abraham Doe',
    location: 'United States',
    quote: 'ATS handled our vendor inspection end to end. Their inspectors were not just professional and punctual but also extremely knowledgeable.',
  },
  {
    id: 2,
    name: 'Elena Patel',
    location: 'Arab Emirates',
    quote: "I couldn't be happier with our decision to choose ATS for third party inspection. Their team was professional, knowledgeable, and efficient.",
  },
  {
    id: 3,
    name: 'Nolan Kim',
    location: 'Portugal',
    quote: 'Thrilled with our choice to go with ATS for our inspection needs. Their reports were clear, detailed and always delivered on time.',
  },
  {
    id: 4,
    name: 'Sofia Chen',
    location: 'Australia',
    quote: 'Extremely satisfied with ATS for our expediting and quality checks. The team was highly professional, well-informed, and effective.',
  },
  {
    id: 5,
    name: 'Rahul Mehta',
    location: 'India',
    quote: 'Quick mobilisation and thorough inspections every time. ATS has become our go-to partner for all critical equipment.',
  },
  {
    id: 6,
    name: 'Lukas Weber',
    location: 'Germany',
    quote: 'Their inspectors understand the standards inside out. Communication was excellent from the kick-off meeting to the final release note.',
  },
  {
    id: 7,
    name: 'Amara Okafor',
    location: 'Nigeria',
    quote: 'ATS gave us complete confidence in our suppliers. Honest findings, practical recommendations and a very responsive team.',
  },
  {
    id: 8,
    name: 'James Carter',
    location: 'United Kingdom',
    quote: 'Reliable, detail-oriented and easy to work with. ATS made our multi-country inspection programme run smoothly.',
  },
];

const VISIBLE = 4;

const PinIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2a8 8 0 00-8 8c0 5.4 7 11.5 7.3 11.8a1 1 0 001.4 0C13 21.5 20 15.4 20 10a8 8 0 00-8-8zm0 11a3 3 0 110-6 3 3 0 010 6z" />
  </svg>
);

const Testimonial = () => {
  const [start, setStart] = useState(0);

  const visible = Array.from({ length: VISIBLE }, (_, i) => testimonials[(start + i) % testimonials.length]);
  const move = (step) => setStart((s) => (s + step + testimonials.length) % testimonials.length);

  return (
    <section id="testimonial" className="testimonial-section">
      <motion.div
        className="testimonial-header"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <span className="section-tag">Testimonial</span>
        <h2 className="testimonial-title">Feedback From World Wide Clients</h2>
        <p className="testimonial-subtitle">
          We believe reliable inspection builds trust between buyers and suppliers.
        </p>
      </motion.div>

      <div className="testimonial-stage">
        <img className="testimonial-map" src="/images/world-map-dots.png" alt="" aria-hidden="true" />

        <div className="testimonial-cards">
          <AnimatePresence mode="popLayout" initial={false}>
            {visible.map((t, slot) => (
              <motion.article
                key={t.id}
                layout
                className={`testimonial-card slot-${slot}`}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
              >
                <div className="testimonial-person">
                  <img src={`https://i.pravatar.cc/100?u=ats-${t.id}`} alt="" />
                  <h3>{t.name}</h3>
                </div>
                <p className="testimonial-quote">{t.quote}</p>
                <div className="testimonial-location">
                  <PinIcon />
                  <span>{t.location}</span>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <div className="testimonial-nav">
        <button type="button" className="testimonial-btn" onClick={() => move(-1)} aria-label="Previous testimonial">
          <ArrowRight style={{ transform: 'rotate(180deg)' }} />
        </button>
        <button type="button" className="testimonial-btn is-primary" onClick={() => move(1)} aria-label="Next testimonial">
          <ArrowRight />
        </button>
      </div>
    </section>
  );
};

export default Testimonial;
