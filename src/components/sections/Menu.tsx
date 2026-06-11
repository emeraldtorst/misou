import React from 'react';
import { motion } from 'framer-motion';
import { MagneticButton } from '../ui/MagneticButton';

export const Menu: React.FC = () => {
  return (
    <section className="menu-section" id="menu">
      <div className="section-container" style={{ textAlign: 'center', padding: '6rem 0' }}>
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
        >
          <div className="header-number-wrap" style={{ alignItems: 'center' }}>
            <span className="section-number">02</span>
            <h2 className="section-title">The Culinary Archives</h2>
          </div>
          <p className="section-subtitle" style={{ textAlign: 'center', marginBottom: '3rem' }}>
            Explore our comprehensive archives of hand-crafted Asian fusion plates, organic wine pairings, and midday lunch sets in our fully detailed menu.
          </p>
          
          <MagneticButton 
            as="a" 
            href="/menu.pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-outline btn-large"
            style={{ display: 'inline-flex', gap: '10px' }}
          >
            View Full Menu (PDF)
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
};
