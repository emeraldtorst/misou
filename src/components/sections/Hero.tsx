import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { MagneticButton } from '../ui/MagneticButton';

export const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="hero-section" id="hero">
      <div className="hero-bg-wrapper">
        <video autoPlay loop muted playsInline preload="metadata" poster="images/bar2.jpeg" className="hero-parallax-bg">
          <source src="videos/hero_bg.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay"></div>
      </div>

      <div className="hero-content-container">

        <motion.div 
          className="hero-actions"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <div className="hero-btn-group" style={{ display: 'flex', gap: '1.5rem', marginBottom: '2rem' }}>
            <MagneticButton as="a" href="https://www.quandoo.at/en/place/miso-u-103470/menu" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-large">{t('hero.reserve')}</MagneticButton>
            <MagneticButton as="a" href="#menu" className="btn btn-outline btn-large">{t('hero.viewMenu')}</MagneticButton>
          </div>
          <a href="#ambience" className="explore-btn-link" aria-label="Scroll to introduction">
            <span className="explore-text">{t('hero.explore')}</span>
            <div className="scroll-arrow-line"></div>
          </a>
        </motion.div>
      </div>

      <div className="scroll-indicator" aria-hidden="true">
        <div className="indicator-line"></div>
      </div>
    </section>
  );
};
