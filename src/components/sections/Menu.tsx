import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { MagneticButton } from '../ui/MagneticButton';

interface MenuPillar {
  id: string;
  category: string;
  title: string;
  bgImage: string;
  items: string[];
}

export const Menu: React.FC = () => {
  const { t, language } = useLanguage();
  const [activePillar, setActivePillar] = useState<string>('korean');

  const menuPillars: MenuPillar[] = [
    {
      id: 'korean',
      category: t('menu.categories.mains'),
      title: 'Korean Tischgrill & Classics',
      bgImage: 'images/f9.jpeg',
      items: [
        'Samgyeopsal Tischgrill',
        'Budae Jjigae',
        'Bulgogi Beef',
        'Korean Fried Chicken'
      ]
    },
    {
      id: 'sushi',
      category: t('menu.categories.sushi'),
      title: 'Premium Sushi & Rolls',
      bgImage: 'images/f15.jpeg',
      items: [
        'MISO·U Signature Plate',
        'Dragon Roll',
        'Rainbow Roll',
        'Spicy Tuna Tempura Roll'
      ]
    },
    {
      id: 'drinks',
      category: t('menu.categories.drinks'),
      title: 'Crafted Libations & Sweets',
      bgImage: 'images/drink2.jpeg',
      items: [
        'Lychee Spritz',
        'Yuzu Tea Spritz',
        'Matcha Tiramisu',
        'Mama Omakase Selection'
      ]
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] as const }
    }
  };

  const menuPdf = language === 'de' 
    ? 'https://res.cloudinary.com/b08mrui7/image/upload/v1784304475/menu-de_zzndw2.pdf' 
    : 'https://res.cloudinary.com/b08mrui7/image/upload/v1784304477/menu-en_x4rczg.pdf';

  return (
    <section className="menu-section" id="menu" style={{ position: 'relative', overflow: 'hidden', padding: '8rem 0' }}>
      <div className="section-container" style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
        
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}
        >
          <div className="header-number-wrap" style={{ alignItems: 'center' }}>
            <span className="section-number">02</span>
            <h2 className="section-title">{t('menu.title')}</h2>
          </div>
          <p className="section-subtitle" style={{ textAlign: 'center', marginBottom: '3rem', maxWidth: '600px' }}>
            {t('menu.subtitle')}
          </p>
        </motion.div>

        {/* PDF Link Button */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '3.5rem' }}>
          <MagneticButton 
            as="a" 
            href={menuPdf} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-primary btn-large"
            style={{ display: 'inline-flex', gap: '10px' }}
          >
            {t('menu.viewPdf')}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </MagneticButton>
        </div>

        {/* Premium Grid Showcase */}
        <motion.div 
          className="menu-grid-container"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {menuPillars.map((pillar) => (
            <motion.div 
              key={pillar.id}
              className={`menu-showcase-card ${activePillar === pillar.id ? 'active-card' : ''}`}
              variants={cardVariants}
              onClick={() => setActivePillar(pillar.id)}
            >
              <div className="menu-card-bg-wrap">
                <div 
                  className="menu-card-bg" 
                  style={{ backgroundImage: `url('${pillar.bgImage}')` }}
                />
              </div>
              <div className="menu-card-overlay" />
              
              <div className="menu-card-content">
                <span className="menu-card-category">{pillar.category}</span>
                <h3 className="menu-card-title">{pillar.title}</h3>
                <div className="menu-card-divider" />
                <div className="menu-card-items">
                  {pillar.items.map((item, index) => (
                    <span key={index} className="menu-card-item">{item}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile large visual card showing category pictures as big as possible */}
        <div className="menu-mobile-showcase-container">
          <AnimatePresence mode="wait">
            <motion.div
              key={activePillar}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.4 }}
              className="menu-mobile-large-card"
              style={{ backgroundImage: `url('${menuPillars.find(p => p.id === activePillar)?.bgImage}')` }}
            >
              <div className="menu-mobile-large-overlay" />
              <div className="menu-mobile-large-content">
                <div className="menu-mobile-large-items">
                  {menuPillars.find(p => p.id === activePillar)?.items.map((item, index) => (
                    <span key={index} className="menu-mobile-large-item">{item}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
