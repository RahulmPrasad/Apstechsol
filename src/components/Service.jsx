'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Burst } from './Icons';
import './Service.css';

const services = [
  { id: 1, title: 'Residential Solar', image: '/images/residential-solar.jpg' },
  { id: 2, title: 'Hydropower System', image: '/images/hydropower.jpg' },
  { id: 3, title: 'Wind Turbine', image: '/images/wind-turbine.jpg' },
];

const reveal = (delay = 0) => ({
  initial: { y: 30, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.6, delay, ease: 'easeOut' },
});

const ServiceCard = ({ service, index }) => (
  <motion.a href="#service" className="service-card" {...reveal(index * 0.15)}>
    <img src={service.image} alt={service.title} className="service-image" />
    <h4 className="service-card-title">{service.title}</h4>
    <span className="service-notch">
      <span className="service-arrow">
        <ArrowUpRight />
      </span>
    </span>
  </motion.a>
);

const Service = () => {
  return (
    <section id="service" className="service-section">
      <div className="service-panel">
        <Burst className="service-burst" strokeWidth={2.4} />

        <div className="service-header">
          <motion.div {...reveal()}>
            <span className="section-tag">Service</span>
            <h2 className="service-title">Our Solar Solutions</h2>
          </motion.div>
          <motion.p className="service-subtitle" {...reveal(0.2)}>
            We believe in the power of solar energy to transform lives and communities.
          </motion.p>
        </div>

        <div className="service-grid">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        <motion.div className="service-footer" {...reveal(0.3)}>
          <a href="#service" className="btn-lime">
            <ArrowRight />
            View all services
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Service;
