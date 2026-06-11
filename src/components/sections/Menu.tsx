import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

const menuCategories: MenuCategory[] = [
  {
    id: 'starters',
    name: 'Starters',
    items: [
      { name: "Edamame Sea Salt", price: "€ 6.50", desc: "Steamed soybeans, Maldon sea salt flakes, lime zest." },
      { name: "Crispy Gyoza", price: "€ 8.50", desc: "Handmade chicken dumplings, sweet chili soy, spring onion." },
      { name: "Tartare Duo", price: "€ 16.00", desc: "Seared tuna & salmon tartare, avocado mousse, shiso chips." },
      { name: "Truffle Edamame", price: "€ 8.00", desc: "Steamed soybeans tossed in premium white truffle oil and sea salt." }
    ]
  },
  {
    id: 'sushi',
    name: 'Sushi & Rolls',
    items: [
      { name: "Flamed Salmon Roll", price: "€ 18.00", desc: "Avocado, cucumber, wrapped with flame-seared salmon, teriyaki, spicy mayo." },
      { name: "Truffle Tuna Roll", price: "€ 19.50", desc: "Bluefin tuna, truffle paste, cucumber, crispy tempura flakes." },
      { name: "Premium Sashimi Mix", price: "€ 29.00", desc: "Selection of 12 slices of fresh raw fish (Salmon, Tuna, Seabass)." },
      { name: "Dragon Roll", price: "€ 21.00", desc: "Crispy tempura prawn, cucumber, wrapped in avocado slices and unagi sauce." }
    ]
  },
  {
    id: 'mains',
    name: 'Mains',
    items: [
      { name: "Black Cod Miso", price: "€ 32.00", desc: "Sweet white miso marinade, baby bok choy, pickled ginger sprout." },
      { name: "Flame-Seared Beef Ribs", price: "€ 28.50", desc: "Slow-cooked beef ribs, sweet soy glaze, wasabi potato purée." },
      { name: "Crispy Duck Breast", price: "€ 24.50", desc: "Seared duck, orange-hoisin glaze, roasted root vegetables." },
      { name: "Truffle Ribeye Steak", price: "€ 38.00", desc: "Grilled prime ribeye, Japanese black pepper sauce, roasted mushrooms." }
    ]
  },
  {
    id: 'drinks',
    name: 'Libations & Sweets',
    items: [
      { name: "Botanical Yuzu Sour", price: "€ 14.50", desc: "Japanese gin, fresh yuzu juice, shiso simple syrup, egg white." },
      { name: "Shiso Mojito", price: "€ 12.00", desc: "White rum, lime, muddled shiso leaf, club soda." },
      { name: "Matcha Mochi Duo", price: "€ 7.50", desc: "Sweet rice cakes filled with premium Uji matcha ice cream." },
      { name: "Chocolate Lava Cake", price: "€ 9.50", desc: "Warm cake with a molten core, served with black sesame ice cream." }
    ]
  }
];

export const Menu: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('starters');

  return (
    <section className="menu-section" id="menu">
      <div className="section-container" style={{ padding: '6rem 0' }}>
        
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
            <h2 className="section-title">The Culinary Archives</h2>
          </div>
          <p className="section-subtitle" style={{ textAlign: 'center', marginBottom: '3rem' }}>
            Explore our curated selections of hand-crafted Asian fusion plates, signature sushi, and premium cocktails.
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
            View Full PDF Menu
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
