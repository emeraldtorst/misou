
import { motion, useScroll, useTransform } from 'framer-motion';
import { CustomCursor } from './components/ui/CustomCursor';
import { ScrollMarquee } from './components/ui/ScrollMarquee';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { PhotoMosaic } from './components/sections/PhotoMosaic';
import { Ambience } from './components/sections/Ambience';
import { Menu } from './components/sections/Menu';
import { Lounge } from './components/sections/Lounge';
import { Midday } from './components/sections/Midday';
import { Reviews } from './components/sections/Reviews';
import { Contact } from './components/sections/Contact';

function App() {
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
        <Lounge />
        <Midday />
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
            <div className="booking-cta-content">
              <span className="booking-sub">EXPERIENCE MISO·U</span>
              <h2 className="booking-title">Secure Your Seat at the Table</h2>
              <p className="booking-text">
                Due to intimate seating layout, we highly recommend planning your reservation in advance. Enjoy custom-tailored dinner tasting journeys or custom drink pairings.
              </p>
              <a href="https://www.quandoo.at/en/place/miso-u-103470/menu" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-large">Create Reservation</a>
            </div>
          </div>
        </section>
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
