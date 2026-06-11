import React from 'react';
import { motion } from 'framer-motion';

export const Ambience: React.FC = () => {
  return (
    <section className="intro-section" id="ambience">
      <div className="section-container">
        <div className="intro-grid">
          
          <motion.div 
            className="intro-text-col"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <div className="section-number text-gold">01</div>
            <h2 className="section-title">Redefining the <br />Viennese Palate</h2>
            <p className="intro-body">
              Located mere steps from St. Stephen's Cathedral, MISO·U is an architectural homage to modern Asia. 
              We curate an atmosphere where dark stone, subtle gold accents, and ambient lighting create a sense of nocturnal exclusivity.
            </p>
            <p className="intro-body">
              Our culinary philosophy is simple: uncompromising ingredient sourcing combined with progressive techniques. 
              Whether it’s our hand-rolled premium sushi or our signature flame-seared mains, every plate is an aesthetic performance.
            </p>
            
            <div className="stats-row">
              <div className="stat-item">
                <span className="stat-number">1010</span>
                <span className="stat-label">District Location</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">40+</span>
                <span className="stat-label">Curated Wines</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="intro-image-col"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <div className="image-stack">
              <img src="images/res3.jpeg" alt="MISO·U elegant interior dining area" className="img-front" />
              <div className="img-backdrop"></div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
