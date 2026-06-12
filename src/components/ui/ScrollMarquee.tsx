import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

export const ScrollMarquee: React.FC = () => {
  const { tArray } = useLanguage();

  const items1: string[] = tArray('marquee.items1') || [];
  const items2: string[] = tArray('marquee.items2') || [];
  const allItems = [...items1, ...items2];

  const getItemClass = (index: number): string => {
    // Alternating style: every second word has the red glowing border (outline)
    if (index % 2 === 1) return "marquee-item marquee-item-outline";
    if (index % 4 === 0) return "marquee-item";
    return "marquee-item marquee-item-gold";
  };

  return (
    <div className="scroll-marquee-wrapper" aria-hidden="true" style={{ overflow: 'hidden' }}>
      {/* Forward marquee */}
      <div className="marquee-track">
        <div className="marquee-inner-forward">
          {/* First set */}
          {allItems.map((item, i) => (
            <React.Fragment key={`items-1-${i}`}>
              <span className={getItemClass(i)}>{item}</span>
              <span className="marquee-item marquee-dot">·</span>
            </React.Fragment>
          ))}
          {/* Duplicate set for seamless looping */}
          {allItems.map((item, i) => (
            <React.Fragment key={`items-2-${i}`}>
              <span className={getItemClass(i)}>{item}</span>
              <span className="marquee-item marquee-dot">·</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};
