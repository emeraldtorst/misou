import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

export const ScrollMarquee: React.FC = () => {
  const { tArray } = useLanguage();

  const items1: string[] = tArray('marquee.items1') || [];
  const items2: string[] = tArray('marquee.items2') || [];

  const getItemClass = (index: number, track: 'forward' | 'reverse'): string => {
    if (track === 'forward') {
      if (index % 3 === 1) return "marquee-item marquee-item-gold";
      if (index % 3 === 2) return "marquee-item marquee-item-outline";
      return "marquee-item";
    } else {
      if (index % 3 === 0) return "marquee-item marquee-item-outline";
      if (index % 3 === 1) return "marquee-item";
      return "marquee-item marquee-item-gold";
    }
  };

  return (
    <div className="scroll-marquee-wrapper" aria-hidden="true" style={{ overflow: 'hidden' }}>
      {/* Forward marquee */}
      <div className="marquee-track">
        <div className="marquee-inner-forward">
          {/* First set */}
          {items1.map((item, i) => (
            <React.Fragment key={`items1-1-${i}`}>
              <span className={getItemClass(i, 'forward')}>{item}</span>
              <span className="marquee-item marquee-dot">·</span>
            </React.Fragment>
          ))}
          {/* Duplicate set for seamless looping */}
          {items1.map((item, i) => (
            <React.Fragment key={`items1-2-${i}`}>
              <span className={getItemClass(i, 'forward')}>{item}</span>
              <span className="marquee-item marquee-dot">·</span>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Reverse marquee */}
      <div className="marquee-track">
        <div className="marquee-inner-reverse">
          {/* First set */}
          {items2.map((item, i) => (
            <React.Fragment key={`items2-1-${i}`}>
              <span className={getItemClass(i, 'reverse')}>{item}</span>
              <span className="marquee-item marquee-dot">·</span>
            </React.Fragment>
          ))}
          {/* Duplicate set for seamless looping */}
          {items2.map((item, i) => (
            <React.Fragment key={`items2-2-${i}`}>
              <span className={getItemClass(i, 'reverse')}>{item}</span>
              <span className="marquee-item marquee-dot">·</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};
