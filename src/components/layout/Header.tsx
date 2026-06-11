import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
            <a href="#ambience" className="nav-link">Ambience</a>
            <a href="#menu" className="nav-link">Menu</a>
            <a href="#lounge" className="nav-link">Drinks Lounge</a>
            <a href="#lunch" className="nav-link">Midday</a>
            <a href="#contact" className="nav-link">Details</a>
          </nav>

          <div className="header-cta">
            <a href="https://www.quandoo.at/en/place/miso-u-103470/menu" target="_blank" rel="noopener noreferrer" className="btn btn-outline">Reserve a Table</a>
          </div>

          <button 
            className={`mobile-menu-toggle ${mobileMenuOpen ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="burger-line"></span>
            <span className="burger-line"></span>
            <span className="burger-line"></span>
          </button>
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
                { name: 'The Ambience', href: '#ambience' },
                { name: 'The Menu', href: '#menu' },
                { name: 'Wine & Drinks', href: '#lounge' },
                { name: 'Lunch Menu', href: '#lunch' },
                { name: 'Hours & Location', href: '#contact' },
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
                Reserve Table
              </motion.a>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
