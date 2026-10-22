'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Burst } from './Icons';
import './Hero.css';

const fadeUp = (delay = 0) => ({
  initial: { y: 30, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.7, delay, ease: 'easeOut' },
});

const clients = [1, 2, 3];

const Hero = () => {
  return (
    <section id="home" className="hero-container">
      <div className="hero-content">
        <motion.h1 className="hero-title" {...fadeUp(0.1)}>
          Creating a Sustainable Future with Renewable Energy Solutions.
        </motion.h1>
        <motion.p className="hero-subtitle" {...fadeUp(0.25)}>
          Discover the amazing ways solar energy can transform your home or business.
        </motion.p>
        <motion.div {...fadeUp(0.4)}>
          <a href="#contact" className="btn-lime">
            <ArrowRight />
            Get A Free Quote
          </a>
        </motion.div>
      </div>

      <motion.div className="hero-cards" {...fadeUp(0.6)}>
        <div className="hero-card energy-card">
          <img src="/images/solar-field.jpg" alt="Solar engineer at a solar farm" className="energy-card-image" />
          <div className="energy-card-text">
            <h4>Alternative Energy</h4>
            <p>Discover the amazing ways solar energy can transform.</p>
          </div>
        </div>

        <div className="hero-card clients-card">
          <div className="avatar-group">
            {clients.map((n) => (
              <img key={n} src={`https://i.pravatar.cc/100?u=${n}`} alt="" className="avatar" />
            ))}
            <span className="avatar avatar-more">80+</span>
          </div>
          <p>Our 200+ satisfied clients world wide</p>
          <Burst className="clients-burst" strokeWidth={2.5} />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
