import React, { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';

const lines = [
  "There is a moment.",
  "When the first dish arrives,",
  "and the low amber light catches the glaze.",
  "When the sake is cold",
  "and the room hums quietly.",
  "This is not just dinner.",
  "This is ritual.",
  "Born in Vienna's first district.",
  "Steps from the cathedral.",
  "Where East meets West",
  "without apology.",
  "MISO·U was not invented.",
  "It was remembered.",
];

const ScrollLine: React.FC<{ text: string; index: number; total: number; scrollYProgress: ReturnType<typeof useScroll>['scrollYProgress'] }> = ({ text, index, total, scrollYProgress }) => {
  const start = index / (total + 2);
  const mid = (index + 1) / (total + 2);
  const end = (index + 2) / (total + 2);

  const opacity = useTransform(scrollYProgress, [start, mid, end], [0, 1, 0]);
  const y = useTransform(scrollYProgress, [start, mid], [40, 0]);
  const scale = useTransform(scrollYProgress, [start, mid, end], [0.9, 1, 0.95]);

  return (
    <motion.p
      className="scroll-story-line"
      style={{ opacity, y, scale }}
    >
      {text}
    </motion.p>
  );
};

export const ScrollStory: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <div className="scroll-story-wrapper" ref={containerRef}>
      <div className="scroll-story-sticky">
        <div className="scroll-story-bg" />
        <div className="scroll-story-content">
          {lines.map((line, i) => (
            <ScrollLine
              key={i}
              text={line}
              index={i}
              total={lines.length}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>
        <div className="scroll-story-skip">
          <a href="#ambience" className="scroll-story-skip-btn">Skip the story ↓</a>
        </div>
      </div>
    </div>
  );
};
