import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { CustomCursor } from './components/ui/CustomCursor';
import { ScrollMarquee } from './components/ui/ScrollMarquee';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { PhotoMosaic } from './components/sections/PhotoMosaic';
import { Ambience } from './components/sections/Ambience';
import { Menu } from './components/sections/Menu';
import { Reviews } from './components/sections/Reviews';
import { Contact } from './components/sections/Contact';
import { FloatingDock } from './components/ui/FloatingDock';
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'book-a-table': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
        id?: string;
        lang?: string;
        languages?: string;
        header?: string;
        'primary-color'?: string;
        'render-method'?: string;
        'button-label'?: string;
        'button-size'?: string;
        'button-color'?: string;
        'z-index'?: string;
        'button-position'?: string;
      }, HTMLElement>;
    }
  }
}


function AppContent() {
  const { t, language } = useLanguage();
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);

  return (
    <>
      {/* Ambient Lighting & Layered Background */}
      <div className="ambient-glow" id="glow1"></div>
      <div className="ambient-glow" id="glow2"></div>
      <div className="katana-spine katana-spine-left"></div>
      <div className="katana-spine katana-spine-right"></div>
      <div className="noise-overlay"></div>

      <CustomCursor />
      
      <Header />
      
      <main>
        <Hero />
        <ScrollMarquee />
        <Ambience />
        <PhotoMosaic />
        <Menu />
        <Reviews />
        <section className="booking-cta-section" style={{ position: 'relative', overflow: 'hidden' }}>
          <div className="section-bg-wrapper" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
            <motion.div 
              style={{ 
                backgroundImage: "url('images/res5.jpeg')", 
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
          <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>
            <div className="booking-cta-content" style={{ maxWidth: '800px' }}>
              <span className="booking-sub">{t('booking.sub')}</span>
              <h2 className="booking-title">{t('booking.title')}</h2>
              <p className="booking-text">
                {t('booking.text')}
              </p>
              
              <div 
                className="booking-widget-card" 
                style={{
                  marginTop: '2.5rem',
                  background: 'rgba(18, 18, 18, 0.65)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(223, 193, 147, 0.2)',
                  borderRadius: '16px',
                  padding: '2rem',
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.5)',
                  margin: '2rem auto 0 auto',
                  maxWidth: '600px'
                }}
              >
                <div style={{ textAlign: 'left' }}>
                  <book-a-table 
                    id="BATr49A62nAkQ" 
                    lang={language} 
                    languages="de,en" 
                    header="false" 
                    primary-color="#d90429"
                  />
                </div>

                <div style={{ 
                  marginTop: '1.5rem', 
                  borderTop: '1px solid rgba(255, 255, 255, 0.08)', 
                  paddingTop: '1rem',
                  fontSize: '0.85rem',
                  color: 'var(--color-text-secondary)',
                  fontFamily: 'var(--font-sans)',
                  textAlign: 'center'
                }}>
                  {language === 'de' ? (
                    <>
                      Probleme mit dem Buchungsformular?{' '}
                      <a 
                        href="https://www.gastro.site/reserve?id=BATr49A62nAkQ&details=yes" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="link-underline"
                        style={{ color: 'var(--color-gold)', fontWeight: 500 }}
                      >
                        Direkt reservieren
                      </a>
                    </>
                  ) : (
                    <>
                      Having trouble with the reservation form?{' '}
                      <a 
                        href="https://www.gastro.site/reserve?id=BATr49A62nAkQ&details=yes" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="link-underline"
                        style={{ color: 'var(--color-gold)', fontWeight: 500 }}
                      >
                        Book directly on Gastro.site
                      </a>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
        <Contact />
      </main>

      <Footer />

      <FloatingDock />
    </>
  );
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;
