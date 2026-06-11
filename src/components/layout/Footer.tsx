import React, { useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

export const Footer: React.FC = () => {
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
              <p className="footer-tagline">Elevated Asian Fusion dining in the historic heart of Vienna’s 1st District.</p>
              <div className="footer-socials">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><span className="social-icon">IG</span></a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><span className="social-icon">FB</span></a>
              </div>
            </div>

            <div className="footer-col">
              <h5 className="footer-col-title">Hours</h5>
              <div className="footer-hours-list">
                <div className="hours-item">
                  <span className="days">Tuesday – Friday</span>
                  <span className="time">11:00 am – 10:00 pm</span>
                </div>
                <div className="hours-item">
                  <span className="days">Saturday – Sunday</span>
                  <span className="time">12:00 pm – 10:00 pm</span>
                </div>
                <div className="hours-item">
                  <span className="days">Monday</span>
                  <span className="time" style={{ color: 'var(--color-crimson)' }}>Closed</span>
                </div>
              </div>
            </div>

            <div className="footer-col">
              <h5 className="footer-col-title">Location</h5>
              <p className="footer-address">
                Marc Aurel Straße 2A<br/>
                1010 Wien, Austria
              </p>
              <a href="https://maps.google.com/?q=Marc+Aurel+Straße+2A,+1010+Wien" target="_blank" rel="noopener noreferrer" className="footer-map-link link-underline">Get Directions</a>
            </div>

            <div className="footer-col">
              <h5 className="footer-col-title">Inquiries</h5>
              <a href="tel:+436601288953" className="footer-contact-link link-underline">+43 660 12 88 953</a>
              <a href="mailto:office@misou.online" className="footer-contact-link link-underline">office@misou.online</a>
              <a href="https://www.quandoo.at/en/place/miso-u-103470/menu" target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-gold btn-sm footer-book-btn">Book Table</a>
            </div>
          </div>

          <div className="footer-bottom">
            <p className="copyright">© 2026 MISO·U. All rights reserved. YUNA GMBH.</p>
            <div className="legal-links">
              <button className="footer-link link-underline" onClick={() => openModal('imprint')}>Imprint / Impressum</button>
              <button className="footer-link link-underline" onClick={() => openModal('privacy')}>Privacy Policy / DSGVO</button>
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
                  Datenschutzerklärung
                </button>
                <button 
                  className={`legal-tab-btn ${legalTab === 'imprint' ? 'active' : ''}`} 
                  onClick={() => setLegalTab('imprint')}
                >
                  Impressum
                </button>
              </div>

              <div className="legal-modal-content">
                {legalTab === 'privacy' ? (
                  <div className="legal-panel-content active">
                    <h2>Erklärung zur Informationspflicht</h2>
                    <h3 className="text-gold" style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.4rem', margin: '15px 0' }}>Datenschutzerklärung</h3>
                    <p>In folgender Datenschutzerklärung informieren wir Sie über die wichtigsten Aspekte der Datenverarbeitung im Rahmen unserer Webseite. Wir erheben und verarbeiten personenbezogene Daten nur auf Grundlage der gesetzlichen Bestimmungen.</p>
                    <p>Sobald Sie als Benutzer auf unsere Webseite zugreifen oder diese besuchen wird Ihre IP-Adresse, Beginn sowie Beginn und Ende der Sitzung erfasst. Dies ist technisch bedingt und stellt somit ein berechtigtes Interesse iSv Art 6 Abs 1 lit f DSGVO.</p>
                    {/* Placeholder for privacy - keeping it concise in component for brevity */}
                  </div>
                ) : (
                  <div className="legal-panel-content active">
                    <h2>Impressum</h2>
                    <h3 className="text-gold" style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.4rem', margin: '15px 0' }}>Informationen und Offenlegung</h3>
                    <p>gemäß §5 (1) ECG, § 25 MedienG, § 63 GewO und § 14 UGB</p>
                    <p><strong>Webseitenbetreiber:</strong> YUNA GMBH<br/>
                    <strong>Firmenbuchnummer:</strong> FN 579185 v<br/>
                    <strong>Firmenbuchgericht:</strong> HANDELSGERICHT WIEN</p>
                    <p><strong>Anschrift:</strong> MARC AUREL STRASSE 2A, 1010 Wien</p>
                    <p><strong>Gewerbeaufsichtbehörde:</strong> MAGISTRAT WIEN<br/>
                    <strong>Mitgliedschaften:</strong> MITGLIED BEI DER WKO</p>
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
