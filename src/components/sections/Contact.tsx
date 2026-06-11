import React from 'react';
import { motion } from 'framer-motion';

export const Contact: React.FC = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="section-container">
        <div className="contact-layout">

          <motion.div 
            className="contact-details-col"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <span className="section-number">05</span>
            <h2 className="section-title">Location & Contact</h2>

            <div className="contact-block">
              <span className="contact-label">Address</span>
              <a href="https://maps.google.com/?q=Marc+Aurel+Straße+2A,+1010+Wien" target="_blank" rel="noopener noreferrer" className="contact-value link-underline">
                Marc Aurel Straße 2A<br/>1010 Wien, Austria
              </a>
            </div>

            <div className="contact-block">
              <span className="contact-label">Reservations & Enquiries</span>
              <a href="tel:+436601288953" className="contact-value link-underline">+43 660 12 88 953</a>
              <a href="mailto:office@misou.online" className="contact-value link-underline">office@misou.online</a>
            </div>

            <div className="contact-block">
              <span className="contact-label">Opening Hours</span>
              <div className="hours-grid">
                <span className="hours-days">Sunday – Thursday</span>
                <span className="hours-time">11:11 – 22:22</span>
                <span className="hours-days">Friday – Saturday</span>
                <span className="hours-time">11:11 – 23:23</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="contact-map-col"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="map-frame-container">
              <div className="map-placeholder">
                <svg className="map-svg" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <radialGradient id="mapGlow" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#dfc193" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#0a0a0a" stopOpacity="0" />
                    </radialGradient>
                  </defs>
                  <path d="M 50 0 L 120 400" stroke="#1d1d1d" strokeWidth="3" fill="none" />
                  <path d="M 150 0 L 220 400" stroke="#1d1d1d" strokeWidth="2" fill="none" />
                  <path d="M 300 0 L 350 400" stroke="#1d1d1d" strokeWidth="3.5" fill="none" />
                  <path d="M 0 100 L 400 130" stroke="#1d1d1d" strokeWidth="3" fill="none" />
                  <path d="M 0 220 L 400 180" stroke="#1d1d1d" strokeWidth="4.5" fill="none" />
                  <path d="M 0 320 L 400 350" stroke="#1d1d1d" strokeWidth="2" fill="none" />

                  <path d="M 0 40 Q 200 80 400 30" stroke="#162a22" strokeWidth="8" fill="none" opacity="0.6" />
                  <path d="M 0 40 Q 200 80 400 30" stroke="#cca06a" strokeWidth="1" fill="none" opacity="0.3" />

                  <path className="target-street" d="M 180 50 L 210 240" stroke="#cca06a" strokeWidth="3" fill="none" opacity="0.7" />

                  <path d="M 10 380 Q 200 300 390 380" stroke="#2a2a2a" strokeWidth="5" fill="none" strokeDasharray="10 5" />

                  <circle cx="197" cy="148" r="40" fill="url(#mapGlow)" />
                  <motion.circle 
                    className="map-pulse" 
                    cx="197" cy="148" r="8" fill="#dfc193" 
                    animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  />
                  <circle cx="197" cy="148" r="4" fill="#0a0a0a" />
                </svg>
                <div className="map-label">
                  <span className="map-label-title">MISO•U</span>
                  <span className="map-label-desc">Marc Aurel Straße 2A</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
