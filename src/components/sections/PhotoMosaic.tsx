import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

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
const MosaicImage: React.FC<{
  img: MosaicImage;
  index: number;
}> = ({ img, index }) => {
  // Stagger entry animation based on index
  const delay = Math.min(index * 0.05, 0.4);

  return (
    <motion.div
      className="mosaic-image-item"
      style={{
        position: 'absolute',
        top: img.top,
        left: img.left,
        width: img.width,
        height: img.height,
        transformOrigin: 'center',
      }}
      initial={{ opacity: 0, scale: 0.92, rotate: img.initialRotate }}
      whileInView={{ opacity: 1, scale: 1, rotate: img.initialRotate }}
      whileHover={{ scale: 1.06, rotate: 0, zIndex: 50 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        opacity: { duration: 0.6, delay },
        scale: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] },
        rotate: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] },
        default: { duration: 0.3 }
      }}
    >
      <img src={img.src} alt={img.alt} loading="lazy" />
    </motion.div>
  );
};

// ─── Sub-component: the central headline ─────────────────────────────────────
const MosaicHeadline: React.FC = () => {
  const { t } = useLanguage();

  return (
    <motion.div
      className="photo-mosaic-headline"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <span className="mosaic-eyebrow">{t('mosaic.eyebrow')}</span>
      <h2 className="mosaic-title">
        {t('mosaic.title').split('\n').map((line, i) => (
          <React.Fragment key={i}>
            {i > 0 && <br />}
            {line}
          </React.Fragment>
        ))}
      </h2>
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
        {t('mosaic.subtext')}
      </p>
    </motion.div>
  );
};

// ─── Main export ──────────────────────────────────────────────────────────────
export const PhotoMosaic: React.FC = () => {
  return (
    <div className="photo-mosaic-wrapper">
      <div className="photo-mosaic-sticky">
        <MosaicHeadline />

        {images.map((img, i) => (
          <MosaicImage
            key={i}
            img={img}
            index={i}
          />
        ))}
      </div>
    </div>
  );
};
