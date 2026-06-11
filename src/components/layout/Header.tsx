import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <header className={`main-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="header-container">
          <a href="#" className="logo-link" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <span className="logo-text">MISO<span className="dot">•</span>U</span>
            <span className="logo-sub">FINEST ASIAN FUSION</span>
          </a>

          <nav className="desktop-nav">
            <a href="#ambience" className="nav-link">{t('nav.ambience')}</a>
            <a href="#menu" className="nav-link">{t('nav.menu')}</a>
            <a href="#lounge" className="nav-link">{t('nav.lounge')}</a>
            <a href="#lunch" className="nav-link">{t('nav.lunch')}</a>
            <a href="#reviews" className="nav-link">{t('nav.reviews')}</a>
            <a href="#contact" className="nav-link">{t('nav.details')}</a>
          </nav>

          <div className="header-cta">
            <a href="https://www.quandoo.at/en/place/miso-u-103470/menu" target="_blank" rel="noopener noreferrer" className="btn btn-outline">{t('nav.reserve')}</a>
          </div>

          <div className="header-actions" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', zIndex: 10 }}>
            {/* Language Switcher Toggle */}
            <div className="lang-switcher" style={{ display: 'flex', gap: '0.5rem', fontFamily: 'var(--font-sans)', fontSize: '0.8rem', fontWeight: 500, letterSpacing: '0.05em' }}>
              <button 
                onClick={() => setLanguage('en')}
                style={{ 
                  background: 'none', 
                  border: 'none', 
                  color: language === 'en' ? 'var(--color-gold)' : 'var(--color-text-secondary)',
                  cursor: 'pointer',
                  padding: '0.2rem',
                  textShadow: language === 'en' ? '0 0 8px rgba(223, 193, 147, 0.4)' : 'none',
                  transition: 'color 0.3s ease'
                }}
              >
                EN
              </button>
              <span style={{ color: 'rgba(255,255,255,0.2)' }}>/</span>
              <button 
                onClick={() => setLanguage('de')}
                style={{ 
                  background: 'none', 
                  border: 'none', 
                  color: language === 'de' ? 'var(--color-gold)' : 'var(--color-text-secondary)',
                  cursor: 'pointer',
                  padding: '0.2rem',
                  textShadow: language === 'de' ? '0 0 8px rgba(223, 193, 147, 0.4)' : 'none',
                  transition: 'color 0.3s ease'
                }}
              >
                DE
              </button>
            </div>

            <button 
              className={`mobile-menu-toggle ${mobileMenuOpen ? 'active' : ''}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{ zIndex: 100 }}
            >
              <span className="burger-line"></span>
              <span className="burger-line"></span>
              <span className="burger-line"></span>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="mobile-nav-overlay active"
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            style={{ display: 'flex', visibility: 'visible', position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh', zIndex: 99, background: 'rgba(6, 6, 6, 0.9)' }}
          >
            {/* Anime/Katana slash background accent */}
            <motion.div 
              initial={{ height: 0 }}
              animate={{ height: '100vh' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              style={{ position: 'absolute', left: '10%', width: '1px', background: 'linear-gradient(to bottom, #d90429, transparent)', opacity: 0.5, zIndex: 0 }}
            />
            <motion.nav 
              className="mobile-nav-links"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.1, delayChildren: 0.2 }
                }
              }}
              style={{ zIndex: 1 }}
            >
              {[
                { name: t('nav.ambience'), href: '#ambience' },
                { name: t('nav.menu'), href: '#menu' },
                { name: t('nav.lounge'), href: '#lounge' },
                { name: t('nav.lunch'), href: '#lunch' },
                { name: t('nav.reviews'), href: '#reviews' },
                { name: t('nav.details'), href: '#contact' },
              ].map((link, i) => (
                <motion.a 
                  key={i}
                  href={link.href} 
                  className="mobile-nav-link" 
                  onClick={closeMenu}
                  variants={{
                    hidden: { opacity: 0, x: -30 },
                    visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 100 } }
                  }}
                  style={{ position: 'relative' }}
                >
                  <span style={{ fontSize: '0.6rem', color: '#d90429', position: 'absolute', left: '-20px', top: '10px', opacity: 0.5 }}>0{i+1}</span>
                  {link.name}
                </motion.a>
              ))}



              <motion.a 
                href="https://www.quandoo.at/en/place/miso-u-103470/menu" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-outline" 
                style={{ borderColor: '#d90429', color: '#f5f5f3', marginTop: '2rem' }}
                onClick={closeMenu}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                {t('nav.reserve')}
              </motion.a>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
