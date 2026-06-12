import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

export const ScrollMarquee: React.FC = () => {
  const { tArray } = useLanguage();

  const items1: string[] = tArray('marquee.items1') || [];
  const items2: string[] = tArray('marquee.items2') || [];

  return (
    <div className="scroll-marquee-wrapper" aria-hidden="true" style={{ overflow: 'hidden' }}>
      {/* Forward marquee */}
      <div className="marquee-track">
        <motion.div 
          className="marquee-inner"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 25,
            repeat: Infinity
          }}
        >
          {/* First set */}
          {items1.map((item, i) => (
            <React.Fragment key={`items1-1-${i}`}>
              <span className="marquee-item">{item}</span>
              <span className="marquee-item marquee-dot">·</span>
            </React.Fragment>
          ))}
          {/* Duplicate set for seamless looping */}
          {items1.map((item, i) => (
            <React.Fragment key={`items1-2-${i}`}>
              <span className="marquee-item">{item}</span>
              <span className="marquee-item marquee-dot">·</span>
            </React.Fragment>
          ))}
        </motion.div>
      </div>

      {/* Reverse marquee */}
      <div className="marquee-track marquee-track-reverse">
        <motion.div 
          className="marquee-inner"
          animate={{ x: ["-50%", "0%"] }}
          transition={{
            ease: "linear",
            duration: 25,
            repeat: Infinity
          }}
        >
          {/* First set */}
          {items2.map((item, i) => (
            <React.Fragment key={`items2-1-${i}`}>
              <span className="marquee-item">{item}</span>
              <span className="marquee-item marquee-dot">·</span>
            </React.Fragment>
          ))}
          {/* Duplicate set for seamless looping */}
          {items2.map((item, i) => (
            <React.Fragment key={`items2-2-${i}`}>
              <span className="marquee-item">{item}</span>
              <span className="marquee-item marquee-dot">·</span>
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
