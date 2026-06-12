import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

export const Lounge: React.FC = () => {
  const { t } = useLanguage();
  const { scrollYProgress } = useScroll();
  // Simplified parallax for the background image
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  return (
    <section className="lounge-section" id="lounge" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="lounge-bg-wrapper" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
        <motion.div 
          className="lounge-parallax-bg" 
          style={{ 
            backgroundImage: "url('images/bar2.jpeg')", 
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
        <div className="lounge-overlay" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(10, 10, 10, 0.6)' }}></div>
      </div>

      <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="lounge-content-layout">
          <motion.div 
            className="lounge-text-panel"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8 }}
          >
            <span className="section-number text-gold">03</span>
            <h2 className="section-title">{t('lounge.title')}</h2>
            <p className="lounge-lead">
              {t('lounge.lead')}
            </p>
            <p className="lounge-body">
              {t('lounge.body')}
            </p>

            <div className="lounge-features">
              <div className="lounge-feature-item">
                <span className="feature-title">{t('lounge.feature1Title')}</span>
                <span className="feature-desc">{t('lounge.feature1Desc')}</span>
              </div>
              <div className="lounge-feature-item">
                <span className="feature-title">{t('lounge.feature2Title')}</span>
                <span className="feature-desc">{t('lounge.feature2Desc')}</span>
              </div>
            </div>

            <a href="#menu" className="btn btn-outline btn-gold" style={{ marginTop: '20px', display: 'inline-block' }}>{t('lounge.explore')}</a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
