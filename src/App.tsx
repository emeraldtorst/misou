
import { CustomCursor } from './components/ui/CustomCursor';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { Ambience } from './components/sections/Ambience';
import { Menu } from './components/sections/Menu';
import { Lounge } from './components/sections/Lounge';
import { Midday } from './components/sections/Midday';
import { Contact } from './components/sections/Contact';

function App() {
  return (
    <>
      {/* Ambient Lighting & Layered Background */}
      <div className="ambient-glow" id="glow1"></div>
      <div className="ambient-glow" id="glow2"></div>
      <div className="noise-overlay"></div>

      <CustomCursor />
      
      <Header />
      
      <main>
        <Hero />
        <Ambience />
        <Menu />
        <Lounge />
        <Midday />
        <section className="booking-cta-section">
          <div className="booking-cta-overlay"></div>
          <div className="section-container">
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
