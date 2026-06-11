import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

interface Review {
  author: string;
  roleKey: string;
  textKey: string;
  rating: number;
  dateKey: string;
}

export const Reviews: React.FC = () => {
  const { t } = useLanguage();
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);

  const reviewsData: Review[] = [
    {
      author: "Maximilian H.",
      roleKey: "reviews.r1Role",
      textKey: "reviews.r1",
      rating: 5,
      dateKey: "reviews.r1Date"
    },
    {
      author: "Sophie B.",
      roleKey: "reviews.r2Role",
      textKey: "reviews.r2",
      rating: 5,
      dateKey: "reviews.r2Date"
    },
    {
      author: "Ji-Woo Kim",
      roleKey: "reviews.r3Role",
      textKey: "reviews.r3",
      rating: 5,
      dateKey: "reviews.r3Date"
    },
    {
      author: "Andreas M.",
      roleKey: "reviews.r4Role",
      textKey: "reviews.r4",
      rating: 5,
      dateKey: "reviews.r4Date"
    }
  ];

  return (
    <section className="reviews-section" id="reviews" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="section-bg-wrapper" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
        <motion.div 
          style={{ 
            backgroundImage: "url('images/res7.jpeg')", 
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
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(6, 6, 6, 0.88)' }}></div>
      </div>

      <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>
        
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '4rem' }}
        >
          <span className="section-number">05</span>
          <h2 className="section-title">{t('reviews.title')}</h2>
          <p className="section-subtitle" style={{ maxWidth: '600px', margin: '0 auto' }}>
            {t('reviews.subtitle')}
          </p>
        </motion.div>

        <div className="reviews-grid">
          {reviewsData.map((review, index) => (
            <motion.div 
              key={index}
              className="review-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="review-header">
                <div className="review-meta">
                  <span className="review-author">{review.author}</span>
                  <span className="review-role">{t(review.roleKey)}</span>
                </div>
                <span className="review-date">{t(review.dateKey)}</span>
              </div>
              
              <div className="review-stars">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <svg key={i} className="star-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>

              <p className="review-text">“{t(review.textKey)}”</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="reviews-cta"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{ textAlign: 'center', marginTop: '4rem' }}
        >
          <a 
            href="https://www.google.com/maps/place/Miso%E2%80%A2U+Restaurant/@48.2115145,16.3725534!16s%2Fg%2F11mc9fkfh3" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-outline"
          >
            {t('reviews.readMore')}
          </a>
        </motion.div>

      </div>
    </section>
  );
};
