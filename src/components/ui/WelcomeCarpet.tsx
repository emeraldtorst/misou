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
    
    // Start the closing/opening animation sequence
    setTimeout(() => {
      setIsVisible(false);
      sessionStorage.setItem('misou_welcome_seen', 'true');
      // Restore scrolling
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }, 1200); // Allow panels to slide out first
  };

  // Auto-enter after 4 seconds of beautiful animation
  useEffect(() => {
    if (!shouldRender) return;
    const timer = setTimeout(() => {
      handleEnter();
    }, 4500);
    return () => clearTimeout(timer);
  }, [shouldRender]);

  if (!shouldRender || !isVisible) return null;

  // Animation variants
  const panelLeftVariants = {
    initial: { x: 0 },
    exit: { 
      x: '-100%', 
      transition: { duration: 1.2, ease: [0.77, 0, 0.175, 1] as const } 
    }
  };

  const panelRightVariants = {
    initial: { x: 0 },
    exit: { 
      x: '100%', 
      transition: { duration: 1.2, ease: [0.77, 0, 0.175, 1] as const } 
    }
  };

  const lineVariants = {
    initial: { scaleY: 0, opacity: 0 },
    animate: { 
      scaleY: 1, 
      opacity: 0.8,
      transition: { duration: 1.5, ease: 'easeInOut' as const }
    },
    exit: { 
      scaleY: 0, 
      opacity: 0,
      transition: { duration: 0.8, ease: 'easeIn' as const }
    }
  };

  const contentVariants = {
    initial: { opacity: 0, y: 30 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 1, delay: 0.4, ease: [0.25, 1, 0.5, 1] as const }
    },
    exit: { 
      opacity: 0, 
      y: -20,
      transition: { duration: 0.6, ease: 'easeIn' as const }
    }
  };

  return (
    <AnimatePresence>
      {!isOpening && (
        <div 
          className="welcome-carpet-container"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            display: 'flex',
            overflow: 'hidden',
            pointerEvents: 'auto'
          }}
        >
          {/* Left panel (representing one side of the curtain) */}
          <motion.div
            variants={panelLeftVariants}
            initial="initial"
            exit="exit"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '50.5vw', // Small overlap to prevent subpixel line gap
              height: '100%',
              backgroundColor: 'var(--color-bg-base)',
              backgroundImage: 'radial-gradient(circle at 100% 50%, rgba(22, 42, 34, 0.15), transparent 60%)',
              borderRight: '1px solid rgba(223, 193, 147, 0.08)',
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
              boxShadow: '10px 0 30px rgba(0,0,0,0.5)'
            }}
          />

          {/* Right panel (representing the other side of the curtain) */}
          <motion.div
            variants={panelRightVariants}
            initial="initial"
            exit="exit"
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              width: '50.5vw', // Small overlap to prevent subpixel line gap
              height: '100%',
              backgroundColor: 'var(--color-bg-base)',
              backgroundImage: 'radial-gradient(circle at 0% 50%, rgba(22, 42, 34, 0.15), transparent 60%)',
              borderLeft: '1px solid rgba(223, 193, 147, 0.08)',
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'center',
              boxShadow: '-10px 0 30px rgba(0,0,0,0.5)'
            }}
          />

          {/* Golden Ambient Glows */}
          <div 
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '600px',
              height: '600px',
              background: 'radial-gradient(circle, rgba(223, 193, 147, 0.04) 0%, transparent 70%)',
              pointerEvents: 'none',
              zIndex: 1
            }}
          />
          
          {/* Central Red Carpet / Katana Split Line */}
          <motion.div
            variants={lineVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            style={{
              position: 'absolute',
              top: 0,
              left: '50%',
              transform: 'translateX(-50%)',
              width: '2px',
              height: '100%',
              background: 'linear-gradient(to bottom, transparent, var(--color-crimson) 20%, var(--color-crimson) 80%, transparent)',
              boxShadow: '0 0 12px var(--color-crimson)',
              zIndex: 2,
              originY: 0.5
            }}
          />

          {/* Floating welcome greeting */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              zIndex: 3,
              padding: '2rem'
            }}
          >
            <motion.div
              variants={contentVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                maxWidth: '680px'
              }}
            >
              {/* Gold Crest / Icon */}
              <div 
                style={{ 
                  width: '50px', 
                  height: '50px', 
                  borderRadius: '50%', 
                  border: '1px solid var(--color-gold)', 
                  display: 'flex', 
                  justifyContent: 'center', 
                  alignItems: 'center',
                  marginBottom: '2rem',
                  boxShadow: '0 0 15px rgba(223, 193, 147, 0.2)'
                }}
              >
                <span style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 600 }}>M</span>
              </div>

              {/* Title */}
              <h1 
                style={{ 
                  fontFamily: 'var(--font-display)', 
                  fontSize: '3.5rem', 
                  letterSpacing: '0.4em', 
                  marginRight: '-0.4em',
                  color: 'var(--color-text-primary)',
                  marginBottom: '0.5rem',
                  textTransform: 'uppercase',
                  fontWeight: 500,
                  textShadow: '0 4px 10px rgba(0, 0, 0, 0.8)'
                }}
              >
                MISO·U
              </h1>

              {/* Red Line Divider */}
              <div 
                style={{ 
                  width: '80px', 
                  height: '1px', 
                  backgroundColor: 'var(--color-crimson)', 
                  margin: '1.2rem 0',
                  boxShadow: '0 0 5px var(--color-crimson)'
                }}
              />

              {/* Tagline */}
              <h2 
                style={{ 
                  fontFamily: 'var(--font-serif)', 
                  fontSize: '1.8rem', 
                  fontStyle: 'italic',
                  color: 'var(--color-gold)',
                  marginBottom: '1rem',
                  fontWeight: 400
                }}
              >
                {t('welcomeCarpet.tagline')}
              </h2>

              {/* Subtitle */}
              <p 
                style={{ 
                  fontFamily: 'var(--font-sans)', 
                  fontSize: '0.9rem', 
                  letterSpacing: '0.15em', 
                  color: 'var(--color-text-secondary)',
                  marginBottom: '3rem',
                  textTransform: 'uppercase',
                  opacity: 0.8
                }}
              >
                {t('welcomeCarpet.subtitle')}
              </p>

              {/* Interactive Enter Button representing rolling out the carpet */}
              <button
                onClick={handleEnter}
                style={{
                  background: 'transparent',
                  border: '1px solid var(--color-gold)',
                  padding: '1rem 2.5rem',
                  color: 'var(--color-text-primary)',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.85rem',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  borderRadius: '50px',
                  position: 'relative',
                  overflow: 'hidden',
                  outline: 'none',
                  transition: 'all 0.4s cubic-bezier(0.25, 1, 0.5, 1)',
                  boxShadow: '0 4px 20px rgba(223, 193, 147, 0.05)'
                }}
                className="welcome-enter-btn"
              >
                {t('welcomeCarpet.enter')}
              </button>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};
