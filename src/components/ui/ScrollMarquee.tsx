import React from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const items = [
  'Asian Fusion', '·', 'Marc Aurel Straße', '·', 'Vienna', '·',
  'Finest Sushi', '·', 'Sake Pairings', '·', 'Since 2021', '·',
  'Asian Fusion', '·', 'Marc Aurel Straße', '·', 'Vienna', '·',
  'Finest Sushi', '·', 'Sake Pairings', '·', 'Since 2021', '·',
];

export const ScrollMarquee: React.FC = () => {
  const { scrollY } = useScroll();
  const x = useTransform(scrollY, [0, 5000], [0, -1200]);
  const xSmooth = useSpring(x, { damping: 50, stiffness: 200, mass: 0.5 });

  const xReverse = useTransform(scrollY, [0, 5000], [0, 1200]);
  const xReverseSmooth = useSpring(xReverse, { damping: 50, stiffness: 200, mass: 0.5 });

  return (
    <div className="scroll-marquee-wrapper" aria-hidden="true">
      {/* Forward marquee */}
      <div className="marquee-track">
        <motion.div className="marquee-inner" style={{ x: xSmooth }}>
          {items.map((item, i) => (
            <span key={i} className={`marquee-item ${item === '·' ? 'marquee-dot' : ''}`}>
              {item}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Reverse marquee */}
      <div className="marquee-track marquee-track-reverse">
        <motion.div className="marquee-inner" style={{ x: xReverseSmooth }}>
          {[...items].reverse().map((item, i) => (
            <span key={i} className={`marquee-item ${item === '·' ? 'marquee-dot' : ''}`}>
              {item}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
