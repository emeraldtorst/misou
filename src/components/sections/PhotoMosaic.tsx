import React, { useRef } from 'react';
import { useScroll, useTransform, motion, MotionValue } from 'framer-motion';

interface MosaicImage {
  src: string;
  alt: string;
  top: string;
  left: string;
  width: string;
  height: string;
  initialX: number;
  initialY: number;
  initialRotate: number;
}

const images: MosaicImage[] = [
  {
    src: 'images/hero_ambient.png',
    alt: 'MISO·U interior with Japanese parasols',
    top: '8vh',
    left: '5vw',
    width: '22vw',
    height: '30vh',
    initialX: -120,
    initialY: -60,
    initialRotate: -4,
  },
  {
    src: 'images/dish_tartare.png',
    alt: 'Tartare dish',
    top: '4vh',
    left: '34vw',
    width: '28vw',
    height: '38vh',
    initialX: 0,
    initialY: -100,
    initialRotate: 2,
  },
  {
    src: 'images/wine_lounge.png',
    alt: 'Wine selection',
    top: '5vh',
    left: '68vw',
    width: '18vw',
    height: '26vh',
    initialX: 120,
    initialY: -50,
    initialRotate: 5,
  },
  {
    src: 'images/dish_cod.png',
    alt: 'Black cod dish',
    top: '44vh',
    left: '12vw',
    width: '20vw',
    height: '28vh',
    initialX: -80,
    initialY: 80,
    initialRotate: -6,
  },
  {
    src: 'images/lunch_box.png',
    alt: 'Premium bento lunch box',
    top: '46vh',
    left: '38vw',
    width: '24vw',
    height: '22vh',
    initialX: 0,
    initialY: 100,
    initialRotate: 1,
  },
  {
    src: 'images/dish_duck.png',
    alt: 'Duck main course',
    top: '42vh',
    left: '68vw',
    width: '20vw',
    height: '32vh',
    initialX: 100,
    initialY: 60,
    initialRotate: -3,
  },
];

// ─── Sub-component: each individual mosaic image ─────────────────────────────
// Hooks are correctly at the component top level (not inside JSX callbacks)
const MosaicImage: React.FC<{
  img: MosaicImage;
  scrollYProgress: MotionValue<number>;
  index: number;
}> = ({ img, scrollYProgress, index }) => {
  // Stagger each image by 0.05 so they arrive slightly after each other.
  // Keep all keyframes within [0, 0.75] so no image overshoots its fade-out at 0.88.
  const delay = index * 0.04;
  const inStart  = 0.05 + delay;
  const inEnd    = 0.35 + delay;
  const outStart = 0.75;
  const outEnd   = 0.92;

  const x       = useTransform(scrollYProgress, [inStart, inEnd], [img.initialX, 0]);
  const y       = useTransform(scrollYProgress, [inStart, inEnd], [img.initialY, 0]);
  const opacity = useTransform(scrollYProgress, [inStart, inEnd, outStart, outEnd], [0, 1, 1, 0]);
  const rotate  = useTransform(scrollYProgress, [inStart, inEnd], [img.initialRotate, 0]);
  const scale   = useTransform(scrollYProgress, [inStart, inEnd], [0.75, 1]);

  return (
    <motion.div
      className="mosaic-image-item"
      style={{
        position: 'absolute',
        top: img.top,
        left: img.left,
        width: img.width,
        height: img.height,
        x,
        y,
        opacity,
        rotate,
        scale,
      }}
    >
      <img src={img.src} alt={img.alt} />
    </motion.div>
  );
};

// ─── Sub-component: the central headline ─────────────────────────────────────
const MosaicHeadline: React.FC<{ scrollYProgress: MotionValue<number> }> = ({ scrollYProgress }) => {
  const opacity = useTransform(scrollYProgress, [0.1, 0.35, 0.82, 0.95], [0, 1, 1, 0]);
  const scale   = useTransform(scrollYProgress, [0.1, 0.35], [0.85, 1]);

  return (
    <motion.div
      className="photo-mosaic-headline"
      style={{ opacity, scale }}
    >
      <span className="mosaic-eyebrow">The Experience</span>
      <h2 className="mosaic-title">Every plate.<br />Every moment.</h2>
    </motion.div>
  );
};

// ─── Main export ──────────────────────────────────────────────────────────────
export const PhotoMosaic: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  return (
    <div className="photo-mosaic-wrapper" ref={containerRef}>
      <div className="photo-mosaic-sticky">
        <MosaicHeadline scrollYProgress={scrollYProgress} />

        {images.map((img, i) => (
          <MosaicImage
            key={i}
            img={img}
            scrollYProgress={scrollYProgress}
            index={i}
          />
        ))}
      </div>
    </div>
  );
};
