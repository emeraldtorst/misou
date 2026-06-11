import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const Midday: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);

  return (
    <section className="lunch-section" id="lunch" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="section-bg-wrapper" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
        <motion.div 
          style={{ 
            backgroundImage: "url('images/res2.jpeg')", 
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position: 'absolute',
            top: '-10%',
            left: 0,
            width: '100%',
            height: '120%',
            y 
          }}
        />
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(6, 6, 6, 0.85)' }}></div>
      </div>

      <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="lunch-layout">
          
          <motion.div 
            className="lunch-image-col"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <div className="lunch-image-container">
              <img src="images/f5.jpeg" alt="Premium modern bento-style lunch box" className="lunch-img" />
              <div className="lunch-image-frame"></div>
            </div>
          </motion.div>

          <motion.div 
            className="lunch-text-col"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="section-number text-gold">04</span>
            <h2 className="section-title">The Midday Escape</h2>
            <span className="lunch-tag">Weekday Lunch Ritual</span>
            <p className="lunch-desc">
              Designed for the Viennese professional, our midday lunch offers elevated speed without compromising culinary integrity. A curated rotation of refined bento sets, dynamic hand rolls, and warm bowls.
            </p>

            <div className="lunch-preview-box">
              <h4 className="lunch-preview-title">This Week's Selection</h4>
              <ul className="lunch-preview-list">
                <li>
                  <span className="lunch-dish">Salmon A La Miso Bento Set</span>
                  <span className="lunch-price">€ 19.00</span>
                </li>
                <li>
                  <span className="lunch-dish">Veggie Udon & Gyoza Combo</span>
                  <span className="lunch-price">€ 14.50</span>
                </li>
                <li>
                  <span className="lunch-dish">Bulgogi Beef Bento Set</span>
                  <span className="lunch-price">€ 16.50</span>
                </li>
              </ul>
            </div>

            <div className="lunch-actions">
              <a href="#menu" className="btn btn-outline">View Lunch Menu</a>
              <span className="lunch-time-info">Served Monday–Friday, 11:11 – 15:00</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
