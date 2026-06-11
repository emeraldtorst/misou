import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const Contact: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);

  return (
    <section className="contact-section" id="contact" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="section-bg-wrapper" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
        <motion.div 
          style={{ 
            backgroundImage: "url('images/resoutside.jpeg')", 
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
        <div className="contact-layout">

          <motion.div 
            className="contact-details-col"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <span className="section-number">06</span>
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
                <span className="hours-days">Tuesday – Friday</span>
                <span className="hours-time">11:00 am – 10:00 pm</span>
                <span className="hours-days">Saturday – Sunday</span>
                <span className="hours-time">12:00 pm – 10:00 pm</span>
                <span className="hours-days">Monday</span>
                <span className="hours-time" style={{ color: 'var(--color-crimson)' }}>Closed</span>
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
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2658.7495574548483!2d16.371283677274092!3d48.21183184534164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476d079e0a0d421d%3A0xe54d4ff46b9d62d2!2sMarc-Aurel-Stra%C3%9Fe%202A%2C%201010%20Wien!5e0!3m2!1sen!2sat!4v1718131364539!5m2!1sen!2sat"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="MISO·U Location Map"
              ></iframe>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
