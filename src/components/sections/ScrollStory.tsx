import React, { useRef } from 'react';
import { useScroll, useTransform, motion, MotionValue } from 'framer-motion';

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

// Each line gets its own component so hooks are always at top-level
const ScrollLine: React.FC<{
  text: string;
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
}> = ({ text, index, total, scrollYProgress }) => {
  // Spread lines evenly across 0.05–0.95 of scroll progress
  // Each line occupies a "window" of 2 / (total + 2) width
  const window = 1 / (total + 1);
  const start  = index * window * 0.8;         // fade in starts
  const mid    = start + window * 0.5;          // fully visible
  const end    = mid + window * 0.5;            // fade out ends

  // Clamp to [0, 1]
  const s = Math.min(start, 0.95);
  const m = Math.min(mid,   0.97);
  const e = Math.min(end,   0.99);

  const opacity = useTransform(scrollYProgress, [s, m, e], [0, 1, 0]);
  // y: slides up into view, no conflict with centering (centering is done by CSS flexbox on parent)
  const y       = useTransform(scrollYProgress, [s, m], [30, 0]);
  const scale   = useTransform(scrollYProgress, [s, m, e], [0.92, 1, 0.96]);

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
        {/* Each line is stacked absolutely over each other in the center */}
        <div className="scroll-story-lines-container">
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
      </div>
    </div>
  );
};
