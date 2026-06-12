import React, { useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { MagneticButton } from '../ui/MagneticButton';

interface MenuItem {
  name: string;
  price: string;
  desc: string;
}

interface MenuCategory {
  id: string;
  name: string;
  items: MenuItem[];
}

export const Menu: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('starters');
  const { t } = useLanguage();
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);

  const menuCategories: MenuCategory[] = [
    {
      id: 'starters',
      name: t('menu.categories.starters'),
      items: [
        { name: "Edamame Sea Salt", price: "€ 6.50", desc: t('menu.items.edamame') },
        { name: "Crispy Gyoza", price: "€ 8.50", desc: t('menu.items.gyoza') },
        { name: "Tartare Duo", price: "€ 16.00", desc: t('menu.items.tartare') },
        { name: "Truffle Edamame", price: "€ 8.00", desc: t('menu.items.truffleEdamame') },
        { name: "Summerroll Shrimps", price: "€ 7.00", desc: t('menu.items.summerrollShrimps') },
        { name: "Tteokbokki", price: "€ 7.00", desc: t('menu.items.tteokbokki') },
        { name: "Crispy Wan Tan", price: "€ 7.00", desc: t('menu.items.crispyWanTan') }
      ]
    },
    {
      id: 'sushi',
      name: t('menu.categories.sushi'),
      items: [
        { name: "Flamed Salmon Roll", price: "€ 18.00", desc: t('menu.items.flamedSalmon') },
        { name: "Truffle Tuna Roll", price: "€ 19.50", desc: t('menu.items.truffleTuna') },
        { name: "Premium Sashimi Mix", price: "€ 29.00", desc: t('menu.items.sashimi') },
        { name: "Dragon Roll", price: "€ 21.00", desc: t('menu.items.dragon') },
        { name: "Chong Li Masterplate", price: "€ 59.00", desc: t('menu.items.chongLiMasterplate') },
        { name: "Spicy Tuna Tempura", price: "€ 18.00", desc: t('menu.items.spicyTunaTempura') },
        { name: "Rainbow Roll", price: "€ 15.00", desc: t('menu.items.rainbowRoll') }
      ]
    },
    {
      id: 'mains',
      name: t('menu.categories.mains'),
      items: [
        { name: "Black Cod Miso", price: "€ 32.00", desc: t('menu.items.cod') },
        { name: "Flame-Seared Beef Ribs", price: "€ 28.50", desc: t('menu.items.ribs') },
        { name: "Crispy Duck Breast", price: "€ 24.50", desc: t('menu.items.duck') },
        { name: "Truffle Ribeye Steak", price: "€ 38.00", desc: t('menu.items.ribeye') },
        { name: "Bulgogi Beef", price: "€ 16.00", desc: t('menu.items.bulgogiBeef') },
        { name: "Korean Fried Chicken", price: "€ 15.00", desc: t('menu.items.koreanFriedChicken') },
        { name: "Bibimbap Beef", price: "€ 15.00", desc: t('menu.items.bibimbapBeef') }
      ]
    },
    {
      id: 'drinks',
      name: t('menu.categories.drinks'),
      items: [
        { name: "Botanical Yuzu Sour", price: "€ 14.50", desc: t('menu.items.yuzuSour') },
        { name: "Shiso Mojito", price: "€ 12.00", desc: t('menu.items.mojito') },
        { name: "Matcha Mochi Duo", price: "€ 7.50", desc: t('menu.items.mochi') },
        { name: "Chocolate Lava Cake", price: "€ 9.50", desc: t('menu.items.cake') },
        { name: "Matcha Tiramisu", price: "€ 9.00", desc: t('menu.items.matchaTiramisu') },
        { name: "Seoul Meets Tequila", price: "€ 12.00", desc: t('menu.items.seoulMeetsTequila') },
        { name: "Genmaicha Sour", price: "€ 12.00", desc: t('menu.items.genmaichaSour') }
      ]
    }
  ];

  return (
    <section className="menu-section" id="menu" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="section-bg-wrapper" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
        <motion.div 
          style={{ 
            backgroundImage: "url('images/res4.jpeg')", 
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
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(6, 6, 6, 0.85)' }}></div>
      </div>

      <div className="section-container" style={{ padding: '6rem 0', position: 'relative', zIndex: 1 }}>
        
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
          <p className="section-subtitle" style={{ textAlign: 'center', marginBottom: '3rem' }}>
            {t('menu.subtitle')}
          </p>
        </motion.div>

        {/* Interactive Inline Menu Container */}
        <div className="menu-inline-container">
          <div className="menu-inline-tabs">
            {menuCategories.map((cat) => (
              <button
                key={cat.id}
                className={`menu-tab-btn ${activeTab === cat.id ? 'active' : ''}`}
                onClick={() => setActiveTab(cat.id)}
              >
                {cat.name}
              </button>
            ))}
          </div>

          <div className="menu-inline-content">
            <AnimatePresence mode="wait">
              {menuCategories.map((cat) => 
                activeTab === cat.id && (
                  <motion.div
                    key={cat.id}
                    className="menu-panel-content active"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="menu-items-grid">
                      {cat.items.map((item, index) => (
                        <div key={index} className="menu-item">
                          <div className="item-title-price">
                            <span className="item-name">{item.name}</span>
                            <span className="item-price">{item.price}</span>
                          </div>
                          <p className="item-desc">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* PDF Link Button */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '4rem' }}>
          <MagneticButton 
            as="a" 
            href="/menu.pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-outline btn-large"
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

      </div>
    </section>
  );
};
