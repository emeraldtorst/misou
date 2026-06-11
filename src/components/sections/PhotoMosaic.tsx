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
    src: 'images/japan1.jpeg',
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
    src: 'images/f3.jpeg',
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
    src: 'images/bar1.jpeg',
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
    src: 'images/f10.jpeg',
    alt: 'Premium sushi rolls selection',
    top: '22vh',
    left: '18vw',
    width: '14vw',
    height: '18vh',
    initialX: -100,
    initialY: -100,
    initialRotate: 8,
  },
  {
    src: 'images/res6.jpeg',
    alt: 'MISO·U modern ambient lighting detail',
    top: '25vh',
    left: '80vw',
    width: '14vw',
    height: '20vh',
    initialX: 120,
    initialY: -80,
    initialRotate: -7,
  },
  {
    src: 'images/f4.jpeg',
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
    src: 'images/f5.jpeg',
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
    src: 'images/f6.jpeg',
    alt: 'Duck main course',
    top: '42vh',
    left: '68vw',
    width: '20vw',
    height: '32vh',
    initialX: 100,
    initialY: 60,
    initialRotate: -3,
  },
  {
    src: 'images/drink2.jpeg',
    alt: 'Signature botanical cocktail',
    top: '75vh',
    left: '4vw',
    width: '16vw',
    height: '22vh',
    initialX: -150,
    initialY: 100,
    initialRotate: 6,
  },
  {
    src: 'images/res5.jpeg',
    alt: 'Elegant interior dining booths',
    top: '72vh',
    left: '26vw',
    width: '22vw',
    height: '24vh',
    initialX: -50,
    initialY: 150,
    initialRotate: -4,
  },
  {
    src: 'images/f8.jpeg',
    alt: 'Crispy starter presentation',
    top: '75vh',
    left: '52vw',
    width: '18vw',
    height: '22vh',
    initialX: 50,
    initialY: 120,
    initialRotate: 3,
  },
  {
    src: 'images/drink3.jpeg',
    alt: 'Exquisite sake and cocktails pairings',
    top: '76vh',
    left: '76vw',
    width: '20vw',
    height: '22vh',
    initialX: 150,
    initialY: 100,
    initialRotate: -5,
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
  const delay = index * 0.04;
  const inStart  = 0.05 + delay;
  const inEnd    = 0.35 + delay;

  const x       = useTransform(scrollYProgress, [inStart, inEnd], [img.initialX, 0]);
  const y       = useTransform(scrollYProgress, [inStart, inEnd], [img.initialY, 0]);
  const opacity = useTransform(scrollYProgress, [inStart, inEnd], [0, 1]);
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
  const opacity = useTransform(scrollYProgress, [0.1, 0.35], [0, 1]);
  const scale   = useTransform(scrollYProgress, [0.1, 0.35], [0.85, 1]);

  return (
    <motion.div
      className="photo-mosaic-headline"
      style={{ opacity, scale }}
    >
      <span className="mosaic-eyebrow">The Experience</span>
      <h2 className="mosaic-title">Every plate.<br />Every moment.</h2>
      <p 
        className="mosaic-subtext"
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '0.85rem',
          color: 'var(--color-text-secondary)',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          marginTop: '1.5rem',
          textAlign: 'center',
          fontWeight: 300,
          maxWidth: '320px',
          lineHeight: 1.6
        }}
      >
        A visual archive of culinary craftsmanship and architectural atmosphere.
      </p>
    </motion.div>
  );
};

// ─── Main export ──────────────────────────────────────────────────────────────
export const PhotoMosaic: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
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
