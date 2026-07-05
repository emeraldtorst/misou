import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

export const WelcomeCarpet: React.FC = () => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [shouldRender, setShouldRender] = useState<boolean>(false);
  const [isOpening, setIsOpening] = useState<boolean>(false);

  useEffect(() => {
    // Only show the welcome carpet once per browser session
    const hasSeen = sessionStorage.getItem('misou_welcome_seen');
    if (!hasSeen) {
      setShouldRender(true);
      // Prevent scrolling while the carpet is active
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    }
  }, []);

  const handleEnter = () => {
    if (isOpening) return;
    setIsOpening(true);
    
    // Start the slide-up animation
    setTimeout(() => {
      setIsVisible(false);
      sessionStorage.setItem('misou_welcome_seen', 'true');
      // Restore scrolling
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }, 1000); // Duration matches the slide-up transition
  };

  // Auto-enter after 3.8 seconds of beautiful logo reveal
  useEffect(() => {
    if (!shouldRender) return;
    const timer = setTimeout(() => {
      handleEnter();
    }, 3800);
    return () => clearTimeout(timer);
  }, [shouldRender]);

  if (!shouldRender || !isVisible) return null;

  // Animation variants for the entire screen sliding up
  const screenVariants = {
    initial: { y: 0 },
    exit: { 
      y: '-100vh', 
      transition: { duration: 1.0, ease: [0.76, 0, 0.24, 1] as const } 
    }
  };

  // Variants for logo fading in and out
  const logoVariants = {
    initial: { opacity: 0, scale: 0.96 },
    animate: { 
      opacity: [0, 1, 1, 0],
      scale: [0.96, 1, 1, 0.98],
      transition: { 
        duration: 3.5, 
        times: [0, 0.15, 0.85, 1],
        ease: 'easeInOut' as const
      }
    }
  };

  return (
    <AnimatePresence>
      {!isOpening && (
        <motion.div 
          className="welcome-carpet-container"
          variants={screenVariants}
          initial="initial"
          exit="exit"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            backgroundColor: 'var(--color-bg-base)',
            backgroundImage: 'radial-gradient(circle at center, #0e1c15 0%, var(--color-bg-base) 80%)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden',
            pointerEvents: 'auto'
          }}
        >
          {/* Subtle Golden Ambient Glow */}
          <div 
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '500px',
              height: '500px',
              background: 'radial-gradient(circle, rgba(223, 193, 147, 0.03) 0%, transparent 70%)',
              pointerEvents: 'none',
              zIndex: 1
            }}
          />

          {/* Logo & Greeting Box */}
          <motion.div
            variants={logoVariants}
            initial="initial"
            animate="animate"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              zIndex: 2,
              padding: '2rem',
              maxWidth: '600px'
            }}
          >
            {/* Elegant Minimalist Crest */}
            <div 
              style={{ 
                width: '60px', 
                height: '60px', 
                borderRadius: '50%', 
                border: '1px solid var(--color-gold)', 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center',
                marginBottom: '1.8rem',
                boxShadow: '0 0 20px rgba(223, 193, 147, 0.15)',
                background: 'rgba(6, 6, 6, 0.5)'
              }}
            >
              <span style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-display)', fontSize: '1.2rem', letterSpacing: '0.05em', fontWeight: 600 }}>M</span>
            </div>

            {/* Restaurant Title */}
            <h1 
              style={{ 
                fontFamily: 'var(--font-display)', 
                fontSize: '3.2rem', 
                letterSpacing: '0.45em', 
                marginRight: '-0.45em',
                color: 'var(--color-text-primary)',
                marginBottom: '0.5rem',
                textTransform: 'uppercase',
                fontWeight: 500,
                textShadow: '0 4px 12px rgba(0, 0, 0, 0.9)'
              }}
            >
              MISO·U
            </h1>

            {/* Crimson Katana Divider */}
            <div 
              style={{ 
                width: '60px', 
                height: '1px', 
                backgroundColor: 'var(--color-crimson)', 
                margin: '1rem 0',
                boxShadow: '0 0 6px var(--color-crimson)'
              }}
            />

            {/* Tagline */}
            <h2 
              style={{ 
                fontFamily: 'var(--font-serif)', 
                fontSize: '1.6rem', 
                fontStyle: 'italic',
                color: 'var(--color-gold)',
                marginBottom: '0.8rem',
                fontWeight: 400
              }}
            >
              {t('welcomeCarpet.tagline')}
            </h2>

            {/* Subtext */}
            <p 
              style={{ 
                fontFamily: 'var(--font-sans)', 
                fontSize: '0.85rem', 
                letterSpacing: '0.2em', 
                color: 'var(--color-text-secondary)',
                textTransform: 'uppercase',
                opacity: 0.8
              }}
            >
              {t('welcomeCarpet.subtitle')}
            </p>
          </motion.div>

          {/* Ethereal Skip / Enter Trigger */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            style={{
              position: 'absolute',
              bottom: '12%',
              zIndex: 3
            }}
          >
            <button
              onClick={handleEnter}
              style={{
                background: 'transparent',
                border: '1px solid rgba(223, 193, 147, 0.4)',
                padding: '0.8rem 2.2rem',
                color: 'var(--color-text-secondary)',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.8rem',
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                borderRadius: '50px',
                outline: 'none',
                transition: 'all 0.4s ease',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.4)'
              }}
              className="welcome-enter-btn"
            >
              {t('welcomeCarpet.enter')}
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
