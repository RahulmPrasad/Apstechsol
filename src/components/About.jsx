'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Star } from './Icons';
import './About.css';

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { y: 24, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
};

const pop = (delay) => ({
  initial: { y: 30, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.6, delay, ease: 'easeOut' },
});

const reviewers = [4, 5, 6];

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        {/* Left content */}
        <motion.div
          className="about-content"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.span className="section-tag" variants={item}>About Us</motion.span>

          <motion.h2 className="about-title" variants={item}>The Green Power</motion.h2>

          <motion.p className="about-description" variants={item}>
            Green Power is a leading provider of solar energy solutions, dedicated to empowering
            individuals and businesses with clean, renewable energy. We believe in the power of solar
            energy to transform lives and communities.
          </motion.p>

          <motion.div className="about-trust" variants={item}>
            <div className="trust-rating">
              <Star className="trust-star" />
              <span>Excellent 4.8 / 5</span>
            </div>
            <span className="trust-divider" />
            <div className="trust-reviews">
              <div className="trust-avatars">
                {reviewers.map((n) => (
                  <img key={n} src={`https://i.pravatar.cc/100?u=${n}`} alt="" />
                ))}
              </div>
              <span>Reviews 130+</span>
            </div>
          </motion.div>

          <motion.div variants={item}>
            <a href="#service" className="btn-lime white-btn">
              <ArrowRight />
              Learn more
            </a>
          </motion.div>
        </motion.div>

        {/* Right image composition */}
        <div className="about-visual">
          <motion.div className="about-image" {...pop(0)}>
            <img src="/images/engineer.jpg" alt="Engineer in a hard hat holding a tablet" />
          </motion.div>

          <motion.div className="stat-card success-card" {...pop(0.25)}>
            <div className="stat-head">
              <span className="stat-number">87%</span>
              <span className="stat-label">Success</span>
            </div>
            <p className="stat-desc">
              Green Power is dedicated to empowering individuals and businesses with clean, renewable
              energy. We strive to make solar energy accessible and affordable for all.
            </p>
          </motion.div>

          <motion.div className="stat-card experience-card" {...pop(0.45)}>
            <div className="stat-head">
              <span className="stat-number">05+</span>
              <span className="stat-label">Experience</span>
            </div>
            <p className="stat-desc">
              Our vision is to be a global leader in sustainable energy solutions, creating a brighter,
              cleaner future for generations to come.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
