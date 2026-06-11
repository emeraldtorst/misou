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
            style={{ display: 'flex', visibility: 'visible' }}
          >
            <nav className="mobile-nav-links">
              <a href="#ambience" className="mobile-nav-link" onClick={closeMenu}>The Ambience</a>
              <a href="#menu" className="mobile-nav-link" onClick={closeMenu}>The Menu</a>
              <a href="#lounge" className="mobile-nav-link" onClick={closeMenu}>Wine & Drinks</a>
              <a href="#lunch" className="mobile-nav-link" onClick={closeMenu}>Lunch Menu</a>
              <a href="#contact" className="mobile-nav-link" onClick={closeMenu}>Hours & Location</a>
              <a href="https://www.quandoo.at/en/place/miso-u-103470/menu" target="_blank" rel="noopener noreferrer" className="btn btn-primary" onClick={closeMenu}>Reserve Table</a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
