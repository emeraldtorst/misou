import React from 'react';
import { motion } from 'framer-motion';

interface Review {
  author: string;
  role: string;
  text: string;
  rating: number;
  date: string;
}

const reviewsData: Review[] = [
  {
    author: "Maximilian H.",
    role: "Google Local Guide",
    text: "Uncompromising quality. The sushi mix and flamed mains were outstanding. The dark, modern interior with the glowing moon accent is absolutely stunning.",
    rating: 5,
    date: "1 week ago"
  },
  {
    author: "Sophie B.",
    role: "Google Reviews",
    text: "Mere steps from St. Stephen's. Incredible service, extremely attentive staff, and the sake pairing was a revelation. A perfect fine-dining fusion experience in Vienna.",
    rating: 5,
    date: "2 weeks ago"
  },
  {
    author: "Ji-Woo Kim",
    role: "Google Reviews",
    text: "A masterpiece of Asian fusion. The beef ramen has incredible depth of flavor and the chicken dumplings were handmade perfection. Highly recommended!",
    rating: 5,
    date: "3 weeks ago"
  },
  {
    author: "Andreas M.",
    role: "Google Local Guide",
    text: "Elegant, intimate, and modern. We sat in the lovely outdoor street terrace. Everything from the sushi rice to the matcha dessert was executed flawlessly.",
    rating: 5,
    date: "1 month ago"
  }
];

export const Reviews: React.FC = () => {
  return (
    <section className="reviews-section" id="reviews">
      <div className="section-container">
        
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '4rem' }}
        >
          <span className="section-number">05</span>
          <h2 className="section-title">The Guest Chronicles</h2>
          <p className="section-subtitle" style={{ maxWidth: '600px', margin: '0 auto' }}>
            Hear from our guests who have experienced our modern Asian dining journey in the heart of Vienna.
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
                  <span className="review-role">{review.role}</span>
                </div>
                <span className="review-date">{review.date}</span>
              </div>
              
              <div className="review-stars">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <svg key={i} className="star-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>

              <p className="review-text">“{review.text}”</p>
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
            Read All Google Reviews
          </a>
        </motion.div>

      </div>
    </section>
  );
};
