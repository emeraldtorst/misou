import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const Lounge: React.FC = () => {
  const { scrollYProgress } = useScroll();
  // Simplified parallax for the background image
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  return (
    <section className="lounge-section" id="lounge" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="lounge-bg-wrapper" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
        <motion.div 
          className="lounge-parallax-bg" 
          style={{ 
            backgroundImage: "url('images/wine_lounge.png')", 
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
        <div className="lounge-overlay" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(10, 10, 10, 0.6)' }}></div>
      </div>

      <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="lounge-content-layout">
          <motion.div 
            className="lounge-text-panel"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <span className="section-number text-gold">03</span>
            <h2 className="section-title">The Lounge & Libations</h2>
            <p className="lounge-lead">
              An evening dining experience extends far beyond the plate. Our lounge offers a quiet sanctuary of smoked glass, warm metal accents, and rare vintages.
            </p>
            <p className="lounge-body">
              Our cellar bridges continents. Discover an extraordinary selection of organic Austrian wines, Grand Cru Champagnes, and small-batch Japanese sakes sourced directly from boutique brewers in Kyoto and Niigata. Each sake is selected for its clean minerality to complement our rich fusion flavors.
            </p>

            <div className="lounge-features">
              <div className="lounge-feature-item">
                <span className="feature-title">East-West Pairings</span>
                <span className="feature-desc">Curated sake & wine flights adjusted weekly.</span>
              </div>
              <div className="lounge-feature-item">
                <span className="feature-title">Botanical Cocktails</span>
                <span className="feature-desc">House infusions using fresh shiso leaf, yuzu juice, and smoked wood.</span>
              </div>
            </div>

            <a href="#menu" className="btn btn-outline btn-gold" style={{ marginTop: '20px', display: 'inline-block' }}>Explore Drinks</a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
