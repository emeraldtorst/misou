import React, { useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useLanguage();
  const [legalModalOpen, setLegalModalOpen] = useState(false);
  const [legalTab, setLegalTab] = useState<'privacy' | 'imprint'>('privacy');
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);

  const openModal = (tab: 'privacy' | 'imprint') => {
    setLegalTab(tab);
    setLegalModalOpen(true);
  };

  return (
    <>
      <footer className="main-footer" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="section-bg-wrapper" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
          <motion.div 
            style={{ 
              backgroundImage: "url('images/bar3.jpeg')", 
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
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(6, 6, 6, 0.92)' }}></div>
        </div>

        <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="footer-grid-luxury">
            
            <div className="footer-col brand-col">
              <span className="footer-logo">MISO<span className="dot">•</span>U</span>
              <p className="footer-tagline">{t('footer.tagline')}</p>
              <div className="footer-socials">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><span className="social-icon">IG</span></a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><span className="social-icon">FB</span></a>
              </div>
            </div>

            <div className="footer-col">
              <h5 className="footer-col-title">{t('footer.hours')}</h5>
              <div className="footer-hours-list">
                <div className="hours-item">
                  <span className="days">{t('contact.daysWeek')}</span>
                  <span className="time">{t('contact.timeWeek')}</span>
                </div>
                <div className="hours-item">
                  <span className="days">{t('contact.daysWeekend')}</span>
                  <span className="time">{t('contact.timeWeekend')}</span>
                </div>
                <div className="hours-item">
                  <span className="days">{t('contact.dayMonday')}</span>
                  <span className="time" style={{ color: 'var(--color-crimson)' }}>{t('contact.closed')}</span>
                </div>
              </div>
            </div>

            <div className="footer-col">
              <h5 className="footer-col-title">{t('footer.location')}</h5>
              <p className="footer-address">
                Marc Aurel Straße 2A<br/>
                1010 Wien, Austria
              </p>
              <a href="https://maps.google.com/?q=Marc+Aurel+Straße+2A,+1010+Wien" target="_blank" rel="noopener noreferrer" className="footer-map-link link-underline">{t('footer.directions')}</a>
            </div>

            <div className="footer-col">
              <h5 className="footer-col-title">{t('footer.inquiries')}</h5>
              <a href="tel:+436601288953" className="footer-contact-link link-underline">+43 660 12 88 953</a>
              <a href="mailto:office@misou.online" className="footer-contact-link link-underline">office@misou.online</a>
              <a href="https://www.quandoo.at/en/place/miso-u-103470/menu" target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-gold btn-sm footer-book-btn">{t('footer.book')}</a>
            </div>
          </div>

          <div className="footer-bottom">
            <p className="copyright">{t('footer.copyright')}</p>
            <div className="legal-links">
              <button className="footer-link link-underline" onClick={() => openModal('imprint')}>{t('footer.imprint')}</button>
              <button className="footer-link link-underline" onClick={() => openModal('privacy')}>{t('footer.privacy')}</button>
            </div>
          </div>
        </div>
      </footer>

      <AnimatePresence>
        {legalModalOpen && (
          <motion.div 
            className="legal-modal-overlay active"
            initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            animate={{ opacity: 1, backdropFilter: 'blur(15px)' }}
            exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            style={{ display: 'flex', visibility: 'visible' }}
          >
            <motion.div 
              className="legal-modal-container active"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
            >
              <button className="legal-close-btn" onClick={() => setLegalModalOpen(false)}>&times;</button>

              <div className="legal-modal-tabs">
                <button 
                  className={`legal-tab-btn ${legalTab === 'privacy' ? 'active' : ''}`} 
                  onClick={() => setLegalTab('privacy')}
                >
                  {t('footer.privacy')}
                </button>
                <button 
                  className={`legal-tab-btn ${legalTab === 'imprint' ? 'active' : ''}`} 
                  onClick={() => setLegalTab('imprint')}
                >
                  {t('footer.imprint')}
                </button>
              </div>

              <div className="legal-modal-content">
                {legalTab === 'privacy' ? (
                  <div className="legal-panel-content active">
                    <h2>{t('footer.privacyTitle')}</h2>
                    <h3 className="text-gold" style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.4rem', margin: '15px 0' }}>{t('footer.privacy')}</h3>
                    <p>{t('footer.privacyIntro1')}</p>
                    <p>{t('footer.privacyIntro2')}</p>
                  </div>
                ) : (
                  <div className="legal-panel-content active">
                    <h2>{t('footer.imprintTitle')}</h2>
                    <h3 className="text-gold" style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.4rem', margin: '15px 0' }}>{t('footer.imprintSub')}</h3>
                    <p>{t('footer.imprintECG')}</p>
                    <p><strong>{t('footer.operator')}:</strong> YUNA GMBH<br/>
                    <strong>{t('footer.regNumber')}:</strong> FN 579185 v<br/>
                    <strong>{t('footer.court')}:</strong> HANDELSGERICHT WIEN</p>
                    <p><strong>{t('footer.address')}:</strong> MARC AUREL STRASSE 2A, 1010 Wien</p>
                    <p><strong>{t('footer.authority')}:</strong> MAGISTRAT WIEN<br/>
                    <strong>{t('footer.memberships')}:</strong> MITGLIED BEI DER WKO</p>
                    <p><strong>Telefon:</strong> 066022834765<br/>
                    <strong>Email:</strong> office@misou.online</p>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
