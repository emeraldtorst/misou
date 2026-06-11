import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

export const Ambience: React.FC = () => {
  const { t } = useLanguage();

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
            <h2 className="section-title">
              {t('ambience.title').split('\n').map((line, i) => (
                <React.Fragment key={i}>
                  {i > 0 && <br />}
                  {line}
                </React.Fragment>
              ))}
            </h2>
            <p className="intro-body">
              {t('ambience.body1')}
            </p>
            <p className="intro-body">
              {t('ambience.body2')}
            </p>
            
            <div className="stats-row">
              <div className="stat-item">
                <span className="stat-number">{t('ambience.stat1Num')}</span>
                <span className="stat-label">{t('ambience.stat1Label')}</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">{t('ambience.stat2Num')}</span>
                <span className="stat-label">{t('ambience.stat2Label')}</span>
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
              <img src="images/res3.jpeg" alt={t('ambience.imgAlt')} className="img-front" />
              <div className="img-backdrop"></div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
