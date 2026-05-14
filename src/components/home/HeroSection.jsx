import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Star } from 'lucide-react';
import { HOTEL } from '../../utils/constants';

const WORDS = ['LUXURY', 'HERITAGE', 'ELEGANCE'];

/* ── Hero Section ────────────────────────────────────────── */
const HeroSection = () => {
  const [wordIdx, setWordIdx] = useState(0);
  const overlayRef = useRef(null);

  // Word cycle
  useEffect(() => {
    const t = setInterval(() => setWordIdx((i) => (i + 1) % WORDS.length), 3000);
    return () => clearInterval(t);
  }, []);

  // Parallax on scroll
  useEffect(() => {
    const onScroll = () => {
      if (overlayRef.current) {
        overlayRef.current.style.transform = `translateY(${window.scrollY * 0.25}px)`;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div ref={overlayRef} className="absolute inset-0 scale-110 will-change-transform">
        <img
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1920&q=90"
          alt="Gupta Residency"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark/60 via-dark/40 to-dark" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/40 to-transparent" />
      </div>

      {/* Floating gold particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-0.5 h-0.5 rounded-full bg-gold"
            style={{ left: `${10 + i * 11}%`, top: `${25 + (i % 4) * 15}%` }}
            animate={{ y: [0, -25, 0], opacity: [0.1, 0.6, 0.1] }}
            transition={{ duration: 4 + i * 0.5, repeat: Infinity, ease: 'easeInOut', delay: i * 0.4 }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container-luxury text-center px-4 pt-20">
        {/* Stars badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="inline-flex items-center gap-3 mb-8 px-5 py-2.5 border border-gold/25 bg-dark/30 backdrop-blur-md"
        >
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={11} className="text-gold fill-gold" />
            ))}
          </div>
          <span className="font-dm text-[10px] tracking-[0.35em] text-cream/60 uppercase">
            5-Star Luxury · New Delhi, India
          </span>
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1
            className="font-cormorant font-light text-cream leading-[0.9]"
            style={{ fontSize: 'clamp(3.5rem, 10vw, 8.5rem)' }}
          >
            THE FINEST
          </h1>

          <div className="overflow-hidden" style={{ fontSize: 'clamp(3.5rem, 10vw, 8.5rem)', lineHeight: 0.9 }}>
            <AnimatePresence mode="wait">
              <motion.h1
                key={wordIdx}
                initial={{ y: '100%', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: '-100%', opacity: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="font-cormorant font-bold gold-text block"
              >
                {WORDS[wordIdx]}
              </motion.h1>
            </AnimatePresence>
          </div>

          <h1
            className="font-cormorant font-light text-cream leading-[0.9]"
            style={{ fontSize: 'clamp(3.5rem, 10vw, 8.5rem)' }}
          >
            IN INDIA
          </h1>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="font-cormorant italic text-xl md:text-2xl text-cream/55 mt-8 mb-10"
        >
          {HOTEL.tagline}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 sm:gap-10 justify-center"
        >
          <Link to="/booking" className="btn-gold">
            Reserve Your Suite
          </Link>
          <Link to="/rooms" className="btn-ghost">
            Explore Rooms
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        className="absolute bottom-32 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
      >
        <span className="font-dm text-[9px] tracking-[0.4em] uppercase text-cream/35">Discover</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={20} className="text-gold" />
        </motion.div>
      </motion.button>
    </section>
  );
};

export default HeroSection;
