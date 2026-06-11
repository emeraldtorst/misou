import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Menu: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'food' | 'drinks' | 'lunch'>('food');

  return (
    <section className="menu-section" id="menu">
      <div className="section-container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="header-number-wrap">
            <span className="section-number">02</span>
            <h2 className="section-title">The Culinary Archives</h2>
          </div>
          <p className="section-subtitle">
            Explore our comprehensive archives of hand-crafted Asian fusion plates, organic wine pairings, and midday lunch sets.
          </p>
        </motion.div>

        <div className="menu-inline-container">
          <div className="menu-inline-tabs" style={{ position: 'relative', zIndex: 50 }}>
            <button 
              type="button" 
              className={`menu-tab-btn ${activeTab === 'food' ? 'active' : ''}`} 
              onClick={() => setActiveTab('food')}
              style={{ position: 'relative', zIndex: 50, pointerEvents: 'auto' }}
            >
              Food Menu
            </button>
            <button 
              type="button" 
              className={`menu-tab-btn ${activeTab === 'drinks' ? 'active' : ''}`} 
              onClick={() => setActiveTab('drinks')}
              style={{ position: 'relative', zIndex: 50, pointerEvents: 'auto' }}
            >
              Drinks & Wine
            </button>
            <button 
              type="button" 
              className={`menu-tab-btn ${activeTab === 'lunch' ? 'active' : ''}`} 
              onClick={() => setActiveTab('lunch')}
              style={{ position: 'relative', zIndex: 50, pointerEvents: 'auto' }}
            >
              Lunch Bento
            </button>
          </div>

          <div className="menu-inline-content">
            <AnimatePresence mode="wait">
              {activeTab === 'food' && (
                <motion.div 
                  key="food"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="menu-panel-content active"
                >
                  <div className="menu-category-section">
                    <h3 className="menu-cat-title">Starters & Rolls</h3>
                    <div className="menu-items-grid">
                      <div className="menu-item">
                        <div className="item-title-price">
                          <h4 className="item-name">Kimchijeon <span className="text-gold" style={{ fontSize: '0.65rem', fontWeight: 300 }}>A,C,F,N</span></h4>
                          <span className="item-price">€ 7.00</span>
                        </div>
                        <p className="item-desc">Savory Korean pancake with kimchi, spring onion, zucchini, and egg.</p>
                      </div>
                      <div className="menu-item">
                        <div className="item-title-price">
                          <h4 className="item-name">Gyoza (Chicken / Veggie) <span className="text-gold" style={{ fontSize: '0.65rem', fontWeight: 300 }}>A,F,N</span></h4>
                          <span className="item-price">€ 6.00</span>
                        </div>
                        <p className="item-desc">Steamed and pan-fried dumplings with chicken or veggie, served with mandu sauce.</p>
                      </div>
                      <div className="menu-item">
                        <div className="item-title-price">
                          <h4 className="item-name">Crispy Wan Tan <span className="text-gold" style={{ fontSize: '0.65rem', fontWeight: 300 }}>A,B</span></h4>
                          <span className="item-price">€ 7.00</span>
                        </div>
                        <p className="item-desc">Knusprige hausgemachte Teigtaschen stuffed with chicken, shrimps, and shiitake.</p>
                      </div>
                      <div className="menu-item">
                        <div className="item-title-price">
                          <h4 className="item-name">Summerroll Shrimps <span className="text-gold" style={{ fontSize: '0.65rem', fontWeight: 300 }}>B,E</span></h4>
                          <span className="item-price">€ 7.00</span>
                        </div>
                        <p className="item-desc">Fresh rice paper with shrimp, rice noodles, coriander, and mint.</p>
                      </div>
                    </div>
                  </div>

                  <div className="menu-category-section">
                    <h3 className="menu-cat-title">Sushi Craft & 8pcs Rolls</h3>
                    <div className="menu-items-grid">
                      <div className="menu-item">
                        <div className="item-title-price">
                          <h4 className="item-name">Chong Li Masterplate <span className="text-gold" style={{ fontSize: '0.65rem', fontWeight: 300 }}>A,B,C,D,F,N,R</span></h4>
                          <span className="item-price">€ 59 / € 99</span>
                        </div>
                        <p className="item-desc">2 Pax. 36 or 72 pieces of hand-selected premium sushi, served with miso soups or edamame.</p>
                      </div>
                      <div className="menu-item">
                        <div className="item-title-price">
                          <h4 className="item-name">Rainbow Roll <span className="text-gold" style={{ fontSize: '0.65rem', fontWeight: 300 }}>B,D,N</span></h4>
                          <span className="item-price">€ 15.00</span>
                        </div>
                        <p className="item-desc">An elegant roll decorated with a selection of different types of fresh fish.</p>
                      </div>
                      <div className="menu-item">
                        <div className="item-title-price">
                          <h4 className="item-name">Spicy Tuna Roll <span className="text-gold" style={{ fontSize: '0.65rem', fontWeight: 300 }}>B</span></h4>
                          <span className="item-price">€ 15.00</span>
                        </div>
                        <p className="item-desc">Spicy tuna blend, special creation by our sushi master Chong Li.</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'drinks' && (
                <motion.div 
                  key="drinks"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="menu-panel-content active"
                >
                  <div className="menu-category-section">
                    <h3 className="menu-cat-title">Aperitifs & Signature Cocktails</h3>
                    <div className="menu-items-grid">
                      <div className="menu-item">
                        <div className="item-title-price">
                          <h4 className="item-name">Lychee Spritz</h4>
                          <span className="item-price">€ 8.00</span>
                        </div>
                        <p className="item-desc">Lychee liqueur, Prosecco, fresh lemon juice.</p>
                      </div>
                      <div className="menu-item">
                        <div className="item-title-price">
                          <h4 className="item-name">Yuzu Tea Spritz</h4>
                          <span className="item-price">€ 8.00</span>
                        </div>
                        <p className="item-desc">Yuzu sake, home-brewed yuzu tea, Prosecco, soda.</p>
                      </div>
                      <div className="menu-item">
                        <div className="item-title-price">
                          <h4 className="item-name">Tokyo Glow</h4>
                          <span className="item-price">€ 12.00</span>
                        </div>
                        <p className="item-desc">Midori melon liqueur, pineapple juice, lemon, eggwhite.</p>
                      </div>
                    </div>
                  </div>
                  <div className="menu-category-section">
                    <h3 className="menu-cat-title">Wines & Sparkling (750ml)</h3>
                    <div className="menu-items-grid">
                      <div className="menu-item">
                        <div className="item-title-price">
                          <h4 className="item-name">Grüner Veltliner Smaragd 2024</h4>
                          <span className="item-price">€ 33.00</span>
                        </div>
                        <p className="item-desc">Domäne Wachau Federspiel Ried Kaiserberg DAC | 12.5% ABV</p>
                      </div>
                      <div className="menu-item">
                        <div className="item-title-price">
                          <h4 className="item-name">Puligny Montrachet 2022</h4>
                          <span className="item-price">€ 135.00</span>
                        </div>
                        <p className="item-desc">Faiveley 1er Cru Les Champgains, Burgund | 13.5% ABV</p>
                      </div>
                      <div className="menu-item">
                        <div className="item-title-price">
                          <h4 className="item-name">Roederer 246 Champagne</h4>
                          <span className="item-price">€ 100.00</span>
                        </div>
                        <p className="item-desc">Grand Cru prestige Champagne.</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'lunch' && (
                <motion.div 
                  key="lunch"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="menu-panel-content active"
                >
                  <div className="menu-category-section">
                    <h3 className="menu-cat-title">Midday Bento Selections</h3>
                    <p className="menu-section-desc">Served Monday–Friday, 11:11 – 15:00. Includes a side of traditional miso soup.</p>
                    <div className="menu-items-grid">
                      <div className="menu-item">
                        <div className="item-title-price">
                          <h4 className="item-name">Salmon A La Miso Bento Set</h4>
                          <span className="item-price">€ 19.00</span>
                        </div>
                        <p className="item-desc">Miso-glazed grilled salmon fillet, wok vegetables, jasmine rice, and a fresh summer roll starter.</p>
                      </div>
                      <div className="menu-item">
                        <div className="item-title-price">
                          <h4 className="item-name">Bulgogi Beef Bento Set</h4>
                          <span className="item-price">€ 16.50</span>
                        </div>
                        <p className="item-desc">Marinated bulgogi beef stir-fried with onion and carrots, served with rice and salted edamame.</p>
                      </div>
                      <div className="menu-item">
                        <div className="item-title-price">
                          <h4 className="item-name">Veggie Udon & Gyoza Combo (v)</h4>
                          <span className="item-price">€ 14.50</span>
                        </div>
                        <p className="item-desc">Thick udon noodles sautéed with garden vegetables, paired with three crispy pan-fried veggie gyozas.</p>
                      </div>
                      <div className="menu-item">
                        <div className="item-title-price">
                          <h4 className="item-name">Midday Sushi Mix Set</h4>
                          <span className="item-price">€ 15.00</span>
                        </div>
                        <p className="item-desc">A selection of chef's midday sushi rolls: 4 pieces of Nigiri, 3 pieces of Maki, served with salted edamame.</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
